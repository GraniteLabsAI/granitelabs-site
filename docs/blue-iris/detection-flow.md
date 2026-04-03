---
title: Blue Iris AI Detection Flow
description: End-to-end AI detection pipeline using Blue Iris and CodeProject.AI, from motion trigger to alert delivery with direct-to-disk recording.
image: /img/og/blueiris-ai-detection-flow-og.jpg
---

# Blue Iris – Detection Flow

<img src="/img/og/blueiris-ai-detection-flow-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 🔹 Overview
This page shows how an event moves through the full detection pipeline — from motion trigger to AI validation and alert delivery.

---

## 📊 Detection Flow Diagram

<img src="/img/blueiris-detection-flow-v3.png" alt="Detection Flow" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '20px'}} />

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
- If any step fails, alerts will fail  
- Most issues originate at the motion detection or AI stages  

---

## ✅ Result
A clear understanding of how events are processed within the Blue Iris detection pipeline.
