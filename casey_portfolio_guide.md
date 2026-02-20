# Casey Neistat Style Portfolio -- Build Guide

## Mission

Create a fast, minimal, single-column portfolio that feels personal,
raw, and text-first.

------------------------------------------------------------------------

## Core Principles

-   Single column layout
-   Monospace typography only
-   No cards, shadows, or gradients
-   Real images only
-   One long scroll page
-   Lighthouse score 95+

------------------------------------------------------------------------

## Site Structure

INTRO\
ABOUT\
NOW\
PROJECTS\
WRITING / LOG (optional)\
LINKS\
CONTACT

------------------------------------------------------------------------

## Content Style

### INTRO

GAL CESANA\
Software Engineer\
CrowdStrike --- Identity Protection

I build fast systems and useful tools.

### ABOUT

Computer Science @ Hebrew University\
Runner.\
Builder.\
Into distributed systems, data, and simple products.\
Based in Israel.

### NOW

Training with my running team\
Working on Kafka microservices\
Building a team running app\
Reading about information theory

### PROJECTS

HUJI RUN\
Team management app for runners\
Strava sync · PWA · Supabase\
2026

WATER TRACKER\
Daily hydration app\
iOS · Firebase\
2026

### LINKS

GitHub\
LinkedIn\
Strava\
Instagram

------------------------------------------------------------------------

## Visual System

### Typography

font-family: "Courier Prime", monospace;

### Colors

Background: #f2f2f2\
Text: #111\
Links: #0000ee

### Spacing

section { margin-bottom: 80px; }

------------------------------------------------------------------------

## Images

Use real-life photos: - Running team - Whiteboard sketches - Coding
desk - Hackathons - Real app screenshots

Rules: - Full width - No rounded corners - No shadows

------------------------------------------------------------------------

## Performance Requirements

-   No heavy frameworks
-   Optimized images (\<200KB)
-   Fast font loading
-   Mobile-first
-   Lighthouse ≥ 95

------------------------------------------------------------------------

## Recommended Tech Stack

### Option A (Pure Minimal)

index.html\
style.css

Deploy via GitHub Pages.

### Option B (Scalable Minimal)

Vite static build.

------------------------------------------------------------------------

## Content Update Workflow

Store dynamic content in: data/projects.js\
data/now.js

------------------------------------------------------------------------

## Navigation

Either no navbar or: home / projects / now / links

------------------------------------------------------------------------

## Acceptance Checklist

-   Feels like a document, not a SaaS site
-   Instant loading
-   Perfect mobile experience
-   Personal within 5 seconds
-   No visual noise

------------------------------------------------------------------------

## Build Steps

1.  Create project structure
2.  Implement single column layout (max-width \~720px)
3.  Add typography and spacing
4.  Insert real content
5.  Optimize images
6.  Deploy to GitHub Pages
