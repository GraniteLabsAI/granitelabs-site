# Reolink RLC-843A

## 🔹 Overview
The Reolink RLC-843A is a varifocal dome camera used where adjustable framing and more controlled scene coverage are valuable.

This page documents its practical role and tuning priorities in a Blue Iris system.

---

## 🎯 Objective
- Provide a practical reference for the RLC-843A
- Support stable integration with Blue Iris
- Document tuning and framing priorities
- Capture tradeoffs between coverage, detail, and performance

---

## 🧠 Key Concepts
- Varifocal dome form factor
- Adjustable field of view
- Better framing control than a fixed lens
- Scene-specific tuning matters more than maximum settings
- Dome use cases often involve controlled coverage zones

---

## 🛠️ Practical Setup Priorities

### Framing
- Use the varifocal capability intentionally
- Narrow the scene when identification is more important than broad coverage
- Avoid using extra pixels on unimportant space

---

### Stream / Codec
- Start with stable, conservative settings
- H.264 is often the safer baseline
- Validate responsiveness in Blue Iris before trying more aggressive compression choices

---

### Frame Rate
- ~15 FPS is often a practical balance
- Adjust only when the scene requires faster motion capture

---

### Recording Strategy
- Direct-to-disk is preferred when reliable
- Confirm clips reflect the scene goals
- Keep retention and storage growth in mind when narrowing in on higher-value scenes

---

### Motion / AI
- Dome scenes can still be affected by insects, lighting, rain, and reflections
- Motion zones should be designed around the actual purpose of the camera
- AI confirmation should be based on a good image source and reasonable trigger design

---

## 📊 Recommended Baseline
- Lens adjusted to match the actual purpose of the scene
- Codec: H.264
- Frame rate: ~15 FPS
- Recording: direct-to-disk where appropriate
- Motion and AI tuned only after framing is finalized

---

## 🧠 Real-World Notes
- The biggest advantage of the RLC-843A is not just the dome housing — it is the ability to frame the scene more intentionally
- Better framing often produces more useful evidence than simply using the widest possible view
- Tuning should follow the scene objective, not generic defaults

---

## ⚠️ Common Mistakes
- Leaving framing too wide for the target use
- Treating varifocal control as optional
- Over-tuning before the final field of view is set
- Assuming higher settings automatically improve usable results

---

## 📊 Related Pages
- [Blue Iris Overview](/blue-iris/overview/)
- [Blue Iris Installation](/blue-iris/installation/)
- [Blue Iris Tuning](/blue-iris/tuning/)

---

## ✅ Result
This page provides a practical operating reference for using the Reolink RLC-843A in Blue Iris.
