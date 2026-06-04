# 🔧 KAC Construction — Multi-Brand Maintenance Guide

This document explains how to maintain and update the multi-brand website for both brands: **KAC Groups** (kacgroups.com) and **KCPLTL** (kcpltl.com).

---

## 📁 Project Structure Overview

```
├── public/                          ← ALL static assets (images, favicons, videos)
│   ├── kacgroups/                   ← KAC Groups brand-specific assets
│   │   ├── icon.png                 ← Logo + Favicon (512×512px PNG recommended)
│   │   ├── og-image.jpg             ← Social sharing image (1200×630px)
│   │   ├── hero.jpg                 ← Hero poster image
│   │   ├── about.jpg                ← About section image
│   │   └── projects/                ← Project images for this brand (optional)
│   │
│   ├── kcpltl/                      ← KCPLTL brand-specific assets
│   │   ├── icon.png                 ← Logo + Favicon (512×512px PNG recommended)
│   │   ├── og-image.jpg             ← Social sharing image (1200×630px)
│   │   ├── hero.jpg                 ← Hero poster image
│   │   ├── about.jpg                ← About section image
│   │   └── projects/                ← Project images for this brand (optional)
│   │
│   ├── home/                        ← Shared homepage images (services, projects, etc.)
│   ├── about/                       ← Shared about page images (team photos, awards)
│   ├── clients/                     ← Shared client logo images
│   ├── projects/                    ← Shared project gallery images
│   ├── service/                     ← Shared service detail images
│   ├── videos/                      ← Shared video files
│   ├── career/                      ← Shared career page images
│   ├── media/                       ← Shared media gallery images
│   └── contact/                     ← Shared contact page images
│
├── src/
│   └── content/
│       ├── kacgroups/config.ts      ← 🎯 KAC Groups — ALL editable content
│       └── kcpltl/config.ts         ← 🎯 KCPLTL — ALL editable content
│
└── MAINTENANCE.md                   ← This file
```

---

## 🎨 HOW TO CHANGE THE LOGO

### For KAC Groups:
1. **Prepare your logo** — PNG with transparent background, at least 128×128px (512×512px recommended for best results)
2. **Replace the file**: `public/kacgroups/icon.png`
3. **Done!** The same image is used as both the logo (in the Navbar/Footer) and the favicon (browser tab icon)

### For KCPLTL:
1. **Replace the file**: `public/kcpltl/icon.png`
2. **Done!**

> **File to replace**: `public/[brand-name]/icon.png`

---

## 🧭 HOW TO CHANGE THE FAVICON

The favicon uses the same file as the logo. Follow the same steps as "HOW TO CHANGE THE LOGO" above.

**File**: `public/kacgroups/icon.png` or `public/kcpltl/icon.png`

Next.js automatically generates all favicon formats (favicon.ico, apple-touch-icon, etc.) from this single file.

---

## 🖼️ HOW TO CHANGE THE HERO IMAGE

### For KAC Groups:
1. **Replace** `public/kacgroups/hero.jpg` with your new hero image
2. **Or** update the path in `src/content/kacgroups/config.ts` → `hero.posterUrl`

### For KCPLTL:
1. **Replace** `public/kcpltl/hero.jpg` with your new hero image
2. **Or** update the path in `src/content/kcpltl/config.ts` → `hero.posterUrl`

> **File to replace**: `public/[brand-name]/hero.jpg`  
> **Config to edit**: `src/content/[brand-name]/config.ts` → find `hero.posterUrl`

---

## 📸 HOW TO CHANGE THE ABOUT IMAGE

### For KAC Groups:
1. **Replace** `public/kacgroups/about.jpg` with your new image
2. **Or** update in `src/content/kacgroups/config.ts` → `about.imageUrl`

### For KCPLTL:
1. **Replace** `public/kcpltl/about.jpg` with your new image
2. **Or** update in `src/content/kcpltl/config.ts` → `about.imageUrl`

> **File to replace**: `public/[brand-name]/about.jpg`  
> **Config to edit**: `src/content/[brand-name]/config.ts` → find `about.imageUrl`

---

## 🌐 HOW TO CHANGE THE SOCIAL SHARING IMAGE (Open Graph)

This is the image that appears when someone shares your website on Facebook, Twitter, LinkedIn, WhatsApp, etc.

### For KAC Groups:
1. **Create an image** exactly 1200×630px (JPG or PNG)
2. **Replace** `public/kacgroups/og-image.jpg`
3. **Or** update in `src/content/kacgroups/config.ts` → `seo.ogImage`

