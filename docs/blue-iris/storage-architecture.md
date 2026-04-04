---
title: Blue Iris Storage Architecture
description: Practical storage design for Blue Iris including recording locations, retention strategy, and performance considerations for stable long-term operation.
image: /img/og/blueiris-storage-architecture-og.jpg
---

# Blue Iris 6 – Storage Architecture

<img src="/img/og/blueiris-storage-architecture-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## <span class="cube-icon cube-storage"></span> Overview
This page documents the practical storage design for Blue Iris, including recording locations, retention behavior, and the relationship between performance and disk usage.

The goal is stable recording, predictable retention, and manageable storage growth.

---

## 🎯 Objective
- Create a clear storage strategy  
- Separate short-term and longer-term recording intentionally  
- Support direct-to-disk recording  
- Keep retention and cleanup predictable  

---

## 🧠 Key Concepts
- Storage design directly affects performance, retention, and usability  
- Recording folders should each have a clearly defined purpose  
- Retention should be based on actual usage, not assumptions  
- Fast storage and clean folder mapping improve system stability  

---

## <span class="cube-icon cube-storage"></span> Storage Architecture

### New Folder
- Short-term recording location  
- Active write area for recent clips  
- Should be fast and intentionally sized  

---

### Stored Folder
- Longer-term retention area  
- Used for preserving selected or moved clips  
- Should reflect actual review and retention needs  

---

### Alerts Folder
- Holds alert-related clips and images where applicable  
- Should be monitored to prevent uncontrolled growth  

---

### Database Considerations
- Database health impacts clip management and browsing  
- Maintenance and cleanup should be part of the workflow  
- Storage rules must align with actual camera volume  

---

### Retention Logic
- Define limits intentionally  
- Use size and age rules based on real-world usage  
- Revisit settings after adding cameras or changing resolution, FPS, or codec  

---

### Performance Considerations
- Storage performance affects both recording and playback  
- High write load on slow disks can degrade system performance  
- Direct-to-disk reduces unnecessary processing overhead  

---

## 📊 Recommended Baseline
- Fast storage for active recording  
- Clear separation between New and Stored  
- Reasonable size limits  
- Retention reviewed after real-world usage  
- Cleanup behavior understood before scaling  

---

## 🧠 Real-World Notes
- Storage grows faster than expected when multiple variables change  
- FPS, resolution, codec, and trigger behavior all impact growth  
- Storage design should be revisited when camera count changes  
- Simpler folder structures are easier to maintain and troubleshoot  

---

## ⚠️ Common Mistakes
- Leaving retention rules undefined  
- Using a single folder without clear purpose  
- Ignoring growth until storage becomes constrained  
- Increasing quality settings without evaluating storage impact  
- Overlooking alert clips and database size  

---

## 📊 Related Pages
- [Blue Iris Tuning](/blue-iris/tuning/)  
- [Blue Iris Installation](/blue-iris/installation/)  
- [Blue Iris Overview](/blue-iris/overview/)  

---

## ✅ Result
A practical storage framework for maintaining stable, predictable Blue Iris recording over time.
