---
title: Best Blue Iris Settings (4K Cameras, AI Detection, Performance Optimization)
description: Recommended Blue Iris settings for motion detection, AI confirmation, storage, and performance. Optimized for multi-camera 4K systems.
---

[← Back to Blue Iris](/blue-iris/)

# Best Blue Iris Settings (4K + AI Optimized)

## 🔹 Overview

These settings are based on real-world deployment of multi-camera Blue Iris systems using 4K cameras, AI detection, and direct-to-disk recording.

The goal is:

- Stable performance
- Clean alerts (low false positives)
- Efficient storage usage
- Reliable long-term operation

---

## 🔹 Core Recording Settings

- **Direct-to-disk: Enabled**
- **Codec: H.264 (preferred for stability)**
- **FPS: ~15 FPS**
- **Keyframe interval: Match FPS**

Why:
- Reduces CPU usage
- Keeps playback smooth
- Avoids re-encoding overhead

---

## 🔹 Motion Detection (Critical)

- Use **zones (A–H)** to limit detection area
- Set **Min Object Size** to ignore noise
- Adjust **Min Contrast** to reduce false triggers
- Use **Make Time ~1.0s**

Why:
- Eliminates bugs, rain, and shadows
- Improves AI accuracy downstream

---

## 🔹 AI Settings (CodeProject / ONNX)

- **Confirm alerts with AI: Enabled**
- **Minimum confidence: ~60%**
- **Primary detection: Person / Vehicle**
- Use **main stream images if available**

Why:
- Filters false positives
- Uses higher-quality frames for detection

---

## 🔹 Alert Settings

- Trigger: **New triggers only**
- Add to alerts list: **Database only**
- Require multiple alerts: Optional for noisy areas

Why:
- Keeps alerts meaningful
- Avoids spam

---

## 🔹 Storage Strategy

Typical setup:

- **New:** 3–5 days  
- **Stored:** Long-term (size-based, e.g. 2TB)  
- **Alerts:** Separate folder (short retention)

Why:
- Fast recent access
- Efficient long-term storage
- Clean alert management

---

## 🔹 Performance Optimization

- Use **hardware decode (Intel / GPU)**
- Limit unnecessary re-encoding
- Disable unused features (audio, overlays if not needed)

---

## 🔹 Common Mistakes

- Using H.265 everywhere → causes lag
- No zones → constant false triggers
- AI confidence too low → noisy alerts
- Too many FPS → wasted resources

---

## 🔹 Recommended Baseline

If you want a starting point:

- 15 FPS
- H.264
- Direct-to-disk
- AI confirmation ON
- Confidence ~60%
- Motion zones configured

---

## 🔹 Final Thought

The best Blue Iris system is not the most aggressive —  
it is the most **stable and predictable over time**.