### For KCPLTL:
1. **Replace** `public/kcpltl/og-image.jpg`
2. **Or** update in `src/content/kcpltl/config.ts` → `seo.ogImage`

> **File to replace**: `public/[brand-name]/og-image.jpg`  
> **Config to edit**: `src/content/[brand-name]/config.ts` → find `seo.ogImage`

---

## ✏️ HOW TO CHANGE TEXT CONTENT

**All text content lives in two files only:**

| Brand | Config File |
|-------|------------|
| KAC Groups | `src/content/kacgroups/config.ts` |
| KCPLTL | `src/content/kcpltl/config.ts` |

### What you can change per section:

| Section | Look for this key | What to edit |
|---------|-------------------|-------------|
| **Hero headline** | `hero.heading.line1` and `hero.heading.line2` | Main title text |
| **Hero subtitle** | `hero.subtitle` | Slogan below headline |
| **Hero description** | `hero.description` | Paragraph text |
| **About text** | `about.description1` and `about.description2` | About section paragraphs |
| **About features** | `about.features[]` | Bullet-point list |
| **Services** | `services.items[]` | Each service card (title, description, image) |
| **Projects** | `projects.items[]` | Each project card (title, description, points, image) |
| **Footer text** | `footer.description`, `footer.copyright` | Footer content |
| **CTA section** | `cta.heading`, `cta.description` | Call-to-action text |
| **Why Choose Us** | `whyChooseUs.features[]` | Feature cards |
| **FAQ** | `faq[]` | Questions and answers |
| **SEO title** | `seo.title` | Browser tab title |
| **SEO description** | `seo.description` | Google search snippet |
| **SEO keywords** | `seo.keywords[]` | Keywords array |
| **Company name** | `name`, `shortName`, `legalName` | Brand identity |
| **Tagline** | `tagline` | Company slogan |

### Example: Changing the Hero Headline (KAC Groups)

1. Open `src/content/kacgroups/config.ts`
2. Find the section labeled `// ─── Hero Section ───`
3. Update:
```typescript
heading: {
  line1: "YOUR NEW TITLE",      // ← Change this
  line2: "SECOND LINE",         // ← Change this
},
```

4. Save the file. Changes are immediate on next page load.

---

## 🏗️ HOW TO ADD PROJECTS

### Add a project card to the homepage:

1. Open `src/content/kacgroups/config.ts` (or `.../kcpltl/config.ts`)
2. Find `projects.items[]`
3. Add a new object before the closing `]`:
```typescript
{
  title: "Your New Project Title",
  desc: "Short description of the project",
  points: [
    "Key point 1",
    "Key point 2",
    "Key point 3",
    "Key point 4",
  ],
  icon: "TowerControl",  // Choose: TowerControl, Zap, Wrench, Activity
  image: "/home/YourImage.webp",  // ← Place image in public/home/
  href: "/projects#your-section",
  location: "Your Location",
},
```

4. If you added a custom image, place it in `public/home/`

---

## 🏢 HOW TO ADD/REMOVE CLIENT LOGOS

1. Open `src/content/kacgroups/config.ts` (or `.../kcpltl/config.ts`)
2. Find `clients.logos[]`
3. **To add**: Insert a new entry like `/clients/NewCompany.webp`
4. **To remove**: Delete the corresponding line
5. Place the new logo file in `public/clients/`
   - **Recommended**: WebP format, transparent background, ~300×150px

---

## 📞 HOW TO UPDATE CONTACT DETAILS

### For KAC Groups:

1. Open `src/content/kacgroups/config.ts`
2. Find the `contact` section:
```typescript
contact: {
  phone: "+919735067595",       // ← Change primary phone
  phone2: "+919933638309",      // ← Change secondary phone
  email: "kuddusali45@gmail.com", // ← Change email
  whatsapp: "919735067595",     // ← Change WhatsApp number (no + sign)
  address: {
    street: "...",              // ← Change street address
    locality: "Malda",           // ← Change city/town
    region: "West Bengal",       // ← Change state
    postalCode: "732128",        // ← Change PIN code
    country: "India",
  },
  mapEmbedUrl: "...",           // ← Change Google Maps embed URL
  officeHours: "...",           // ← Change office hours text
},
```
3. **Repeat** in `src/content/kcpltl/config.ts` for KCPLTL

### How to update the Google Maps embed:
1. Go to Google Maps → search your location
2. Click **Share** → **Embed a map**
3. Copy the `src` URL from the iframe code
4. Paste it into `mapEmbedUrl`

