---
title: Blue Iris System Architecture
description: High-level system architecture showing how cameras, Blue Iris, AI processing, storage, and alerts interact within a complete surveillance workflow.
image: /img/og/blueiris-system-architecture-og.jpg
---

# Blue Iris – System Architecture

<img src="/img/og/blueiris-system-architecture-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## <span class="cube-icon"></span> Overview
This page provides a high-level view of how cameras, Blue Iris, AI processing, storage, and alerting systems interact within the overall architecture.

---

## <span class="cube-icon"></span> Architecture Diagram

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
- Saves clips and images  

↓

### Storage
- New (short-term)  
- Stored (long-term)  
- Alerts (event-based)  

---

## ⚠️ Notes
- Each stage must function correctly for the system to operate reliably  
- Most issues originate in earlier stages such as motion detection or AI validation  

---

## ✅ Result
A clear understanding of how all system components interact within the Blue Iris architecture.
