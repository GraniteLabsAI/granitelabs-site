# Blue Iris 6 – Tuning Guide

## 🔹 Overview
This page captures practical Blue Iris tuning guidance for achieving a stable, responsive, and scalable system.

The focus is on real-world balance: image quality, reliable detection, manageable storage growth, and acceptable CPU / GPU load.

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
- Overly aggressive settings usually create more problems than value

---

## 🛠️ Core Tuning Areas

### Stream Strategy
- Confirm the camera is providing the expected stream
- Use the main stream where image detail is critical
- Use sub-stream strategies where supported and appropriate
- Avoid unnecessary re-encoding when direct-to-disk is the goal

---

### Codec Choice
- H.264 is often the safer baseline for multi-camera stability
- H.265 may reduce bandwidth or storage in some cases, but can increase decode complexity
- If smoothness or stability suffers, test H.264 before making other major changes

---

### Frame Rate
- Around 15 FPS is often a strong balance point for many security cameras
- Higher frame rates increase storage and processing load
- Match frame rate to the actual use case:
  - General surveillance: moderate FPS
  - Fast motion or identification zones: higher only where justified

---

### Resolution
- Use enough resolution to support the actual objective
- Higher resolution does not always improve usable evidence if the scene is too wide
- Camera placement and field of view often matter more than simply increasing megapixels

---

### Recording Mode
- Decide whether the camera should record continuously, on trigger, or on a hybrid approach
- Direct-to-disk is preferred when supported
- Confirm pre-trigger and post-trigger behavior matches the real event length you want to capture

---

### Motion Detection
- Start with conservative motion settings
- Define zones carefully
- Adjust object size and contrast thresholds to reduce noise
- Tune for the actual scene:
  - trees and shadows
  - rain and insects
  - water movement
  - headlights and reflections

---

### AI Confirmation
- Use AI to improve event quality, not as a substitute for poor motion tuning
- Begin with moderate confidence settings
- Confirm the AI is seeing a good image source
- Review confirmed vs unconfirmed events before enabling aggressive alerting

---

### Alerts
- Do not enable every alert action at the beginning
- Confirm trigger reliability first
- Then confirm AI behavior
- Then enable notifications
- Keep alert workflows simple until the system proves stable

---

### Storage
- Confirm New, Stored, and Alerts locations are intentional
- Check retention rules and size caps
- Watch how fast storage grows after changes to FPS, resolution, and recording mode
- Make storage decisions based on actual event volume, not assumptions

---

### Performance
- Watch CPU, memory, storage responsiveness, and GPU behavior together
- Hardware acceleration can help, but only if it is stable in your environment
- Too many simultaneous high-resolution streams can degrade the whole system
- Add load gradually and validate after each change

---

## 📊 Recommended Baseline

### Stable Starting Point
- Codec: H.264
- Frame rate: ~15 FPS
- Recording: direct-to-disk where appropriate
- Motion: conservative tuning
- AI: confirmation after motion is reasonably clean
- Alerts: basic only until validated
- Storage: confirm retention before scaling camera count

---

## 🧠 Real-World Notes
- H.264 is often more forgiving than H.265 in larger mixed-camera systems
- Pre-trigger is one of the easiest settings to underestimate
- False alerts usually come from scene conditions and trigger design, not just “bad AI”
- Wide scenes often benefit more from better placement or tighter field of view than more pixels
- A clean, boring setup usually outperforms an over-tuned setup over time

---

## ⚠️ Common Mistakes
- Turning on too many advanced features at once
- Increasing frame rate without a real need
- Using maximum quality everywhere
- Enabling alerts before validating detection quality
- Ignoring storage growth until after the system is already busy
- Changing multiple variables at once and losing the ability to isolate the cause

---

## 📊 Related Pages
- [Overview](/blue-iris/overview/)
- [System Reference](/blue-iris/system-reference/)
- [Installation](/blue-iris/installation/)
- [Blue Iris Tab Index](/blue-iris/tab-index/)

---

## ✅ Result
This page provides a practical tuning framework for keeping Blue Iris stable, useful, and scalable in real deployments.