---

## 🔗 HOW TO UPDATE SOCIAL LINKS

1. Open `src/content/[brand-name]/config.ts`
2. Find the `social` section:
```typescript
social: {
  facebook: "https://facebook.com/your-page",
  linkedin: "https://linkedin.com/company/your-company",
  youtube: "https://youtube.com/@your-channel",
},
```
3. Replace with actual URLs. **Leave empty string `""` to hide** a social icon.

---

## 📄 HOW TO UPDATE PAGE SEO (Browser Tab Title & Google Snippet)

1. Open `src/content/[brand-name]/config.ts`
2. Find the `pageMetadata` section
3. Each page (home, about, service, projects, contact, career, media) has its own:
   - `title` — Shows in browser tab
   - `description` — Shows in Google search results (keep under 160 characters)

---

## 🆕 HOW TO ADD A NEW BRAND (Third Brand)

1. **Create a new directory** in `public/` (e.g., `public/newbrand/`)
2. **Create a config file**: `src/content/newbrand/config.ts`
   - Copy the structure from `src/content/kacgroups/config.ts`
   - Customize all content for the new brand
3. **Register the domain** in `lib/domain.ts`:
   ```typescript
   export const DOMAINS = {
     // ... existing brands ...
     newbrand: {
       key: "newbrand" as const,
       brandName: "newbrand",
       hostnames: ["newbrand.com", "www.newbrand.com"],
       default: false,
     },
   } as const;
   ```
4. **Register the config** in `lib/content.ts`:
   ```typescript
   import { newbrandConfig } from "@/src/content/newbrand/config";
   
   // In getConfigForDomain():
   case "newbrand":
     return newbrandConfig as unknown as BrandConfig;
   ```

---

## 🏷️ QUICK REFERENCE: WHICH FILE TO EDIT

| Task | File |
|------|------|
| Change KAC Groups logo/favicon | `public/kacgroups/icon.png` |
| Change KCPLTL logo/favicon | `public/kcpltl/icon.png` |
| Change KAC Groups hero image | `public/kacgroups/hero.jpg` |
| Change KCPLTL hero image | `public/kcpltl/hero.jpg` |
| Change KAC Groups about image | `public/kacgroups/about.jpg` |
| Change KCPLTL about image | `public/kcpltl/about.jpg` |
| Change social sharing (OG) image | `public/[brand]/og-image.jpg` |
| Change any text content (KAC) | `src/content/kacgroups/config.ts` |
| Change any text content (KCPLTL) | `src/content/kcpltl/config.ts` |
| Change contact details (KAC) | `src/content/kacgroups/config.ts` → `contact` |
| Change contact details (KCPLTL) | `src/content/kcpltl/config.ts` → `contact` |
| Change social links (KAC) | `src/content/kacgroups/config.ts` → `social` |
| Change social links (KCPLTL) | `src/content/kcpltl/config.ts` → `social` |
| Add/remove client logos (KAC) | `src/content/kacgroups/config.ts` → `clients.logos[]` |
| Add/remove client logos (KCPLTL) | `src/content/kcpltl/config.ts` → `clients.logos[]` |
| Add/remove homepage projects | `src/content/[brand]/config.ts` → `projects.items[]` |
| Update FAQ questions | `src/content/[brand]/config.ts` → `faq[]` |
| Update page SEO titles | `src/content/[brand]/config.ts` → `pageMetadata` |
| Update Google Maps location | `src/content/[brand]/config.ts` → `contact.mapEmbedUrl` |
| Add brand-specific project images | `public/[brand]/projects/` |
| Add shared images (services, etc.) | `public/home/` |
| Add client logos | `public/clients/` |
| Change background videos | `public/videos/` |
| Change footer background image | `src/content/[brand]/config.ts` → `footer.backgroundImage` |

---

## ⚠️ IMPORTANT RULES

1. **Never change the structure/keys** in config files — components depend on exact key names
2. **Always use the correct brand directory** when replacing image files
3. **After editing any config file, redeploy** for changes to take effect on production
4. **Do not delete** the `public/kacgroups/` or `public/kcpltl/` directories — these are required even if empty
5. **Client logos** are shared between brands. To have different logos per brand, add brand-specific entries in each config's `clients.logos[]` array pointing to brand-specific directories

---

**Generated**: June 2026  
**Project**: KAC Construction — Multi-Brand Website  
**Tech Stack**: Next.js 15 + TypeScript + Tailwind CSS