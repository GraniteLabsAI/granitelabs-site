# Blue Iris – Performance Optimization

## 🔹 Overview
This page provides practical guidance for improving Blue Iris performance and system stability.

---

## 🎯 Objective
- Reduce CPU and system load
- Improve responsiveness
- Maintain stable multi-camera operation
- Balance quality vs performance

---

## 🧠 Key Concepts
- Performance is cumulative across all cameras
- Stability matters more than maximum settings
- Small changes can have large impact at scale

---

## 🛠️ Core Areas

### Camera Load
- Total number of cameras matters
- Resolution and FPS multiply system load
- Add cameras gradually and test

---

### Codec
- H.264 is often more stable
- H.265 may reduce bandwidth but increase decode load
- Test before committing system-wide

---

### Frame Rate
- ~15 FPS is a strong baseline
- Higher FPS increases CPU, storage, and decode requirements

---

### Resolution
- Use resolution appropriate for the scene
- Avoid unnecessary high-resolution streams on low-value areas

---

### Direct-to-Disk
- Reduces CPU load
- Improves recording efficiency
- Should be used where stable

---

### Hardware Acceleration
- Can improve performance when working correctly
- Must be tested for stability in your environment

---

### AI Load
- AI adds processing demand
- Scale gradually across cameras
- Monitor impact before expanding

---

## 📊 Recommended Baseline
- H.264
- ~15 FPS
- Direct-to-disk enabled
- Moderate camera count before scaling
- AI applied selectively

---

## 🧠 Real-World Notes
- Performance problems often appear after incremental changes
- System stability degrades gradually, not all at once
- Simple configurations scale better over time

---

## ⚠️ Common Mistakes
- Adding too many cameras at once
- Increasing FPS without need
- Running maximum settings everywhere
- Enabling AI on all cameras immediately
- Ignoring storage performance

---

## 📊 Related Pages
- [Storage Architecture](/blue-iris/storage-architecture/)
- [AI Tuning](/blue-iris/ai-tuning/)
- [Troubleshooting](/blue-iris/troubleshooting/)

---

## ✅ Result
A stable, responsive Blue Iris system that balances performance and quality.
