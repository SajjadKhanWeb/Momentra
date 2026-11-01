# MOMENTRA — Fine Art Photography & Visual Storytelling

> A modern, responsive image gallery website celebrating light, architecture, nature, portraits, and travel photography through timeless visual storytelling.

![MOMENTRA Cover](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80)

---

## ✦ Overview

**MOMENTRA** is a high-performance, responsive fine art image gallery built with clean semantic HTML5, modern vanilla CSS3, and modern modular ES6+ JavaScript. Designed with a luxury dark editorial aesthetic, MOMENTRA provides an immersive exhibition experience across mobile, tablet, laptop, and desktop displays.

---

## ✦ Key Features

### 1. Curated Masonry Image Gallery
- **Responsive Multi-Column Masonry**: Fluid column distribution adapting from 1 column on mobile to 4 columns on large desktop screens (`column-count` and `break-inside: avoid`).
- **Layout Switcher**: Toggle dynamically between **Masonry Flow** and structured **Uniform Grid** layouts.
- **Card Hover Overlays**: Elegant hover reveals displaying photographer names, EXIF camera details, locations, narrative captions, and quick-enlarge actions.
- **Interactive Favorites System**: Bookmark favorite photographs with real-time badge updates and persistent storage in `localStorage`.

### 2. Category Filtering & Real-Time Search
- **5 Filter Categories**:
  - `All Works` (Restores full curated exhibition)
  - `Nature`
  - `Architecture`
  - `Portraits`
  - `Travel`
- **Dynamic Badge Counters**: Real-time count of photographs available under each category.
- **Live Search**: Instant keyword filtering across titles, photographers, locations, camera specs, and captions.
- **Sort Options**: Sort by Curated Exhibition Order, Newest Additions, or Alphabetical (A-Z).
- **Graceful Empty State**: Helpful empty search feedback with a single-click reset button.

### 3. Interactive Image Lightbox (Modal)
- **High-Fidelity Enlargement**: Full-viewport image modal with glassmorphic backdrop blur.
- **Image Counter**: Dynamic counter display (e.g. `04 / 20`) that accurately tracks active category filters.
- **Previous & Next Controls**: Smooth browsing with on-screen buttons and keyboard controls.
- **Full Metadata Display**: Technical camera EXIF (camera body, focal length, aperture, ISO, shutter speed), location badge, photographer attribution, and curatorial narrative caption.
- **Detail Zoom**: Interactive toggle to magnify high-resolution images for closer inspection.
- **Touch Gesture Support**: Mobile swipe left/right to navigate images intuitively.

### 4. Full Keyboard Navigation
- <kbd>→</kbd> **Right Arrow**: Advance to next photograph.
- <kbd>←</kbd> **Left Arrow**: Return to previous photograph.
- <kbd>Esc</kbd> **Escape**: Close the Lightbox modal.
- <kbd>Tab</kbd> / <kbd>Enter</kbd>: Fully accessible keyboard focus and card activation.

### 5. Featured Masterworks Collection
- Dedicated showcase highlighting 4 award-winning photographs with prestigious curatorial honors (*Editor's Choice*, *Curators Choice*, *Global Story Award*, *Exhibition Gold*).
- Direct one-click launch from the featured showcase into the Lightbox.

### 6. Curatorial About Section
- Explores MOMENTRA’s brand philosophy and visual storytelling pillars:
  1. *Uncompromising Authenticity*
  2. *Geometric & Temporal Rhythm*
  3. *Narrative Transcendence*
- Archival visual collage and famous quotes celebrating the craft of photography.

### 7. Responsive Navigation & Footer
- **Global Header**: Logo with aperture mark, smooth-scrolling links, quick-search trigger, favorites badge, and animated mobile drawer menu.
- **Footer**: Brand statement, quick discipline shortcuts, newsletter portfolio subscription with instant validation, and floating Back-to-Top button.

---

## ✦ Project Structure

```
Momentra/
├── index.html        # Semantic HTML5 structure (Header, Hero, Categories, Gallery, Featured, About, Footer, Lightbox)
├── styles.css        # Luxury design system, CSS variables, Masonry layout, glassmorphism, responsive styles
├── app.js            # Modular ES6+ logic (State, filtering, search, sorting, lightbox, keyboard controls, favorites)
└── README.md         # Comprehensive project documentation
```

---

## ✦ Website Sections

| # | Section | Purpose |
|---|---|---|
| **0** | **Global Header** | Brand identity, primary navigation links, search & favorites shortcuts, responsive mobile drawer. |
| **1** | **Hero / Introduction** | Exhibition statement, key metrics (20+ Master Artworks, 4 Pillars, 4K Lightbox), interactive card stack. |
| **2** | **Categories & Filters** | Category pill buttons (All, Nature, Architecture, Portraits, Travel), live search, sort selector, layout switch. |
| **3** | **Main Image Gallery** | Responsive Masonry gallery of 20 high-resolution curated photographs with captions and EXIF data. |
| **4** | **Featured Collection** | 4 selected masterworks displayed in an editorial magazine layout with direct lightbox integration. |
| **5** | **About the Gallery** | Brand introduction, the philosophy of visual storytelling, 3 guiding pillars, curatorial atelier imagery. |
| **6** | **Footer** | Brand info, social media channels (Instagram, Behance, Unsplash, X), discipline links, newsletter, copyright. |
| **Overlay** | **Image Lightbox** | Modal overlay for enlarged viewing with counter (`XX / 20`), Next/Prev controls, zoom, and EXIF panel. |

---

## ✦ Getting Started

### Direct Browser Usage
No compilation, build process, or npm dependencies required! Simply double-click `index.html` or open it in any modern browser:
```
file:///c:/Users/sajja/Desktop/Momentra/index.html
```

### Local Dev Server (Optional)
If you prefer running a local HTTP server:
```bash
# Python 3
python -m http.server 8080

# Or Node.js npx serve
npx serve .
```
Then visit `http://localhost:8080` in your web browser.

---

## ✦ Browser & Device Compatibility

- **Browsers**: Chrome, Edge, Safari, Firefox, Opera (latest modern versions)
- **Devices**: Mobile phones (iOS & Android), Tablets (iPad, Galaxy Tab), Laptops, and 4K Ultra-Wide Desktops.
- **Zero Horizontal Overflow**: Fluid container constraints with `clamp()` typography and CSS grid/columns.

---

## ✦ License

© 2026 MOMENTRA Visual Arts Ltd. All photographs are curated via Unsplash under the Unsplash License for non-commercial editorial demonstration. All rights reserved.
