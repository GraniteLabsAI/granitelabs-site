---
title: Blue Iris – Performance Optimization
description: Practical performance optimization strategies for Blue Iris including camera load, codecs, frame rate, AI impact, and long-term system stability.
image: /img/og/blueiris-performance-optimization-og.jpg
---

[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Performance Optimization

<img src="/img/og/blueiris-performance-optimization-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

---

## 🔹 Overview

This page provides practical guidance for improving Blue Iris performance and maintaining long-term system stability.

---

## 🎯 Objective

- Reduce CPU and system load  
- Improve responsiveness  
- Maintain stable multi-camera operation  
- Balance video quality with system performance  

---

## 🧠 Key Concepts

- Performance is cumulative across all cameras  
- Stability is more important than maximum settings  
- Small changes can have large impact at scale  

---

## 🧠 System Insight

Resolution → FPS → Codec → AI → Storage load

Performance issues are usually cumulative, not isolated.

---

## 🛠️ Core Areas

### Camera Load
- Total camera count directly impacts performance  
- Resolution and FPS multiply system demand  
- Add cameras incrementally and test  

---

### Codec
- H.264 is typically more stable  
- H.265 may reduce bandwidth but increase decode load  
- Test before applying system-wide  

---

### Frame Rate
- ~15 FPS is a strong baseline  
- Higher FPS increases CPU, storage, and decoding requirements  

---

### Resolution
- Use resolution appropriate for the scene  
- Avoid high resolution on low-priority areas  

---

### Direct-to-Disk
- Reduces CPU load  
- Improves recording efficiency  
- Should be used where stable  

---

### Hardware Acceleration
- Can improve performance when configured correctly  
- Must be tested for stability on your system  

---

### AI Load
- AI introduces additional processing demand  
- Scale gradually across cameras  
- Monitor system impact before expanding  

---

## 📊 Recommended Baseline

- H.264  
- ~15 FPS  
- Direct-to-disk enabled  
- Moderate camera count before scaling  
- AI applied selectively  

---

## 🧠 Real-World Notes

- Performance issues often appear after incremental changes  
- Stability degradation is gradual, not immediate  
- Simpler configurations scale more reliably over time  

---

## ⚠️ Common Mistakes

- Adding too many cameras at once  
- Increasing FPS unnecessarily  
- Running maximum settings across all cameras  
- Enabling AI on all cameras simultaneously  
- Ignoring storage performance limitations  

---

## 📊 Related Pages

- [Best Settings](/blue-iris/best-settings/)  
- [Tuning Guide](/blue-iris/tuning/)  
- [Storage Architecture](/blue-iris/storage-architecture/)  
- [AI Tuning](/blue-iris/ai-tuning/)  
- [Troubleshooting](/blue-iris/troubleshooting/)  

---

## ✅ Result

A stable, responsive Blue Iris system that balances performance, scalability, and video quality.
