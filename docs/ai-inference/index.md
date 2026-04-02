---
title: AI Inference
description: AI inference in a real lab context — on-device ONNX detection running inside Blue Iris on an RTX 4070 SUPER, and Claude AI used for research, documentation, and system design.
---

# AI Inference

How AI inference works in this lab — what runs locally, what runs in the cloud,
and how the two approaches serve different purposes within the same deployment.

---

## 🔹 Overview

This lab runs two distinct AI systems that do not overlap in function.

**On-device inference** handles real-time camera analysis. It runs entirely
on local hardware inside Blue Iris, with no internet dependency and no latency
from external services. Every camera alert decision is made locally.

**Cloud AI** handles research, documentation, system design, and learning.
Claude (claude.ai) is used as a thinking and writing tool — not for real-time
detection, but for understanding systems, generating documentation, and working
through complex configurations.

Neither system replaces the other. They operate on different problems.

---

## 🎯 What AI Inference Means in This Context

"AI inference" is the act of running a trained model against new input to
produce a classification or detection result. Training happens elsewhere,
once. Inference is what runs continuously in production.

In a surveillance and infrastructure lab, inference shows up in two ways:

**Real-time inference** — a camera frame arrives, a model analyzes it,
a decision is made in milliseconds. This is latency-sensitive. It must run
locally to be useful.

**Analytical inference** — a question or document is submitted to a language
model, and a structured answer, summary, or design is returned. This is not
latency-sensitive. It can run in the cloud without affecting operations.

Both happen here. They just run on different hardware, serve different goals,
and operate on different timescales.

---

## 🏗️ Two-Layer AI Architecture
```
┌─────────────────────────────────────────────┐
│            ON-DEVICE INFERENCE              │
│                                             │
│  Camera Frame → ONNX Runtime (Blue Iris)    │
│              → yolov8s.onnx                 │
│              → RTX 4070 SUPER (CUDA)        │
│              → Object Classification        │
│              → Alert Confirmed / Cancelled  │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│            CLOUD AI (CLAUDE)                │
│                                             │
│  Question / Document / Problem              │
│              → Claude AI (claude.ai)        │
│              → Research / Design / Docs     │
│              → Structured Output            │
└─────────────────────────────────────────────┘
```

These two layers are architecturally independent. The on-device layer
runs whether or not there is internet access. The cloud layer is a
deliberate tool — used by the operator, not by the system.

---

## ⚡ On-Device Inference — ONNX in Blue Iris

### What It Is

Blue Iris v6 includes a native ONNX inference engine. This allows `.onnx`
model files to be loaded and executed directly inside Blue Iris without any
external AI server, container, or third-party service.

ONNX (Open Neural Network Exchange) is an open model format supported by
most major AI frameworks. A model trained in PyTorch or any other framework
can be exported to `.onnx` and run on any compatible runtime.

### Why On-Device Matters

- **Zero latency from network** — inference happens on the local machine
- **No internet dependency** — cameras work during outages
- **No per-inference cost** — no API calls, no usage limits
- **Privacy** — camera frames never leave the building
- **Deterministic performance** — not subject to cloud load or rate limits

### Inference Hardware

| Component | Detail |
|---|---|
| GPU | NVIDIA GeForce RTX 4070 SUPER |
| Execution Provider | CUDA (NVIDIA GPU path via ONNX Runtime) |
| Fallback | CPU inference if GPU unavailable |
| Runtime | ONNX Runtime (built into Blue Iris v6) |

The RTX 4070 SUPER provides more than sufficient throughput for continuous
multi-camera inference at standard frame rates. GPU utilization during
inference is typically low to moderate, leaving headroom for simultaneous
recording and streaming workloads.

### The Detection Pipeline
```
Camera Motion Trigger
        ↓
Frame Extracted at Trigger Point
        ↓
Frame Sent to ONNX Runtime
        ↓
yolov8s.onnx Runs Inference
        ↓
Object Classes + Confidence Scores Returned
        ↓
Blue Iris Applies Per-Camera Filters
        ↓
Confidence ≥ 60% + Matching Class → Alert Confirmed
Confidence < 60% or No Match     → Alert Cancelled
```

### Primary Model — yolov8s.onnx

YOLOv8s (You Only Look Once v8, small variant) is optimized for speed
without significant accuracy loss. It detects 80 standard object classes
including person, vehicle, and common animals.

