# Blue Iris – Alerts Not Working

## 🔹 Overview
This page focuses on diagnosing and fixing situations where alerts are not triggering or not being delivered.

---

## 🎯 Objective
- Restore alert functionality
- Identify where the alert chain is failing
- Prevent false assumptions about AI or motion

---

## 🧠 Key Concept
Alerts depend on a chain:

**Motion → AI (optional) → Alert Action**

If any step fails, alerts fail.

---

## 🛠️ Troubleshooting Steps

### Step 1 — Confirm Motion
- Verify motion is triggering
- Check zones and sensitivity
- Confirm events appear in clips or logs

---

### Step 2 — Confirm AI (if used)
- Check AI is running
- Review confirmed vs unconfirmed events
- Verify confidence threshold is not too high

---

### Step 3 — Confirm Alert Settings
- Check alert tab configuration
- Confirm correct actions are enabled
- Verify schedules are not disabling alerts

---

### Step 4 — Check Global Settings
- Global alert settings may override camera settings
- Confirm profiles and schedules

---

### Step 5 — Test Alerts Directly
- Trigger manually if possible
- Confirm delivery method works (push, email, etc.)

---

## 📊 Common Causes

- Motion not triggering
- AI filtering too aggressively
- Alerts disabled by profile/schedule
- Notification settings incomplete
- Network or delivery issue

---

## 🧠 Real-World Notes
- Alerts often fail due to configuration logic, not bugs
- AI is frequently blamed when motion is actually the issue
- Start simple, then layer complexity

---

## ⚠️ Common Mistakes
- Enabling alerts before validating motion and AI
- Using overly strict AI confidence
- Forgetting schedule/profile overrides
- Not testing alert delivery independently

---

## 📊 Related Pages
- [AI Tuning](/blue-iris/ai-tuning/)
- [Troubleshooting](/blue-iris/troubleshooting/)
- [Blue Iris Tuning](/blue-iris/tuning/)

---

## ✅ Result
A clear process for restoring reliable alert functionality.
