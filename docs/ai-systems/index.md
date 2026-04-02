---
title: AI Detection System
description: Blue Iris v6 built-in AI using ONNX runtime and GPU acceleration for object classification, false alert reduction, and animal detection.
---

# AI Detection System

Built-in AI for Blue Iris v6 using ONNX runtime and GPU acceleration.
Runs object detection directly inside Blue Iris — no external AI server required.

---

## 🔹 Overview

Blue Iris v6 includes a native AI inference engine built on ONNX runtime.
It replaces the need for external providers such as CodeProject.AI or DeepStack.
All model loading, inference, and result handling happens inside Blue Iris itself.

The AI layer sits between motion detection and alerting:
```
Camera Feed → Motion Trigger → AI Confirmation → Alert or Cancel
```

When motion fires, Blue Iris sends the frame to the AI engine.
If the AI confirms a recognized object above the confidence threshold,
the alert proceeds. If not, the alert is cancelled.

This is the primary mechanism for reducing false alerts on all cameras.

---

## 🎯 Objectives

- Confirm motion events using object classification before alerting
- Reduce false positives caused by lighting changes, shadows, and foliage
- Leverage GPU acceleration for low-latency inference across multiple cameras
- Support specialized detection models for specific use cases (animals, vehicles)

---

## 🧠 How Blue Iris Built-In AI Works

### Inference Flow

1. Camera detects motion and triggers a clip
2. Blue Iris extracts a frame from the trigger point
3. Frame is sent to the ONNX inference engine
4. Model classifies objects in the frame
5. Results are compared against the camera's AI filter settings
6. If a matching object exceeds the confidence threshold → alert confirmed
7. If no match or confidence too low → alert cancelled

### Key Concepts

- **AI confirmation is per-camera** — each camera has its own object filter settings
- **AI does not replace motion detection** — it confirms or cancels what motion already found
- **Confidence threshold** — the minimum score an object must reach to confirm an alert
- **Object filters** — define which object classes (person, vehicle, animal) trigger confirmation
- **Cancel on no result** — if AI finds nothing, the motion alert is suppressed

### What the AI Classifies

Standard YOLO models detect and classify:
- Person
- Vehicle (car, truck, bus, motorcycle, bicycle)
- Animal (with the right model)
- Other objects depending on the model's training dataset

---

## ⚡ GPU Acceleration with ONNX

### Runtime

Blue Iris uses the **ONNX Runtime** for inference. This allows direct loading
of `.onnx` model files without conversion or external frameworks.

GPU acceleration is handled via **CUDA** (NVIDIA) or **DirectML**, depending
on the system configuration. With an NVIDIA GPU, CUDA execution is preferred
for lowest latency.

### Hardware

| Component | Value |
|---|---|
| GPU | NVIDIA GeForce RTX 4070 SUPER |
| Runtime | ONNX Runtime (built into Blue Iris v6) |
| Execution Provider | CUDA (NVIDIA GPU path) |

The RTX 4070 SUPER provides substantial inference throughput — well above
what is required for continuous multi-camera AI processing at standard
frame rates. GPU utilization during AI inference is typically low to moderate
at this hardware tier.

### Why GPU Matters

- CPU inference is significantly slower per frame
- GPU allows concurrent processing across multiple camera triggers
- Lower inference latency means AI confirmation happens before clip recording ends
- Consistent frame timing prevents missed detections on fast-moving subjects

### Verify GPU Is Active

In Blue Iris → Settings → AI:
- The provider should show ONNX with GPU/CUDA selected
- If GPU is not detected, Blue Iris falls back to CPU automatically
- Check the Blue Iris log for ONNX initialization messages on startup

---

## 📁 Model Configuration

### Models Folder
```
C:\BlueIris\AI\models
```

All `.onnx` model files are placed in this folder. Blue Iris reads available
models from this location and lists them in the AI settings dropdown.

### Active Models

| Model | Purpose | Use Case |
|---|---|---|
| `yolov8s.onnx` | Primary general detection | Person, vehicle, standard objects |
| `ipcam-animal` | Specialized animal detection | Deer, dogs, wildlife |

### yolov8s.onnx

YOLOv8s is the small variant of the YOLOv8 architecture. It is optimized for
speed without significant accuracy loss compared to larger variants.

- Fast inference time — suitable for real-time multi-camera deployment
- Detects 80 COCO object classes including person, vehicle, and common animals
- Good balance of accuracy and GPU memory footprint
- Preferred primary model when latency matters more than maximum precision

YOLOv8m or YOLOv8l can be substituted for higher accuracy at the cost of
increased GPU load and inference time.

### ipcam-animal

A specialized model trained on IP camera footage of animals.
More accurate than general YOLO models for wildlife and outdoor animal detection.

- Tuned for deer, dogs, cats, and similar outdoor animals
- Reduces false negatives on animal triggers that general models miss
- Assigned per-camera — only enable on cameras covering outdoor animal zones
- Can run alongside yolov8s or as a standalone model on specific cameras

### Adding Custom Models

1. Place the `.onnx` file in `C:\BlueIris\AI\models`
2. Restart Blue Iris or trigger a model refresh
3. Model appears in the AI settings dropdown
4. Assign to cameras as needed

---

## 🎯 Confidence Tuning

### Current Setting

**Minimum confidence: 60%**

This means the AI must be at least 60% certain an object matches the target
class before confirming an alert.

### How to Interpret Confidence

| Confidence | Meaning |
|---|---|
| 90%+ | Very high certainty — object clearly visible, well-framed |
| 70–89% | Good detection — typical daytime result on a clear subject |
| 60–69% | Marginal — partial occlusion, distance, or lighting factors |
| Below 60% | Filtered out — alert cancelled |

