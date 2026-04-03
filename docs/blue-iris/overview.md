---
title: Blue Iris – Overview
description: High-level architecture and system overview of Blue Iris including cameras, recording, AI, alerts, storage, and performance.
image: /img/og/blueiris-system-architecture-og.jpg
---

[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Overview

<img src="/img/og/blueiris-system-architecture-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

## 🔹 Overview
Blue Iris is the core platform for managing cameras, recording strategy, motion detection, AI-assisted analysis, alerts, storage, and system tuning.

This page provides a high-level view of how the Blue Iris environment is structured and how the major components work together.

---

## 🎯 Objective
- Explain the purpose of the Blue Iris system  
- Provide a high-level operational view  
- Establish the main configuration areas  
- Create a clean starting point for deeper documentation  

---

## 🧠 Key Concepts
- Camera ingestion and stream handling  
- Recording modes and retention  
- Motion detection and trigger behavior  
- AI confirmation workflows  
- Alerts and notifications  
- Profiles and schedules  
- Storage and database health  
- Performance and hardware acceleration  

---

## 📊 System Architecture

<img src="/img/blueiris-system-overview-v4.png" alt="Blue Iris System Overview" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '20px'}} />

---

## 🛠️ System Areas

### Cameras
Blue Iris connects to IP cameras, manages streams, and coordinates recording, live view, and alert workflows.

### Recording
Recording behavior is driven by profiles, trigger logic, direct-to-disk strategy, retention rules, and storage architecture.

### Motion + AI
Motion detection triggers events, while AI confirmation reduces false alerts and improves event quality.

### Alerts
Alerts may include notifications, clips, still images, mobile push, and other actions depending on configuration.

### Storage
Storage includes New, Stored, Alerts, database maintenance, and long-term retention strategy.

### Performance
System performance depends on codec, frame rate, resolution, AI load, and hardware acceleration.

---

## 📊 Related Pages

- [System Reference](/blue-iris/system-reference/)
- [Installation](/blue-iris/installation/)
- [Documentation Map](/blue-iris/documentation-map/)
- [Blue Iris Tab Index](/blue-iris/tab-index/)

---

## ⚠️ Notes
- This page should stay high-level and easy to scan  
- Detailed procedures belong in dedicated pages  
- Use this page as a front door to the rest of the Blue Iris section  

---

## 🧠 Real-World Notes
- H.264 is often more stable than H.265 in multi-camera setups  
- Direct-to-disk reduces CPU load significantly  
- AI confirmation should be tuned before enabling alerts  
- Pre-trigger settings are critical for capturing full events  
- Too many high-resolution streams can degrade performance quickly  

---

## ✅ Result
A clear, high-level understanding of how the Blue Iris system components fit together.
