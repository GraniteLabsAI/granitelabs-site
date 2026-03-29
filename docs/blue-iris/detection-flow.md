# Blue Iris – Detection Flow

## 🔹 Overview
This page shows how an event moves from motion detection to alert delivery.

---

## 📊 Detection Flow Diagram

<img src="/img/blueiris-detection-flow-v2.png" alt="Detection Flow" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '20px'}} />

---

## 🧠 Event Flow

### Step 1 — Motion Trigger
- Motion detected
- Zones and thresholds applied

↓

### Step 2 — Recording
- Clip begins
- Pre-trigger included

↓

### Step 3 — AI Processing
- Image analyzed
- Object classification applied

↓

### Step 4 — Confirmation
- Confidence threshold evaluated
- Event accepted or rejected

↓

### Step 5 — Alert Action
- Notification sent
- Clip stored or flagged

---

## ⚠️ Notes
- If any step fails, alerts fail
- Most problems occur at motion or AI stages

---

## ✅ Result
A clear understanding of how events are processed in Blue Iris.
