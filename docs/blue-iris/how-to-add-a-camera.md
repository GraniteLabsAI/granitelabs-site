---
title: Blue Iris – Add a Camera
description: Step-by-step guide to adding an IP camera in Blue Iris including network setup, RTSP, ONVIF, and initial recording configuration.
image: /img/og/blueiris-system-architecture-og.jpg
---

[← Back to Blue Iris](/blue-iris/)

# Blue Iris – Add a Camera

<img src="/img/og/blueiris-system-architecture-og.jpg" style={{width: '100%', borderRadius: '12px', marginTop: '12px', marginBottom: '24px'}} />

## 🔹 Overview

This guide covers the process of adding a network IP camera to Blue Iris and confirming that it is working correctly.

---

## 🔹 Step 1 — Create a New Camera

- Open Blue Iris  
- Add a new camera  
- Enter a descriptive camera name  
- Confirm the camera is enabled  

---

## 🔹 Step 2 — Select Network IP

- Choose **Network IP**  
- Open the network configuration screen  
- Enter the camera IP address  
- Enter username and password  

---

## 🔹 Step 3 — Confirm Stream Settings

- Verify RTSP port  
- Verify ONVIF / discovery port  
- Confirm main and sub-stream profiles  
- Test connection  

---

## 🔹 Step 4 — Verify Video

- Confirm live image loads  
- Check resolution and frame rate  
- Confirm stream is stable  

---

## 🔹 Step 5 — Configure Recording

- Set recording mode  
- Enable direct-to-disk where appropriate  
- Confirm New folder is correct  
- Set pre-trigger time if needed  

---

## 🔹 Step 6 — Configure Motion

- Enable motion sensor  
- Define zones  
- Test motion behavior before enabling alerts  

---

## 🔹 Step 7 — Add AI and Alerts Later

- Confirm base camera works first  
- Then add AI confirmation  
- Then add alerts  

---

## 🔹 Common Problems

- Wrong IP address  
- Wrong password  
- Wrong RTSP / ONVIF ports  
- Wrong stream path  
- Motion enabled before the camera is stable  

---

## 📊 Related Pages

- [Blue Iris Installation](/blue-iris/installation/)  
- [Real Config Examples](/blue-iris/real-config-examples/)  
- [Best Blue Iris Settings](/blue-iris/best-settings/)  

---

## ✅ Result

A stable, correctly added camera in Blue Iris with a clean baseline for tuning and alerts.
