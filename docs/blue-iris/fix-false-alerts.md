---
title: Blue Iris – Fix False Alerts
description: Step-by-step guide to eliminating false alerts in Blue Iris using motion tuning, zones, and AI confirmation.
image: /img/og/blueiris-alerts-troubleshooting-og.jpg
---

[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Fix False Alerts

<img src="/img/og/blueiris-alerts-troubleshooting-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 🔹 Overview

False alerts are the most common problem in Blue Iris systems.

They are typically caused by:

- Poor motion detection  
- No zone control  
- Incorrect thresholds  
- Environmental noise (rain, bugs, shadows)  
- AI being used incorrectly  

---

## 🎯 Objective

- Reduce false alerts  
- Maintain real event detection  
- Improve AI accuracy  
- Create a stable alert workflow  

---

## 🧠 System Insight

Motion → AI → Alerts  

If motion is noisy, AI and alerts will also be noisy.

---

## 🛠️ Fix Workflow

### Step 1 — Fix Motion Zones

Go to:  
**Camera → Motion/Trigger → Edit zone**

- Limit detection to important areas only  
- Exclude sky, trees, water, and roads  
- Avoid reflective surfaces  

👉 Most false alerts originate here  

---

### Step 2 — Adjust Motion Thresholds

Recommended starting point:

- Min object size: increase until noise disappears  
- Min contrast: ~25–40%  
- Min travel: small but not zero  
- Make time: ~1.0 sec  

👉 Goal: filter out small or brief motion  

---

### Step 3 — Enable AI Confirmation

Go to:  
**Camera → AI tab**

- Confirm alerts with AI: Enabled  
- Minimum confidence: ~60%  
- Detect: Person, Vehicle  

👉 AI filters false motion events  

---

### Step 4 — Use Main Stream for AI

Enable:

- Use main stream images (if dual stream available)

👉 Better image = better AI decisions  

---

### Step 5 — Control Alert Behavior

Go to:  
**Camera → Alert tab**

- Trigger: New triggers only  
- Add to alerts list: Database only  
- Optional: require multiple alerts  

👉 Prevents repeated or noisy alerts  

---

## 📊 Common Causes of False Alerts

- Bugs at night (IR reflection)  
- Rain / snow  
- Moving shadows  
- Trees / vegetation  
- Water movement (pools, lakes)  

---

## 🧠 Real-World Strategy

Best results come from combining:

1. Clean motion zones  
2. Proper thresholds  
3. AI confirmation  

Not from increasing sensitivity  

---

## ⚠️ Common Mistakes

- Increasing sensitivity instead of reducing noise  
- Enabling AI before motion is tuned  
- Using too many object types  
- Ignoring environmental factors  

---

## 📊 Related Pages

- [Alerts Troubleshooting](/blue-iris/alerts-not-working/)  
- [Tuning Guide](/blue-iris/tuning/)  
- [Best Settings](/blue-iris/best-settings/)  
- [Real Configuration Examples](/blue-iris/real-config-examples/)  

---

## ✅ Result

A clean, stable alert system that captures real events without noise.
