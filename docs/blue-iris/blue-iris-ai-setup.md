---
title: Blue Iris AI Setup (Step-by-Step Guide with ONNX & YOLOv8)
description: Complete Blue Iris AI setup guide using ONNX and YOLOv8. Step-by-step instructions for configuring AI detection, GPU acceleration, and motion confirmation.
image: /img/og/blueiris-og.jpg
---

# Blue Iris AI Setup (ONNX + YOLOv8)

<img src="/img/og/blueiris-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 🔎 Quick Answer

Blue Iris AI setup involves enabling ONNX inference, loading a YOLOv8 model, configuring GPU acceleration, and using AI to confirm motion alerts.

---

## 🔎 What is Blue Iris AI?

Blue Iris AI refers to using artificial intelligence models such as YOLOv8 through ONNX to analyze camera footage and confirm motion events.

Unlike traditional motion detection, Blue Iris AI identifies objects such as people, vehicles, and animals, allowing more accurate alerts and fewer false triggers.

---

## 🔹 Overview

This guide shows how to configure AI detection in Blue Iris using ONNX and YOLOv8.

The goal is to eliminate false alerts and create reliable object-based detection.

---

## 🎯 Objective

- Enable AI in Blue Iris  
- Configure ONNX inference  
- Use GPU acceleration (CUDA)  
- Apply AI to confirm motion  
- Reduce false alerts  

---

## 🧠 Key Concepts

- Motion triggers AI  
- AI confirms objects  
- Confidence threshold controls noise  
- GPU improves performance  

---

## 🛠️ Step-by-Step Setup

### 1. Enable AI

- Open Blue Iris  
- Go to **Settings → AI**  
- Enable AI  

---

### 2. Load ONNX Model

- Select model:
  yolov8s.onnx

---

### 3. Configure GPU (CUDA)

- Enable GPU acceleration  
- Select NVIDIA GPU  
- Confirm CUDA is active  

---

### 4. Enable AI on Camera

- Open camera settings  
- Go to **Trigger tab**  
- Enable:
  Use AI to confirm motion  

---

### 5. Set Confidence Threshold

Recommended:
60%

---

## ⚡ Recommended Settings

| Setting | Value |
|---|---|
| Model | yolov8s.onnx |
| Confidence | 60% |
| GPU | Enabled |
| Use AI | Yes |

---

## ⚠️ Common Mistakes

- Using AI without motion  
- Setting confidence too low  
- Not enabling GPU  
- Expecting AI to replace motion  

---

## 📊 Related Pages

- [Best Blue Iris Settings](/blue-iris/blue-iris-best-settings/)
- [AI Tuning](/blue-iris/ai-tuning/)
- [Detection Flow](/blue-iris/detection-flow/)
- [Blue Iris vs NVR](/blue-iris/blue-iris-vs-nvr/)

---

## ✅ Result

A properly configured Blue Iris AI system produces accurate alerts, reduced noise, and reliable detection using ONNX and YOLOv8.
