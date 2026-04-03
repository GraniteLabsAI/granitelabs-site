---
title: Blue Iris Tuning Guide
description: Comprehensive Blue Iris tuning guide covering streams, codecs, motion detection, AI confirmation, storage, and performance optimization.
image: /img/og/blueiris-tuning-guide-og.jpg
---

# Blue Iris 6 – Tuning Guide

<img src="/img/og/blueiris-tuning-guide-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 🔹 Overview
This page captures practical Blue Iris tuning guidance for achieving a stable, responsive, and scalable system.

The focus is on real-world balance: image quality, reliable detection, manageable storage growth, and controlled CPU / GPU load.

---

## 🎯 Objective
- Improve system stability  
- Reduce false alerts  
- Preserve useful video evidence  
- Keep storage growth predictable  
- Balance quality against performance  

---

## 🧠 Key Concepts
- Tune one variable at a time  
- Stability matters more than maximum quality  
- Detection quality and recording quality are related, but not identical  
- AI should confirm events, not compensate for poor base setup  
- Direct-to-disk reduces system load  
- Overly aggressive settings typically create more problems than value  

---

## 🛠️ Core Tuning Areas

### Stream Strategy
- Confirm the camera is providing the expected stream  
- Use the main stream where image detail is critical  
- Use sub-stream strategies where appropriate  
- Avoid unnecessary re-encoding when using direct-to-disk  

---

### Codec Choice
- H.264 is typically the safest baseline for multi-camera stability  
- H.265 may reduce bandwidth or storage, but can increase decode complexity  
- If instability appears, test H.264 before making other major changes  

---

### Frame Rate
- ~15 FPS is a strong baseline for most security use cases  
- Higher frame rates increase storage and processing load  
- Match FPS to the actual requirement:
  - General surveillance → moderate FPS  
  - High-motion areas → increase only where justified  

---

### Resolution
- Use resolution appropriate to the scene  
- Higher resolution does not always improve usable evidence  
- Camera placement and field of view often matter more than megapixels  

---

### Recording Mode
- Choose continuous, triggered, or hybrid recording intentionally  
- Direct-to-disk is preferred where supported  
- Confirm pre-trigger and post-trigger behavior match real event needs  

---

### Motion Detection
- Start with conservative motion settings  
- Define zones carefully  
- Adjust object size and contrast thresholds to reduce noise  
- Tune for real-world conditions:
  - trees and shadows  
  - rain and insects  
  - water movement  
  - headlights and reflections  

---

### AI Confirmation
- Use AI to improve event quality, not replace motion tuning  
- Start with moderate confidence thresholds  
- Confirm AI is analyzing a usable image source  
- Review confirmed vs rejected events before enabling aggressive alerting  

---

### Alerts
- Do not enable all alert actions initially  
- Validate motion reliability first  
- Then confirm AI behavior  
- Then enable notifications  
- Keep workflows simple until proven stable  

---

### Storage
- Ensure New, Stored, and Alerts folders are intentional  
- Confirm retention rules and size limits  
- Monitor growth after changes to FPS, resolution, or recording mode  
- Base decisions on actual event volume  

---

### Performance
- Monitor CPU, memory, storage, and GPU together  
- Hardware acceleration can help if stable in your environment  
- High-resolution multi-camera loads can degrade the system  
- Scale gradually and validate after each change  

---

## 📊 Recommended Baseline

### Stable Starting Point
- Codec: H.264  
- Frame rate: ~15 FPS  
- Recording: direct-to-disk where appropriate  
- Motion: conservative tuning  
- AI: enabled after motion is stable  
- Alerts: minimal until validated  
- Storage: confirmed before scaling  

---

## 🧠 Real-World Notes
- H.264 is often more stable than H.265 in mixed-camera systems  
- Pre-trigger is frequently underestimated  
- False alerts usually originate from scene conditions and trigger design  
- Camera placement often matters more than increasing resolution  
- A clean, simple setup typically outperforms an over-tuned system  

---

## ⚠️ Common Mistakes
- Enabling too many advanced features at once  
- Increasing FPS without a clear need  
- Running maximum settings everywhere  
- Enabling alerts before validating detection quality  
- Ignoring storage growth until capacity is reached  
- Changing multiple variables simultaneously  

---

## 📊 Related Pages
- [Overview](/blue-iris/overview/)  
- [System Reference](/blue-iris/system-reference/)  
- [Installation](/blue-iris/installation/)  
- [Blue Iris Tab Index](/blue-iris/tab-index/)  

---

## ✅ Result
A structured tuning framework for keeping Blue Iris stable, efficient, and scalable in real-world deployments.
