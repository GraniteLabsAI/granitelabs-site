---
title: Blue Iris – Troubleshooting
description: Structured troubleshooting workflow for Blue Iris covering motion, AI, recording, alerts, storage, and performance issues.
image: /img/og/blueiris-system-architecture-og.jpg
---

[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Troubleshooting

<img src="/img/og/blueiris-system-architecture-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 🔹 Overview

This page provides a structured approach to troubleshooting Blue Iris issues.

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

## 🧠 System Insight

Motion → Recording → AI → Alerts  

If something fails, the problem is usually earlier in the chain.

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
- Over-tuning creates instability more often than value  

---

## ⚠️ Common Mistakes

- Changing multiple settings at once  
- Assuming AI is the problem when motion is the issue  
- Ignoring storage or performance constraints  
- Tuning before confirming basic functionality  

---

## 📊 Related Pages

- [Tuning Guide](/blue-iris/tuning/)  
- [Best Settings](/blue-iris/best-settings/)  
- [Real Configuration Examples](/blue-iris/real-config-examples/)  
- [AI Tuning](/blue-iris/ai-tuning/)  
- [Storage Architecture](/blue-iris/storage-architecture/)  

---

## ✅ Result

A structured troubleshooting approach that reduces time to resolution and keeps the system stable and predictable.
