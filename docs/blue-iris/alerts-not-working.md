---
title: Blue Iris Alerts Troubleshooting
description: Step-by-step troubleshooting guide for resolving alert failures in Blue Iris, including motion, AI confirmation, and notification delivery.
image: /img/og/blueiris-alerts-troubleshooting-og.jpg
---

# Blue Iris – Alerts Not Working

<img src="/img/og/blueiris-alerts-troubleshooting-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 🔹 Overview
This page provides a structured approach to diagnosing and fixing situations where alerts are not triggering or not being delivered.

---

## 🎯 Objective
- Restore alert functionality  
- Identify where the alert chain is failing  
- Prevent incorrect assumptions about AI or motion  

---

## 🧠 Key Concept
Alerts depend on a complete processing chain:

**Motion → AI (optional) → Alert Action**

If any step fails, alerts will fail.

---

## 🛠️ Troubleshooting Steps

### Step 1 — Confirm Motion
- Verify motion detection is triggering  
- Check zones, sensitivity, and object size  
- Confirm events appear in clips or logs  

---

### Step 2 — Confirm AI (if used)
- Verify AI service is running  
- Review confirmed vs rejected events  
- Confirm confidence thresholds are not too restrictive  

---

### Step 3 — Confirm Alert Settings
- Review camera alert tab configuration  
- Confirm correct actions are enabled  
- Verify schedules are not disabling alerts  

---

### Step 4 — Check Global Settings
- Global alert settings can override camera settings  
- Confirm active profiles and schedules  

---

### Step 5 — Test Alerts Directly
- Trigger alerts manually where possible  
- Confirm delivery methods (push, email, etc.) function correctly  

---

## 📊 Common Causes
- Motion not triggering  
- AI filtering too aggressively  
- Alerts disabled by schedule or profile  
- Incomplete notification configuration  
- Network or delivery issues  

---

## 🧠 Real-World Notes
- Most alert failures are configuration-related, not software issues  
- AI is often blamed when motion detection is the root cause  
- Start simple and validate each stage before adding complexity  

---

## ⚠️ Common Mistakes
- Enabling alerts before validating motion and AI  
- Using overly strict AI confidence thresholds  
- Overlooking schedule or profile overrides  
- Not testing alert delivery independently  

---

## 📊 Related Pages
- [AI Tuning](/blue-iris/ai-tuning/)  
- [Troubleshooting](/blue-iris/troubleshooting/)  
- [Blue Iris Tuning](/blue-iris/tuning/)  

---

## ✅ Result
A clear, structured process for restoring reliable alert functionality in Blue Iris.
