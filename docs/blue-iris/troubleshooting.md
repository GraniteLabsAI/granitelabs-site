[← Back to Blue Iris](/blue-iris/)

# Blue Iris 6 – Troubleshooting

## 🔹 Overview
This page provides a structured approach to troubleshooting common Blue Iris issues.

The goal is to isolate problems quickly and avoid changing multiple variables at once.

---

## 🎯 Objective
- Provide a repeatable troubleshooting method
- Reduce guesswork
- Identify root causes faster
- Prevent unnecessary changes

---

## 🧠 Core Principle
Change **one variable at a time** and validate before moving forward.

---

## 🛠️ Troubleshooting Workflow

### Step 1 — Define the Problem
- What exactly is not working?
- When did it start?
- What changed before it happened?

---

### Step 2 — Check the Basics
- Camera online?
- Stream loading?
- Recording happening?
- Storage available?

---

### Step 3 — Isolate the Area
Determine which system is involved:

- Camera / stream
- Recording
- Motion detection
- AI confirmation
- Alerts
- Storage
- Performance

---

### Step 4 — Test in Isolation
- Disable unrelated features
- Simplify the setup
- Confirm base behavior works

---

### Step 5 — Reintroduce Features
- Add back motion
- Add AI
- Add alerts

One step at a time

---

## 📊 Common Issue Categories

### No Recording
- Check recording mode
- Confirm storage paths
- Verify triggers

---

### No Alerts
- Check alert configuration
- Confirm trigger + AI workflow
- Verify notifications

---

### High CPU / Lag
- Check number of cameras
- Review codec and FPS
- Confirm hardware acceleration behavior

---

### Missed Events
- Check motion sensitivity
- Check pre-trigger settings
- Confirm AI timing

---

## 🧠 Real-World Notes
- Most problems come from stacking too many features too quickly
- Clean baseline systems are easier to troubleshoot
- Over-tuning creates instability more often than it creates value

---

## ⚠️ Common Mistakes
- Changing multiple settings at once
- Assuming AI is the problem when motion is the issue
- Ignoring storage or performance constraints
- Tuning before confirming basic functionality

---

## 📊 Related Pages
- [AI Tuning](/blue-iris/ai-tuning/)
- [Storage Architecture](/blue-iris/storage-architecture/)
- [Blue Iris Tuning](/blue-iris/tuning/)

---

## ✅ Result
A structured troubleshooting approach that reduces time to resolution and improves system stability.
