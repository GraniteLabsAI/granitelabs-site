---
title: How to Fix False Alerts in Blue Iris (Motion Detection + AI Settings)
description: Fix false motion alerts in Blue Iris by tuning motion zones, sensitivity, and AI confirmation. Real-world settings for stable systems.
---

[← Back to Blue Iris](/blue-iris/)

# How to Fix False Alerts in Blue Iris

## 🔹 Overview

False alerts are the most common problem in Blue Iris systems.

They are typically caused by:

- Poor motion detection settings  
- No zone control  
- Low AI confidence  
- Environmental noise (rain, bugs, shadows)

This guide shows how to eliminate false alerts while keeping real detection.

---

## 🔹 Step 1 — Fix Motion Zones

Go to:
**Camera → Motion/Trigger → Edit zone**

- Limit detection to important areas only  
- Exclude sky, trees, water, and roads where possible  
- Avoid reflective surfaces  

Why:
Most false alerts start here.

---

## 🔹 Step 2 — Adjust Motion Thresholds

Recommended starting point:

- Min object size: increase until noise disappears  
- Min contrast: ~25–40%  
- Min travel: small but not zero  
- Make time: ~1.0 sec  

Why:
Filters out small or brief motion events.

---

## 🔹 Step 3 — Enable AI Confirmation

Go to:
**Camera → AI tab**

- Enable: Confirm alerts with AI  
- Minimum confidence: ~60%  
- Detect: Person, Vehicle  

Why:
AI removes most false triggers from motion detection.

---

## 🔹 Step 4 — Use Main Stream for AI

Enable:

- Use main stream images (if dual stream available)

Why:
Higher resolution = better detection accuracy

---

## 🔹 Step 5 — Control Alert Behavior

Go to:
**Camera → Alert tab**

- Trigger: New triggers only  
- Add to alerts list: Database only  
- Optional: require multiple alerts  

Why:
Prevents repeated or noisy alerts

---

## 🔹 Common Causes of False Alerts

- Bugs at night (IR reflection)
- Rain / snow
- Moving shadows
- Trees / vegetation
- Water movement (pools, lakes)

---

## 🔹 Real-World Strategy

Best results come from combining:

1. Clean motion zones  
2. Proper thresholds  
3. AI confirmation  

Not from increasing sensitivity.

---

## 🔹 Final Thought

The goal is not to detect everything —  
it is to detect what actually matters.
