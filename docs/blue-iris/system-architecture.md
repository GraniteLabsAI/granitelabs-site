---
title: Blue Iris System Architecture
description: High-level system architecture showing how cameras, Blue Iris, AI, storage, and alerts interact.
image: /img/og/blueiris-system-architecture-overview-og.jpg
---

# Blue Iris – System Architecture

## 🔹 Overview
This page provides a high-level view of how cameras, Blue Iris, AI, storage, and alerts interact.

---

## 📊 Architecture Diagram

<img src="/img/blueiris_system_architecture_granitelabs_v5.png" alt="System Architecture" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '20px'}} />

---

## 🧠 Core Flow

### Cameras
- Provide video streams
- Define resolution, FPS, and codec

↓

### Blue Iris Core
- Receives streams
- Handles recording
- Processes motion detection

↓

### Motion Detection
- Identifies potential events
- Triggers recording and AI

↓

### AI Confirmation
- Validates events
- Reduces false positives

↓

### Alerts
- Sends notifications
- Saves clips/images

↓

### Storage
- New (short-term)
- Stored (long-term)
- Alerts (event-based)

---

## ⚠️ Notes
- Each stage must work before the next is reliable
- Most issues originate earlier in the chain

---

## ✅ Result
A clear understanding of how the system components interact.
