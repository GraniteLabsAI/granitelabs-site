---
title: AI Inference
description: AI inference in a real lab context — on-device ONNX detection running inside Blue Iris on an RTX 4070 SUPER, and Claude AI used for research, documentation, and system design.
---

# AI Inference

---

## <span class="cube-icon cube-ai"></span> Overview

How AI inference works in this lab — what runs locally, what runs in the cloud,
and how the two approaches serve different purposes within the same deployment.

---

## 🔹 Overview

This lab runs two distinct AI systems that do not overlap in function.

**On-device inference** handles real-time camera analysis. It runs entirely
on local hardware inside Blue Iris, with no internet dependency and no latency
from external services.

**Cloud AI** handles research, documentation, system design, and learning.
Claude (claude.ai) is used as a thinking and writing tool — not for real-time
detection.

---

## 🎯 What AI Inference Means

AI inference = running a trained model against new input.

Two forms:

**Real-time inference**
- Camera frame arrives  
- Model analyzes  
- Decision made in milliseconds  

**Analytical inference**
- Question submitted  
- Model returns structured output  
- Not time-critical  

---

## 🏗️ Two-Layer AI Architecture

ON-DEVICE INFERENCE
    Camera Frame -> ONNX Runtime (Blue Iris)
    -> yolov8s.onnx
    -> RTX 4070 SUPER (CUDA)
    -> Object Classification
    -> Alert Confirmed / Cancelled

CLOUD AI (CLAUDE)
    Question / Document
    -> Claude AI (claude.ai)
    -> Research / Design / Docs
    -> Structured Output

---

## ⚡ On-Device Inference — ONNX in Blue Iris

### What It Is

Blue Iris v6 includes a native ONNX inference engine.

- Runs `.onnx` models locally  
- No external AI server required  

---

### Why On-Device Matters

- No network latency  
- Works during internet outages  
- No per-inference cost  
- Camera frames never leave the system  
- Predictable performance  

---

### Inference Hardware

| Component | Detail |
|---|---|
| GPU | NVIDIA GeForce RTX 4070 SUPER |
| Execution Provider | CUDA |
| Fallback | CPU |
| Runtime | ONNX Runtime |

---

### Detection Pipeline

    Camera Motion Trigger
        ↓
    Frame Extracted
        ↓
    Sent to ONNX Runtime
        ↓
    yolov8s.onnx runs
        ↓
    Objects + confidence returned
        ↓
    Blue Iris filters applied
        ↓
    >= 60% -> alert confirmed
    < 60%  -> alert cancelled

---

### Primary Model — yolov8s.onnx

- Fast inference  
- 80 object classes  
- Low GPU usage  
- Default across cameras  

---

### Motion vs AI

Motion:
- Pixel change detection  
- Fast but noisy  

AI:
- Object-based detection  
- Confirms motion  

Combined:
👉 Accurate alerting  

---

## 🤖 Cloud AI — Claude

### What It Is

Claude is an operator tool — not part of the detection system.

---

### Use Cases

| Use | Description |
|---|---|
| Documentation | Writing real system docs |
| Research | Understanding systems |
| Design | Architecture planning |
| Troubleshooting | Debug workflows |

---

### What Claude Does NOT Do

- No camera access  
- No real-time inference  
- No alert decisions  
- Not integrated into Blue Iris  

---

## 🔗 How They Work Together

| Dimension | On-Device | Cloud AI |
|---|---|---|
| Purpose | Detection | Thinking |
| Speed | Milliseconds | Seconds |
| Input | Images | Text |
| Output | Classes | Explanations |
| Internet | No | Yes |

---

## 📊 Reference

| System | Type | Hardware | Use |
|---|---|---|---|
| Blue Iris ONNX | Real-time | RTX 4070 SUPER | Detection |
| Claude | Cloud | claude.ai | Docs / Design |

---

## 📊 Related Pages

- [AI Detection System](/ai-systems/)  
- [Blue Iris System](/blue-iris/)  
- [AI Tuning](/blue-iris/ai-tuning/)  
- [Detection Flow](/blue-iris/detection-flow/)  
- [Architecture](/architecture/)  

---

## ⚠️ Notes

- ONNX runs locally  
- Claude is external  
- No dependency between them  
- GPU determines performance  

---

## ✅ Result

Two AI systems:

- ONNX = real-time detection  
- Claude = documentation and design  

Together they form both the **execution layer** and the **knowledge layer** of the system.