- Fast inference time — suitable for real-time multi-camera deployment
- Small GPU memory footprint relative to medium/large variants
- Accurate enough for standard surveillance use cases
- Runs as the default model across all cameras

### Inference vs Motion Detection

These are two separate systems working in sequence — not the same thing.

**Motion detection** is pixel-based. It fires when enough pixels change
between frames. It is fast but produces false positives from wind, lighting
changes, and shadows.

**AI inference** is semantic. It asks: is there a person, vehicle, or animal
in this frame? It only runs after motion fires. It confirms or cancels the
alert based on what is actually in the frame.

Motion detection without AI → high false alert rate.
AI inference without motion detection → unnecessary, expensive.
Combined → accurate, low-noise alerting.

---

## 🤖 Cloud AI — Claude as a Research and Documentation Tool

### What It Is

Claude (claude.ai) is a large language model used as an operator-level
tool. It does not touch camera feeds, run on detection hardware, or make
any real-time decisions. It is used by the person managing the lab —
not by the lab itself.

### How Claude Is Used in This Lab

| Use Case | Description |
|---|---|
| Documentation generation | Writing and structuring system documentation from real deployment details |
| Research | Understanding unfamiliar hardware, protocols, and configurations |
| System design | Working through network topology, storage architecture, and integration questions |
| Configuration review | Explaining what a setting does before changing it |
| Learning AI workflows | Understanding how ONNX, YOLO, and inference pipelines work conceptually |
| Troubleshooting | Walking through failure scenarios and isolation strategies |

### Why a Language Model for This

Infrastructure documentation is hard to keep current. Real deployments
accumulate decisions, exceptions, and tribal knowledge that never gets written
down. Using Claude as a writing and thinking partner produces documentation
that reflects how the system actually works — not a generic template.

Claude is also used to bridge the gap between vendor documentation and
real-world deployment. Manufacturer manuals describe features in isolation.
A working lab involves tradeoffs, interdependencies, and deployment-specific
decisions that require synthesis, not just reference lookup.

### What Claude Does Not Do

- Does not access camera feeds or local network devices
- Does not run inference on images in real-time operation
- Does not make alert or recording decisions
- Does not replace on-device AI for any latency-sensitive function
- Is not integrated into Blue Iris or any local system component

Claude is a tool used during planning, design, and documentation phases.
It operates outside the detection pipeline entirely.

---

## 🔗 How These Two Approaches Complement Each Other

They solve different problems at different timescales.

| Dimension | On-Device (ONNX/Blue Iris) | Cloud AI (Claude) |
|---|---|---|
| Purpose | Real-time object detection | Research, design, documentation |
| Latency requirement | Milliseconds | Seconds to minutes |
| Input | Camera frames | Text, questions, documents |
| Output | Object class + confidence score | Structured text, explanations |
| Internet required | No | Yes |
| Runs continuously | Yes | No — operator-initiated |
| Integrated into system | Yes | No — external tool |

The on-device layer handles everything that must happen automatically and
in real time. The cloud layer handles everything that requires human judgment,
synthesis, or documentation. Neither overlaps with the other's function.

A practical example: Claude was used to understand how ONNX confidence
thresholds affect false alert rates. That understanding was then applied
to configure the on-device system — which runs entirely without Claude
from that point forward.

---

## 📊 Reference

### Inference Systems Summary

| System | Type | Hardware | Use |
|---|---|---|---|
| Blue Iris ONNX | On-device, real-time | RTX 4070 SUPER | Camera alert detection |
| Claude AI | Cloud, operator-initiated | claude.ai | Research, docs, design |

### Related Pages

- [AI Detection System](/ai-systems/)
- [Blue Iris System](/blue-iris/)
- [AI Tuning](/blue-iris/ai-tuning/)
- [Detection Flow](/blue-iris/detection-flow/)
- [Architecture](/architecture/)

---

## ⚠️ Notes

- On-device inference has no dependency on Claude or any cloud service
- Claude does not have access to local hardware, cameras, or network devices
- ONNX model performance is determined by local GPU capability — not cloud resources
- The two AI systems described here were chosen for different reasons and should be evaluated separately
- Adding new on-device models or changing inference configuration does not involve Claude

---

## ✅ Result

Two AI systems serving two distinct functions in the same lab. On-device ONNX
inference inside Blue Iris provides real-time, GPU-accelerated, internet-independent
camera detection. Claude provides research, documentation, and design support at the
operator level. Each does what the other cannot — together they cover both the
automated detection layer and the human knowledge layer of a well-documented
infrastructure deployment.
