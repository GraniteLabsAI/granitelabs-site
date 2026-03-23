# Blue Iris 6 – Storage Architecture

## 🔹 Overview
This page documents the practical storage design for Blue Iris, including recording locations, retention behavior, and the relationship between performance and disk usage.

The goal is stable recording, predictable retention, and manageable storage growth.

---

## 🎯 Objective
- Create a clear storage strategy
- Separate short-term and longer-term recording intentionally
- Support direct-to-disk recording
- Keep retention and cleanup predictable

---

## 🧠 Key Concepts
- Storage design affects performance, retention, and usability
- Recording folders should have a clear purpose
- Retention should be based on actual event volume, not guesswork
- Fast storage and clean folder mapping help stability

---

## 🛠️ Core Areas

### New Folder
- Short-term recording location
- Active write area for recent clips
- Should be fast and intentionally sized

---

### Stored Folder
- Longer-term retention area
- Used for preserving selected or moved clips
- Should reflect actual review and retention needs

---

### Alerts Folder
- Holds alert-related clips and images where applicable
- Should be monitored so it does not quietly grow without review

---

### Database Considerations
- Database health affects clip management and browsing
- Keep maintenance and cleanup in mind
- Confirm that storage rules align with actual camera volume

---

### Retention Logic
- Define limits intentionally
- Use size and age rules that reflect how the system is actually used
- Revisit settings after adding cameras or changing frame rate / resolution

---

### Performance Considerations
- Storage performance matters during recording and playback
- Too much write load on slow storage can affect the whole system
- Direct-to-disk helps reduce unnecessary overhead

---

## 📊 Recommended Baseline
- Fast storage for active recording
- Clear separation between New and Stored
- Reasonable size caps
- Retention reviewed after real-world use
- Cleanup behavior understood before scaling camera count

---

## 🧠 Real-World Notes
- Storage fills faster than expected when multiple changes are made together
- FPS, resolution, codec choice, and trigger behavior all affect growth
- Storage architecture should be reviewed any time the camera count changes materially
- Simpler folder logic is easier to maintain and troubleshoot

---

## ⚠️ Common Mistakes
- Leaving retention rules vague
- Using one folder for everything without a clear reason
- Ignoring growth until storage is already under pressure
- Increasing quality settings without checking storage consequences
- Forgetting that alert clips and databases also consume space

---

## 📊 Related Pages
- [Blue Iris Tuning](/blue-iris/tuning/)
- [Blue Iris Installation](/blue-iris/installation/)
- [Blue Iris Overview](/blue-iris/overview/)

---

## ✅ Result
This page provides a practical storage framework for keeping Blue Iris recording stable and predictable over time.