### Tuning Guidelines

**Too many false positives (alerts firing incorrectly):**
- Raise threshold to 65–75%
- Tightens confirmation — only high-confidence detections proceed

**Too many missed detections (real events not alerting):**
- Lower threshold to 50–55%
- Accept more marginal detections — increases sensitivity

**60% is a stable starting point** for mixed indoor/outdoor cameras.
Adjust per-camera based on observed false positive and miss rates.

### Per-Camera Tuning

Confidence can be adjusted independently per camera in Blue Iris.
Cameras covering:
- Close-range zones (entry points, doors) → can tolerate 65–70%
- Long-range or low-light zones → may need 50–55% to catch real events
- Animal zones with ipcam-animal model → start at 55–60%

---

## 🐾 Animal Detection

### Use Case

The `ipcam-animal` model is enabled on outdoor cameras covering areas
where wildlife or animals are expected — perimeter zones, pool area,
front gate, and similar locations.

Animal detection serves two purposes:
1. Confirm real animal events that should trigger alerts
2. Prevent human/vehicle models from mis-classifying animal movement

### Configuration

- Assign `ipcam-animal` model to outdoor perimeter cameras
- Keep `yolov8s.onnx` as the primary model on the same cameras for person/vehicle detection
- Set animal object class as a trigger condition in the camera's AI filter
- Confidence threshold for animal detection: 55–60% recommended (animals are harder to classify at distance)

### Expected Behavior

- Deer moving through the property triggers the animal-assigned cameras
- Alert fires with object class = animal
- Human and vehicle filters on the same camera remain active in parallel
- ipcam-animal does not suppress human/vehicle detections — both models run

---

## ⚙️ Optimization

### Max Connects

**Current setting: 8**

Max connects controls how many concurrent AI inference requests Blue Iris
allows at one time. When multiple cameras trigger simultaneously, Blue Iris
queues inference requests up to this limit.

| Setting | Behavior |
|---|---|
| Too low (1–3) | AI queue backs up under simultaneous triggers; delayed confirmations |
| 8 (current) | Handles most multi-camera burst scenarios without queuing |
| Too high (16+) | Can saturate GPU memory if many large models are loaded |

With an RTX 4070 SUPER and yolov8s as the primary model, 8 concurrent
connects is appropriate. Monitor GPU memory usage if adding larger models
or increasing camera count.

### Frame Selection

Blue Iris selects a frame near the trigger point for AI analysis.
For best results:
- Ensure the trigger zone is positioned where subjects are fully in frame
- Avoid triggers at zone edges where subjects are partially visible
- Pre-trigger buffer helps — subject may be better framed slightly before peak motion

### GPU Memory

- yolov8s has a small memory footprint — well within RTX 4070 SUPER capacity
- ipcam-animal adds minimal additional VRAM when loaded
- Loading many large models simultaneously increases VRAM usage
- Check GPU memory in Task Manager → Performance → GPU if inference slows

### Reducing AI Load

If GPU or CPU load becomes a concern:
- Reduce max connects to 4–6
- Switch to a smaller model (yolov8n instead of yolov8s)
- Restrict AI confirmation to cameras with the highest false positive rates
- Increase motion sensitivity thresholds so fewer events reach the AI stage

### Logging and Verification

- Blue Iris AI log shows per-event inference results and confidence scores
- Use the alert clip viewer to confirm AI is correctly classifying objects
- Check for ONNX initialization errors in the Blue Iris system log on startup
- If GPU inference stops working, Blue Iris falls back to CPU — performance drops significantly

---

## 📊 Reference

### Current Configuration Summary

| Setting | Value |
|---|---|
| AI Provider | Built-in ONNX (Blue Iris v6) |
| GPU | NVIDIA GeForce RTX 4070 SUPER |
| Execution Provider | CUDA |
| Primary Model | yolov8s.onnx |
| Animal Model | ipcam-animal |
| Models Folder | C:\BlueIris\AI\models |
| Min Confidence | 60% |
| Max Connects | 8 |

### Key Settings Location — Blue Iris

| Setting | Path |
|---|---|
| AI provider and GPU config | Settings → AI |
| Model selection | Settings → AI → Model |
| Max connects | Settings → AI → Max connects |
| Per-camera AI filters | Camera → Trigger → AI |
| Per-camera confidence | Camera → Trigger → AI → Min confidence |
| AI alert log | Log → AI |

### Related Pages

- [Blue Iris System](/blue-iris/)
- [AI Tuning](/blue-iris/ai-tuning/)
- [Detection Flow](/blue-iris/detection-flow/)
- [Fix False Alerts](/blue-iris/fix-false-alerts/)
- [Alerts](/blue-iris/alerts-not-working/)

---

## ⚠️ Notes

- Built-in ONNX AI requires Blue Iris v6 — not available in earlier versions
- CUDA acceleration requires a compatible NVIDIA driver — keep drivers current
- If CUDA is unavailable, ONNX falls back to CPU; inference time increases significantly
- ipcam-animal is a supplemental model — it does not replace yolov8s for person/vehicle detection
- Confidence threshold changes take effect immediately — no restart required
- Adding new model files to the models folder may require a Blue Iris restart to appear in the UI

---

## ✅ Result

A GPU-accelerated, built-in AI system running directly inside Blue Iris v6.
yolov8s handles general detection across all cameras. ipcam-animal extends
coverage for outdoor wildlife zones. 60% confidence with 8 concurrent connects
provides stable multi-camera performance on the RTX 4070 SUPER with minimal
false alert rates.
