---
title: GraniteLabs Brand System
description: GraniteLabs Visual Standard v1 — color system, typography, icons, layout, and production workflow.
---

# GraniteLabs Brand System

![GraniteLabs Brand](/img/og/granitelabs-preview.jpg)

The GraniteLabs Visual Standard v1 is a locked design system governing all visual output across the site, documentation, and assets. This page is the authoritative reference for anyone working on GraniteLabs content.

## Brand Foundation

GraniteLabs is a **technical systems brand**, not a marketing brand.

**Core Identity:** Engineered · Structured · Precise · Modular · Scalable

**Visual Philosophy:**
- Built, not designed
- Clean over decorative
- Controlled glow over dramatic lighting
- System consistency over artistic variation

## Color System

| Name | Hex | Usage |
|---|---|---|
| Granite Black | `#0B0F14` | Base background |
| Deep Navy | `#0F1720` | Gradient support |
| Slate Blue | `#1B2A3A` | Mid-tone surfaces |
| Steel Blue | `#22384D` | Cube shading |
| Electric Cyan | `#00D4FF` | Primary accent |
| Soft Cyan | `#38BDF8` | Secondary accent |
| Cool White | `#E6EDF3` | Primary text |
| Soft Gray | `#94A3B8` | Secondary text |
| Safety Orange | `#F97316` | Rare alert/accent only |

**Allowed:** Monochrome blue/cyan system, neutral stone tones, controlled gradients.

**Forbidden:** Purple hues, warm lighting (except orange alerts), rainbow or mixed color systems.

## Background System

The background is the most critical visual anchor.

**Required characteristics:**
- Dark granite texture
- Fine, tight grain
- Subtle variation — not noisy
- No visible pattern repetition

**Gradient structure:**
```
Top:    #0B0F14
Mid:    #0E1622
Bottom: #0B0F14
```

**Never use:** Cloud textures, fog, haze, fabric look, or soft blur backgrounds.

## Cyan Energy System

**Primary accent:** `#00D4FF`

Cyan is used as thin lines, edge highlights, and subtle glow only.

| Glow Level | Use |
|---|---|
| 40% | Background |
| 60% | Cube edges |
| 75% | Active elements |
| 85% | Focal highlights |

Avoid bloom effects, neon oversaturation, and light spill into background.

## Typography System

- Style: Clean geometric sans, bold/semi-bold, tight tracking
- Title Line 1: ALL CAPS, large, color `#BFE9FF`
- Title Line 2: 70–80% size, color `#9FD3EA`
- Divider: Thin cyan line (~2px), 40–60% width of text

## Icon System

- Style: Semi-3D, not flat
- Soft material shading with cyan edge lighting
- Consistent stroke weight throughout

**System icons:** Shield, Brain, Network, Storage, Camera, Document

**Process icons:** Flow arrows, Check, Reject, Transform

**Never use:** Clip-art, emoji style, mixed icon styles, over-detailed realism.

## Layout System

**Standard canvas:** 1920 x 1080

| Area | Width |
|---|---|
| Left (Text) | 45% |
| Right (Cube) | 55% |

**Spacing:** 120px side margins, 80px minimum around cube.

## Export System

**Master:** 1920 x 1080 PNG

**Derivatives:** 1280x720, 800x450, 400x225

Always scale from master. Never redesign per size.

## QA Checklist

Before publishing any visual asset:

- [ ] Background = granite (not cloudy)
- [ ] Cyan = controlled system
- [ ] Glow = not excessive
- [ ] Cube = focal point
- [ ] Text = balanced
- [ ] Icons = consistent style
- [ ] Anchor ring = present and subtle

## Master Prompt Template

Use this for generating any GraniteLabs visual asset:
```
Create a GraniteLabs Visual Standard v1 image.
Title: [TITLE]
Subtitle: [SUBTITLE or blank]
Category: [SYSTEM / PROCESS / ARCHITECTURE / FEATURE]
Cube content: [SUBJECT]
Reference style: [MASTER IMAGE NAME]
Special instructions: [NOTES]

Use:
- Dark granite textured background
- Cyan accent system only (#00D4FF)
- Left title / right cube layout
- Controlled glow
- Thin anchor ring under cube
- Top-right lighting
- No purple, no clutter
```
