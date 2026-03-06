# Ricky's Restaurant — Next.js + Tailwind CSS Website

A luxury restaurant website built with Next.js 14 (App Router) and Tailwind CSS.

## 🎨 Design
- **Color Palette**: Rich gold `#c8a96e`, dark `#1a1208`, cream `#faf6f0`
- **Typography**: Playfair Display (headings), Cormorant Garamond (accents), Raleway (body)
- **Style**: Luxury fine-dining aesthetic with elegant animations

## 📁 Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, About, Catering, Menu Preview, Delivery CTA |
| `/menu` | Full catering menu with 4 tabbed sections |
| `/catering` | All 6 catering services with details |
| `/reservation` | Reservation booking form |

## 🚀 Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm start
```

## 📂 Structure

```
rickys-restaurant/
├── app/
│   ├── globals.css          # Global styles, fonts, animations
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Homepage
│   ├── menu/page.tsx        # Menu page
│   ├── catering/page.tsx    # Catering page
│   └── reservation/page.tsx # Reservation form
├── components/
│   ├── Navbar.tsx           # Sticky responsive navbar
│   └── Footer.tsx           # Footer with contact info
├── tailwind.config.ts       # Extended color/font/animation config
└── next.config.js           # Image domain config
```

## ✨ Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations (IntersectionObserver)
- ✅ Sticky navbar with glass effect on scroll
- ✅ Mobile hamburger menu
- ✅ Menu tabs (4 sections: Grill Feast, Grill Paradise, Extravaganza, International)
- ✅ Hover effects on cards and images
- ✅ Gold gradient button animations
- ✅ Reservation form with confirmation state
- ✅ SEO metadata

## 🎯 Customization

### Update real images
Replace Unsplash URLs in `page.tsx`, `menu/page.tsx`, `catering/page.tsx` with actual restaurant photos.

### Update contact info
Edit `components/Footer.tsx` and `app/page.tsx` contact section.

### Update menu items
Edit the `menuItems` and `menuSections` arrays in `app/page.tsx` and `app/menu/page.tsx`.
