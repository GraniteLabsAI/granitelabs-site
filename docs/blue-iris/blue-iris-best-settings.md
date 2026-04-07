---
title: Best Blue Iris Settings (Real World Performance Guide)
description: Real-world Blue Iris settings for AI detection, motion tuning, storage optimization, and performance stability across multi-camera systems.
image: /img/og/blueiris-og.jpg
---

# Best Blue Iris Settings (Real World)

<img src="/img/og/blueiris-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## <span class="cube-icon cube-ai"></span> Overview

These are real-world Blue Iris settings designed for:

- Stable multi-camera systems  
- Accurate AI detection  
- Reduced false alerts  
- Efficient storage usage  

This is not theory — these settings are based on actual deployment behavior.

---

## 🎯 Objective

- Improve detection accuracy  
- Reduce CPU load  
- Optimize storage  
- Create predictable system behavior  

---

## 🧠 Core Principles

- Motion triggers first, AI confirms  
- Direct-to-disk reduces overhead  
- FPS should be controlled (not maxed)  
- Simpler systems are more stable  

---

## ⚙️ Recommended Baseline Settings

### Video

- Resolution: Native camera resolution  
- FPS: 10–15 FPS  
- Codec: H.264 (preferred for stability)  
- Keyframe: 1–2 seconds  

---

### Recording

- Direct-to-disk: Enabled  
- Pre-trigger: 2–3 seconds  
- Combine/cut: 15–30 seconds  

---

### Motion Detection

- Use zones (not full frame)  
- Object size filtering enabled  
- Sensitivity moderate (not max)  

---

### AI Settings

- Use AI to confirm motion: Enabled  
- Confidence: ~60% starting point  
- Model: YOLOv8 (if available)  
- Use main stream for AI: Enabled  

---

### Storage

- Separate New vs Stored  
- Limit New folder size  
- Monitor alert folder growth  

---

### Performance

- Hardware acceleration: Enabled  
- Substreams: Enabled  
- Avoid maxing all cameras  

---

## ⚠️ Common Mistakes

- Running max FPS on all cameras  
- Using full-frame motion detection  
- Relying on AI without good motion setup  
- Ignoring storage growth  

---

## 📊 Related Systems

- [Blue Iris Setup Guide](/blue-iris/)
- [Storage Architecture](/blue-iris/storage-architecture/)
- [AI Tuning](/blue-iris/ai-tuning/)
- [Performance Optimization](/blue-iris/performance-optimization/)

---

## ✅ Result

A stable, predictable, and efficient Blue Iris system that performs well in real-world conditions.
