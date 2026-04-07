---
title: AI Detection System
description: Blue Iris v6 built-in AI using ONNX runtime and GPU acceleration for object classification, false alert reduction, and animal detection.
---

# AI Detection System

---

## <span class="cube-icon cube-ai"></span> Overview

Built-in AI for Blue Iris v6 using ONNX runtime and GPU acceleration.

Runs object detection directly inside Blue Iris — no external AI server required.

The AI layer sits between motion detection and alerting:

    Camera Feed -> Motion Trigger -> AI Confirmation -> Alert or Cancel

When motion fires, Blue Iris sends the frame to the AI engine.  
If the AI confirms a recognized object above the confidence threshold,  
the alert proceeds. If not, the alert is cancelled.

This is the primary mechanism for reducing false alerts on all cameras.

---

## 🎯 Objectives

- Confirm motion events using object classification before alerting  
- Reduce false positives caused by lighting changes, shadows, and foliage  
- Leverage GPU acceleration for low-latency inference  
- Support specialized detection models (animals, vehicles)  

---

## 🧠 How Blue Iris Built-In AI Works

### Inference Flow

1. Camera detects motion  
2. Frame extracted from trigger  
3. Frame sent to ONNX engine  
4. Model classifies objects  
5. Results compared to camera filters  
6. Match above threshold -> alert confirmed  
7. No match -> alert cancelled  

---

### Key Concepts

- AI is **per-camera**  
- AI **confirms**, not replaces motion  
- Confidence threshold controls filtering  
- Object filters define triggers  
- "Cancel on no result" suppresses noise  

---

### What the AI Classifies

- Person  
- Vehicle  
- Animal (model-dependent)  
- Other YOLO-supported objects  

---

## ⚡ GPU Acceleration with ONNX

### Runtime

Blue Iris uses **ONNX Runtime** to load `.onnx` models directly.

Execution:
- CUDA (preferred, NVIDIA)  
- DirectML (fallback)  

---

### Hardware

| Component | Value |
|---|---|
| GPU | NVIDIA RTX 4070 SUPER |
| Runtime | ONNX Runtime |
| Execution | CUDA |

---

### Why GPU Matters

- Faster inference per frame  
- Handles multiple cameras concurrently  
- Prevents missed detections  
- Keeps latency low  

---

### Verify GPU Is Active

Blue Iris > Settings > AI

- Provider shows ONNX + CUDA  
- Logs confirm initialization  
- CPU fallback = performance drop  

---

## 📁 Model Configuration

### Models Folder

    C:\BlueIris\AI\models

---

### Active Models

| Model | Purpose | Use |
|---|---|---|
| yolov8s.onnx | General detection | Person, vehicle |
| ipcam-animal | Animal detection | Wildlife |

---

### yolov8s

- Fast, efficient  
- 80 COCO classes  
- Best default model  

---

### ipcam-animal

- Tuned for wildlife  
- Better outdoor accuracy  
- Assign per-camera  

---

### Adding Models

1. Place `.onnx` file in models folder  
2. Restart Blue Iris  
3. Select in AI settings  

---

## 🎯 Confidence Tuning

**Current: 60%**

| Range | Meaning |
|---|---|
| 90%+ | Very high certainty |
| 70–89% | Strong detection |
| 60–69% | Marginal |
| <60% | Rejected |

---

### Tuning Strategy

**Too many false alerts**  
- Raise to 65–75%

**Missed detections**  
- Lower to 50–55%

---

### Per-Camera Guidance

- Close range -> 65–70%  
- Long range -> 50–55%  
- Animal zones -> 55–60%  

---

## 🐾 Animal Detection

### Use Case

Outdoor cameras:
- Perimeter  
- Pool  
- Gate  

---

### Configuration

- Assign ipcam-animal  
- Keep yolov8s active  
- Enable animal class  
- Confidence: 55–60%  

---

### Behavior

- Animal detected -> alert  
- Human/vehicle still detected  
- Models run in parallel  

---

## ⚙️ Optimization

### Max Connects

**Current: 8**

| Value | Effect |
|---|---|
| 1–3 | Queue delays |
| 8 | Balanced |
| 16+ | GPU saturation risk |

---

### Frame Selection

- Trigger zone placement matters  
- Avoid edge detection  
- Use pre-trigger buffer  

---

### GPU Memory

- yolov8s = low footprint  
- Multiple large models increase VRAM usage  
- Monitor via Task Manager  

---

### Reduce AI Load

- Lower max connects  
- Use smaller model  
- Limit AI to key cameras  
- Improve motion filtering  

---

### Logging

- Use AI logs  
- Verify classifications  
- Watch for CPU fallback  

---

## 📊 Reference

### Current Configuration

| Setting | Value |
|---|---|
| AI Provider | ONNX |
| GPU | RTX 4070 SUPER |
| Execution | CUDA |
| Model | yolov8s |
| Animal Model | ipcam-animal |
| Confidence | 60% |
| Max Connects | 8 |

---

### Key Settings

| Setting | Location |
|---|---|
| AI provider | Settings > AI |
| Model | Settings > AI |
| Max connects | Settings > AI |
| Camera AI | Camera > Trigger > AI |
| Confidence | Camera > AI |
| Logs | Log > AI |

---

## 📊 Related Pages

- [Blue Iris System](/blue-iris/)  
- [AI Tuning](/blue-iris/ai-tuning/)  
- [Detection Flow](/blue-iris/detection-flow/)  
- [Fix False Alerts](/blue-iris/fix-false-alerts/)  
- [Alerts](/blue-iris/alerts-not-working/)  

---

## ⚠️ Notes

- Requires Blue Iris v6  
- CUDA requires NVIDIA driver  
- CPU fallback reduces performance  
- ipcam-animal is supplemental  
- Confidence changes apply instantly  
- New models may require restart  

---

## ✅ Result

A GPU-accelerated AI system running fully inside Blue Iris v6.

yolov8s handles general detection.  
ipcam-animal extends wildlife coverage.  

60% confidence and 8 max connects provide stable multi-camera performance.
