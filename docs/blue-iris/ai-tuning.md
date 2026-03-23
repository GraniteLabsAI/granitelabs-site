# Blue Iris 6 – AI Tuning

## 🔹 Overview
This page captures practical guidance for using AI confirmation in Blue Iris to improve event quality and reduce false alerts.

The focus is on disciplined setup: clean motion first, AI second, alerts third.

---

## 🎯 Objective
- Improve event quality
- Reduce false alerts
- Build a stable AI confirmation workflow
- Avoid using AI to compensate for poor trigger design

---

## 🧠 Key Concepts
- AI confirms events; it should not replace sensible motion settings
- Image quality matters to AI results
- Confidence thresholds should be tuned, not guessed
- Stable workflows beat aggressive settings

---

## 🛠️ Core Tuning Areas

### Motion Before AI
- Start with reasonable motion tuning first
- Reduce obvious false triggers from scene noise
- Confirm the camera is generating usable trigger events

---

### Image Source
- Make sure AI is analyzing a useful image
- Poor framing, weak detail, or excessive compression reduces AI value
- Confirm whether main stream or sub-stream gives the better practical result for your use case

---

### Confidence Thresholds
- Start with moderate confidence settings
- Review confirmed and unconfirmed events
- Raise or lower confidence only after observing actual results

---

### Object Classes
- Enable only the classes you truly care about
- Extra categories can create noise and unnecessary reviews
- Keep the workflow aligned with the actual security objective

---

### Alert Logic
- Do not enable aggressive notifications immediately
- First confirm that AI-confirmed events are consistently meaningful
- Then layer on notifications and external actions

---

### Performance
- AI adds processing load
- Watch CPU, GPU, and overall responsiveness together
- Scale carefully when enabling AI across many cameras

---

## 📊 Recommended Baseline
- Reasonably clean motion
- Moderate confidence threshold
- Limited object classes
- Simple alert logic
- Review actual results before expanding

---

## 🧠 Real-World Notes
- Most “AI problems” start as motion or scene-design problems
- Good framing usually improves AI more than aggressive settings
- Too many object classes often create more review work than value
- A slower, cleaner rollout usually produces better long-term results

---

## ⚠️ Common Mistakes
- Turning on AI before motion is usable
- Letting AI analyze poor images
- Enabling too many classes
- Sending notifications before validation
- Changing multiple AI variables at once

---

## 📊 Related Pages
- [Blue Iris Tuning](/blue-iris/tuning/)
- [Blue Iris Installation](/blue-iris/installation/)
- [Blue Iris System Reference](/blue-iris/system-reference/)

---

## ✅ Result
This page provides a practical framework for using AI confirmation in Blue Iris without creating extra noise or instability.
