[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Real World Operation

---

## <span class="cube-icon"></span> Overview

This page shows how a real Blue Iris system behaves in production.

The focus is on:
- visibility  
- detection  
- AI confirmation  
- storage flow  

---

## 🎥 Live System View

<img src="/img/blueiris/blueiris-full-ui.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What this shows

- Multi-camera grid  
- System status at a glance  
- Real-world lighting and conditions  
- Offline / disabled cameras visible  

---

## 🚨 Motion Detection (Real Example)

<img src="/img/blueiris/blueiris-edit-motion-zones.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters

- Zones define what matters (not the whole image)  
- Background noise is excluded  
- Scene design matters more than sensitivity  

👉 This is where most systems succeed or fail  

---

## 🤖 AI Processing (GPU Enabled)

<img src="/img/blueiris/blueiris-ai-gpu-setup.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters

- GPU acceleration improves performance  
- Confidence thresholds control noise  
- AI confirms events — it does not replace motion  

---

## 💾 Storage Flow

### New (Short-Term)

<img src="/img/blueiris/blueiris-storage-new.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

- Active recording location  
- Short retention window  
- High activity  

---

### Stored (Long-Term)

<img src="/img/blueiris/blueiris-storage-stored.png" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

- Longer retention  
- Lower churn  
- Clean archive behavior  

---

## 🧠 System Insight

Every working system follows this flow:

**Camera → Motion → Recording → AI → Alerts → Storage**

If something breaks:

👉 The problem is almost always earlier in the chain  

---

## ⚠️ What Separates a Good System

### Good System
- Clean motion zones  
- Reasonable FPS  
- Controlled storage  
- Selective AI  

---

### Bad System
- Full-frame motion  
- Maximum settings everywhere  
- AI used as a band-aid  
- No storage strategy  

---

## 📊 Related Pages

- [Tuning Guide](/blue-iris/tuning/)  
- [AI Tuning](/blue-iris/ai-tuning/)  
- [Storage Architecture](/blue-iris/storage-architecture/)  
- [Troubleshooting](/blue-iris/troubleshooting/)  

---

## ✅ Result

A real-world reference for how a stable Blue Iris system behaves in production — from detection through storage.
