# Blue Iris – Real World Operation

## 🔹 Overview
This page shows how a real Blue Iris system behaves in production.

The focus is on visibility, detection, AI confirmation, and storage flow.

---

# 🎥 Live System View

<img src="/img/blueiris/blueiris-full-ui.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What this shows:
- Multi-camera grid
- System status at a glance
- Real-world lighting and conditions
- Offline / disabled cameras visible

---

# 🚨 Motion Detection (Real Example)

<img src="/img/blueiris/blueiris-edit-motion-zones.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- Zones define what matters (not the whole image)
- Background noise is excluded
- Scene design matters more than sensitivity

👉 This is where most systems succeed or fail

---

# 🤖 AI Processing (GPU Enabled)

<img src="/img/blueiris/blueiris-ai-gpu-setup.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- GPU acceleration improves performance
- Confidence thresholds control noise
- AI confirms events — it does not replace motion

---

# 💾 Storage Flow

## New (Short-Term)

<img src="/img/blueiris/blueiris-storage-new.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

- Active recording location
- Short retention window
- High activity

---

## Stored (Long-Term)

<img src="/img/blueiris/blueiris-storage-stored.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

- Longer retention
- Lower churn
- Clean archive behavior

---

# 🧠 System Insight

Every working system follows this:

**Camera → Motion → Recording → AI → Alerts → Storage**

If something breaks:
👉 the problem is almost always earlier in the chain

---

# ⚠️ What separates a good system from a bad one

Good system:
- clean motion zones
- reasonable FPS
- controlled storage
- selective AI

Bad system:
- full-frame motion
- max settings everywhere
- AI used as a band-aid
- no storage strategy

---

## ✅ Result
This page shows how a real, stable Blue Iris system is configured and behaves under normal operation.
