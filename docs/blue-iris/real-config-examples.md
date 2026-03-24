[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Real Configuration Examples

## 🔹 Overview
This page shows real Blue Iris configuration screens with practical context.

The goal is not to document every setting — but to highlight what actually matters.

---

# 🎥 Camera Connection

## Network Configuration

<img src="/img/blueiris/blueiris-network-config.png" alt="Blue Iris Network Configuration" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- RTSP port (typically 554)
- ONVIF port (typically 8000)
- Correct stream profiles (main / sub)
- Stable connection and clean credentials

---

# 🎬 Video Settings

<img src="/img/blueiris/blueiris-video-settings.png" alt="Blue Iris Video Settings" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- Resolution appropriate to scene
- FPS around ~15
- Hardware decode behavior
- Limit decoding unless required

---

# 💾 Recording

<img src="/img/blueiris/blueiris-record-settings.png" alt="Blue Iris Record Settings" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- Direct-to-disk enabled
- Pre-trigger recording set correctly
- Correct folder (typically New)
- No unnecessary re-encoding

---

# 🚨 Motion Detection

<img src="/img/blueiris/blueiris-motion-settings.png" alt="Blue Iris Motion Settings" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- Object size and contrast tuned
- Zones defined intentionally
- Noise reduced before AI is enabled
- Real events validated

---

# ⚡ Trigger Behavior

<img src="/img/blueiris/blueiris-trigger-settings.png" alt="Blue Iris Trigger Settings" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- Motion sensor enabled
- Break time is reasonable
- Trigger logic is simple and predictable
- Avoid over-triggering

---

# 🤖 AI Confirmation

<img src="/img/blueiris/blueiris-ai-settings.png" alt="Blue Iris AI Settings" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- Confirm alerts with AI enabled when appropriate
- Primary object detection on
- Additional models only if needed
- AI confirms events, it does not replace motion tuning

---

# 🔔 Alerts

<img src="/img/blueiris/blueiris-alert-settings.png" alt="Blue Iris Alert Settings" style={{width: '100%', borderRadius: '12px', marginBottom: '20px'}} />

### What matters:
- Add to alerts list enabled
- Alert chain is correct
- Keep logic simple early
- Test delivery separately

---

# 🧠 Key System Insight

**Motion → Recording → AI → Alerts**

If something fails, the problem is usually earlier in the chain.

---

# ⚠️ Common Mistakes
- Tuning AI before motion works
- Overcomplicating alerts
- Using maximum settings everywhere
- Ignoring system performance impact

---

## ✅ Result
This page provides a real-world reference for how a stable Blue Iris system is configured.
