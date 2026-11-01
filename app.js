/**
 * MOMENTRA — Fine Art Photography & Visual Storytelling
 * Master Application Script
 * 
 * Features:
 * - FR-01: Accessible responsive navigation & smooth section scrolling
 * - FR-02: Responsive Masonry image gallery rendering with captions & alt text
 * - FR-03: Dynamic Category filters (All, Nature, Architecture, Portraits, Travel) + live search + sorting
 * - FR-04: Image Lightbox modal with current/total counter, metadata, and close/prev/next controls
 * - FR-05: Keyboard navigation (Left, Right, Escape) & touch swipe gestures
 * - FR-06: Featured Collection showcase with direct lightbox launch
 * - FR-07: Curatorial About section interactions
 * - FR-08: Footer category triggers, newsletter validation, and back-to-top floating button
 * - FR-09: Micro-interactions, favorite toggle persistence in localStorage, and toast notifications
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. PHOTOGRAPHIC DATASET (Curated Collection)
  // =========================================================================
  const GALLERY_DATA = [
    // --- NATURE ---
    {
      id: 'nat-01',
      title: 'Aurora Over Reinefjorden',
      category: 'nature',
      categoryName: 'Nature',
      photographer: 'Astrid Lindholm',
      location: 'Lofoten, Norway',
      exif: 'Sony A7R V • 16mm f/2.8 • ISO 1600 • 15s',
      caption: 'An ethereal emerald auroral curtain dances above the snow-dusted jagged peaks of Reine, mirrored across icy glacial waters.',
      aspectRatio: '16/10',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=75',
      featured: true,
      award: "Editor's Choice 2026",
      date: '2026-01-15'
    },
    {
      id: 'nat-02',
      title: 'Emerald Cascades of Plitvice',
      category: 'nature',
      categoryName: 'Nature',
      photographer: 'Mateo Horvat',
      location: 'Lika-Senj, Croatia',
      exif: 'Nikon Z8 • 24mm f/8 • ISO 64 • 2.5s',
      caption: 'Terraced limestone cascades carve crystalline pathways through virgin beech forests in early morning fog.',
      aspectRatio: '3/4',
      image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-02-04'
    },
    {
      id: 'nat-03',
      title: 'The Mist of Redwood Sanctuary',
      category: 'nature',
      categoryName: 'Nature',
      photographer: 'Julian Vance',
      location: 'California, USA',
      exif: 'Canon EOS R5 • 50mm f/4 • ISO 200 • 1/125s',
      caption: 'Sunlight pierces dense coastal fog in cathedral-like ancient redwood groves, illuminating drifting spore dust.',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-01-28'
    },
    {
      id: 'nat-04',
      title: 'Dune Whispers at Sossusvlei',
      category: 'nature',
      categoryName: 'Nature',
      photographer: 'Tariq Al-Mansoor',
      location: 'Namib Desert, Namibia',
      exif: 'Fujifilm GFX 100S • 70mm f/11 • ISO 100 • 1/320s',
      caption: 'Razor-sharp ridgelines divide deep terracotta red sand from razor-cut black shadows at sunrise.',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2025-12-10'
    },
    {
      id: 'nat-05',
      title: 'Glacial Serenade',
      category: 'nature',
      categoryName: 'Nature',
      photographer: 'Freja Sigurdsdóttir',
      location: 'Jökulsárlón, Iceland',
      exif: 'Sony A1 • 35mm f/5.6 • ISO 100 • 1/500s',
      caption: 'Centuries-old calved blue icebergs rest like sculpted diamonds on volcanic black sands.',
      aspectRatio: '4/3',
      image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-02-14'
    },

    // --- ARCHITECTURE ---
    {
      id: 'arch-01',
      title: 'Geometric Symphony: The Spiral',
      category: 'architecture',
      categoryName: 'Architecture',
      photographer: 'Darren Croft',
      location: 'New York City, USA',
      exif: 'Leica Q3 • 28mm f/5.6 • ISO 100 • 1/250s',
      caption: 'An intricate interlocking lattice of bronze-coated steel stairs forming an infinite geometric upward labyrinth.',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=75',
      featured: true,
      award: 'Curators Choice',
      date: '2026-01-20'
    },
    {
      id: 'arch-02',
      title: 'Shadows of the Monolith',
      category: 'architecture',
      categoryName: 'Architecture',
      photographer: 'Sofia Calatrava',
      location: 'Valencia, Spain',
      exif: 'Sony A7R IV • 20mm f/8 • ISO 100 • 1/400s',
      caption: 'Curvilinear organic white concrete arcs contrast sharply with cerulean skies in a futuristic structural ballet.',
      aspectRatio: '16/10',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-02-01'
    },
    {
      id: 'arch-03',
      title: 'Futuristic Curves of Heydar Aliyev',
      category: 'architecture',
      categoryName: 'Architecture',
      photographer: 'Kenji Sato',
      location: 'Baku, Azerbaijan',
      exif: 'Hasselblad X2D • 38mm f/8 • ISO 64 • 1/160s',
      caption: 'Fluid architectural folds designed without a single straight line, blending earth and sky in seamless rhythm.',
      aspectRatio: '3/4',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2025-11-19'
    },
    {
      id: 'arch-04',
      title: 'The Brutalist Spiral',
      category: 'architecture',
      categoryName: 'Architecture',
      photographer: 'Oliver Hayes',
      location: 'London, UK',
      exif: 'Canon R6 II • 24mm f/4 • ISO 400 • 1/100s',
      caption: 'A vertigo-inducing cantilevered staircase captured from above, framing stark monochromatic geometry.',
      aspectRatio: '1/1',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-01-05'
    },
    {
      id: 'arch-05',
      title: 'Brushed Concrete & Glass',
      category: 'architecture',
      categoryName: 'Architecture',
      photographer: 'Mette Lind',
      location: 'Copenhagen, Denmark',
      exif: 'Nikon Z7 II • 35mm f/6.3 • ISO 100 • 1/320s',
      caption: 'Minimalist Scandinavian glass reflections harmonizing with raw poured concrete facade in midday light.',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2025-12-28'
    },

    // --- PORTRAITS ---
    {
      id: 'port-01',
      title: 'Gaze of the Nomad Elder',
      category: 'portraits',
      categoryName: 'Portraits',
      photographer: 'Bat-Erdene Bold',
      location: 'Ulaanbaatar, Mongolia',
      exif: 'Canon R5 • 85mm f/1.4 • ISO 200 • 1/800s',
      caption: 'Weathered expression sculpted by steppe winds, eyes holding seven decades of ancestral wisdom and resilience.',
      aspectRatio: '3/4',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=75',
      featured: true,
      award: 'Global Story Award',
      date: '2026-02-10'
    },
    {
      id: 'port-02',
      title: "The Weaver's Reflection",
      category: 'portraits',
      categoryName: 'Portraits',
      photographer: 'Elena Morales',
      location: 'Oaxaca, Mexico',
      exif: 'Sony A7 IV • 50mm f/1.8 • ISO 400 • 1/200s',
      caption: 'Zapotec textile master working crimson cochineal dyes into intricate backstrap loom patterns in afternoon warmth.',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-01-12'
    },
    {
      id: 'port-03',
      title: 'Golden Hour Melancholy',
      category: 'portraits',
      categoryName: 'Portraits',
      photographer: 'Marco Bellini',
      location: 'Florence, Italy',
      exif: 'Fujifilm X-T5 • 56mm f/1.2 • ISO 160 • 1/1000s',
      caption: 'Soft Tuscan sunlight caressing contemplative facial contours against an ancient terracotta backdrop.',
      aspectRatio: '16/10',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-01-30'
    },
    {
      id: 'port-04',
      title: 'Portrait of an Artisan',
      category: 'portraits',
      categoryName: 'Portraits',
      photographer: 'Zaid Bennani',
      location: 'Fez, Morocco',
      exif: 'Leica M11 • 50mm f/2 • ISO 320 • 1/400s',
      caption: 'Traditional brass engraver illuminated solely by the narrow shaft of light penetrating a medina vaulted ceiling.',
      aspectRatio: '3/4',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2025-12-05'
    },
    {
      id: 'port-05',
      title: 'Soul in Neon Rain',
      category: 'portraits',
      categoryName: 'Portraits',
      photographer: 'Akira Tanaka',
      location: 'Shinjuku, Tokyo',
      exif: 'Sony A7S III • 85mm f/1.4 • ISO 1250 • 1/160s',
      caption: 'Glistening raindrops on a transparent umbrella reflecting magenta and cyan neon signboards across night pavement.',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-02-18'
    },

    // --- TRAVEL ---
    {
      id: 'trv-01',
      title: 'Torii Path at Midnight',
      category: 'travel',
      categoryName: 'Travel',
      photographer: 'Hana Takahashi',
      location: 'Fushimi Inari, Kyoto',
      exif: 'Sony A7R V • 24mm f/2 • ISO 800 • 1/60s',
      caption: 'Thousands of vermilion torii gates winding up sacred Mount Inari in silent stillness beneath mist and paper lantern glow.',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=75',
      featured: true,
      award: 'Exhibition Gold 2026',
      date: '2026-02-12'
    },
    {
      id: 'trv-02',
      title: 'Balloons Over Göreme Valley',
      category: 'travel',
      categoryName: 'Travel',
      photographer: 'Emre Demir',
      location: 'Cappadocia, Turkey',
      exif: 'Nikon Z9 • 70mm f/5.6 • ISO 200 • 1/640s',
      caption: 'Scores of vibrant hot air balloons ascend over ancient fairy chimneys as dawn paints the volcanic plateau in rose gold.',
      aspectRatio: '16/10',
      image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-01-22'
    },
    {
      id: 'trv-03',
      title: 'Sailing into the Amalfi Dawn',
      category: 'travel',
      categoryName: 'Travel',
      photographer: 'Chiara Rossi',
      location: 'Positano, Italy',
      exif: 'Canon R5 • 35mm f/4 • ISO 100 • 1/500s',
      caption: 'Pastel cliffside villas clinging to dramatic sheer coastal bluffs while fishing boats wake the turquoise Tyrrhenian sea.',
      aspectRatio: '3/4',
      image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2025-12-18'
    },
    {
      id: 'trv-04',
      title: 'Camel Caravan Across Sahara',
      category: 'travel',
      categoryName: 'Travel',
      photographer: 'Youssef Belhadj',
      location: 'Merzouga, Morocco',
      exif: 'Sony A1 • 50mm f/8 • ISO 100 • 1/400s',
      caption: 'A solitary Berber caravan casts dramatic elongated evening shadows across the ripples of golden Erg Chebbi dunes.',
      aspectRatio: '16/9',
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-02-08'
    },
    {
      id: 'trv-05',
      title: 'The Solitary Alpine Viaduct',
      category: 'travel',
      categoryName: 'Travel',
      photographer: 'Lucas Weber',
      location: 'Graubünden, Switzerland',
      exif: 'DJI Mavic 3 Pro • 70mm f/2.8 • ISO 100 • 1/1000s',
      caption: 'A scarlet panoramic train glides across a 65-meter limestone viaduct curving gracefully into a vertical alpine rock face.',
      aspectRatio: '4/5',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
      thumb: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=75',
      featured: false,
      date: '2026-01-18'
    }
  ];

  // =========================================================================
  // 2. APPLICATION STATE
  // =========================================================================
  const state = {
    activeCategory: 'all',          // 'all', 'nature', 'architecture', 'portraits', 'travel', 'favorites'
    searchQuery: '',
    sortOrder: 'curated',           // 'curated', 'newest', 'title'
    layoutMode: 'masonry',          // 'masonry', 'grid'
    activeLightboxIndex: 0,
    currentCollection: [],          // Active filtered array of photographs
    favorites: loadFavorites(),
    isLightboxOpen: false,
    isZoomed: false,
    touchStartX: 0,
    touchEndX: 0
  };

  // =========================================================================
  // 3. DOM ELEMENTS CACHE
  // =========================================================================
  const DOM = {
    // Header & Nav
    siteHeader: document.getElementById('site-header'),
    desktopNavLinks: document.querySelectorAll('.desktop-nav .nav-link'),
    mobileToggle: document.getElementById('mobile-toggle'),
    mobileNav: document.getElementById('mobile-nav'),
    mobileNavClose: document.getElementById('mobile-nav-close'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),
    headerSearchBtn: document.getElementById('header-search-btn'),
    viewFavoritesBtn: document.getElementById('view-favorites-btn'),
    headerFavCount: document.getElementById('header-fav-count'),
    heroExploreBtn: document.getElementById('hero-explore-btn'),
    statPhotosCount: document.getElementById('stat-photos-count'),

    // Categories & Filter controls
    filterBtns: document.querySelectorAll('.filter-btn'),
    badgeAll: document.getElementById('badge-all'),
    badgeNature: document.getElementById('badge-nature'),
    badgeArchitecture: document.getElementById('badge-architecture'),
    badgePortraits: document.getElementById('badge-portraits'),
    badgeTravel: document.getElementById('badge-travel'),
    gallerySearchInput: document.getElementById('gallery-search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    layoutMasonryBtn: document.getElementById('layout-masonry-btn'),
    layoutGridBtn: document.getElementById('layout-grid-btn'),
    sortSelect: document.getElementById('sort-select'),
    galleryStatusCount: document.getElementById('gallery-status-count'),
    resetFilterBtn: document.getElementById('reset-filter-btn'),

    // Main Gallery
    masonryGallery: document.getElementById('masonry-gallery'),
    galleryEmptyState: document.getElementById('gallery-empty-state'),
    emptyResetBtn: document.getElementById('empty-reset-btn'),

    // Featured Grid
    featuredGrid: document.getElementById('featured-grid'),

    // Footer & Scroll
    footerCatLinks: document.querySelectorAll('.footer-cat-link'),
    backToTopBtn: document.getElementById('back-to-top-btn'),
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    newsletterFeedback: document.getElementById('newsletter-feedback'),

    // Lightbox Modal
    lightboxModal: document.getElementById('lightbox-modal'),
    lightboxBackdrop: document.getElementById('lightbox-backdrop'),
    lightboxContainer: document.getElementById('lightbox-container'),
    counterCurrent: document.getElementById('counter-current'),
    counterTotal: document.getElementById('counter-total'),
    lightboxCategoryTag: document.getElementById('lightbox-category-tag'),
    lbZoomBtn: document.getElementById('lb-zoom-btn'),
    lbFavBtn: document.getElementById('lb-fav-btn'),
    lbCloseBtn: document.getElementById('lb-close-btn'),
    lbPrevBtn: document.getElementById('lb-prev-btn'),
    lbNextBtn: document.getElementById('lb-next-btn'),
    lightboxActiveImg: document.getElementById('lightbox-active-img'),
    lightboxSpinner: document.getElementById('lightbox-spinner'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxCaption: document.getElementById('lightbox-caption'),
    lightboxLocation: document.getElementById('lightbox-location'),
    lightboxPhotographer: document.getElementById('lightbox-photographer'),
    lightboxExif: document.getElementById('lightbox-exif'),
    lightboxImageViewport: document.getElementById('lightbox-image-viewport'),

    // Toast
    toastContainer: document.getElementById('toast-container')
  };

  // =========================================================================
  // 4. STORAGE & FAVORITES HELPERS
  // =========================================================================
  function loadFavorites() {
    try {
      const stored = localStorage.getItem('momentra_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem('momentra_favorites', JSON.stringify(state.favorites));
    } catch (e) {
      console.warn('Could not persist favorites to localStorage', e);
    }
  }

  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    const item = GALLERY_DATA.find(p => p.id === id);
    const title = item ? item.title : 'Photograph';

    if (idx > -1) {
      state.favorites.splice(idx, 1);
      showToast(`Removed "${title}" from favorites`);
    } else {
      state.favorites.push(id);
      showToast(`Added "${title}" to your favorites ♥`);
    }

    saveFavorites();
    updateFavoriteBadges();

    // If currently viewing favorites category, re-filter gallery
    if (state.activeCategory === 'favorites') {
      applyFilters();
    } else {
      // Refresh favorite heart icons on cards
      document.querySelectorAll(`[data-fav-id="${id}"]`).forEach(btn => {
        btn.classList.toggle('is-active', state.favorites.includes(id));
      });
      // Refresh lightbox favorite button if active
      if (state.isLightboxOpen) {
        updateLightboxFavButton();
      }
    }
  }

  function updateFavoriteBadges() {
    const count = state.favorites.length;
    if (DOM.headerFavCount) {
      DOM.headerFavCount.textContent = count;
      DOM.headerFavCount.setAttribute('aria-label', `${count} favorite photographs`);
    }
  }

  function updateLightboxFavButton() {
    const currentItem = state.currentCollection[state.activeLightboxIndex];
    if (!currentItem || !DOM.lbFavBtn) return;
    const isFav = state.favorites.includes(currentItem.id);
    DOM.lbFavBtn.classList.toggle('is-active', isFav);
    DOM.lbFavBtn.style.color = isFav ? 'var(--accent-gold)' : '#ffffff';
    const svg = DOM.lbFavBtn.querySelector('svg');
    if (svg) {
      svg.style.fill = isFav ? 'currentColor' : 'none';
    }
  }

  // =========================================================================
  // 5. TOAST NOTIFICATION
  // =========================================================================
  function showToast(message) {
    if (!DOM.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `<span>✦</span><span>${escapeHtml(message)}</span>`;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // =========================================================================
  // 6. GALLERY FILTERING, SORTING, AND RENDERING
  // =========================================================================
  function computeCategoryCounts() {
    const counts = {
      all: GALLERY_DATA.length,
      nature: 0,
      architecture: 0,
      portraits: 0,
      travel: 0
    };

    GALLERY_DATA.forEach(item => {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    });

    if (DOM.badgeAll) DOM.badgeAll.textContent = counts.all;
    if (DOM.badgeNature) DOM.badgeNature.textContent = counts.nature;
    if (DOM.badgeArchitecture) DOM.badgeArchitecture.textContent = counts.architecture;
    if (DOM.badgePortraits) DOM.badgePortraits.textContent = counts.portraits;
    if (DOM.badgeTravel) DOM.badgeTravel.textContent = counts.travel;
    if (DOM.statPhotosCount) DOM.statPhotosCount.textContent = `${counts.all}`;
  }

  function applyFilters() {
    let result = [...GALLERY_DATA];

    // Category Filter
    if (state.activeCategory === 'favorites') {
      result = result.filter(item => state.favorites.includes(item.id));
    } else if (state.activeCategory !== 'all') {
      result = result.filter(item => item.category === state.activeCategory);
    }

    // Search Query Filter
    const q = state.searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(item => {
        return (
          item.title.toLowerCase().includes(q) ||
          item.photographer.toLowerCase().includes(q) ||
          item.location.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q) ||
          item.caption.toLowerCase().includes(q) ||
          item.exif.toLowerCase().includes(q)
        );
      });
    }

    // Sort Order
    if (state.sortOrder === 'newest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (state.sortOrder === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    // 'curated' retains the original balanced exhibition sequence

    state.currentCollection = result;
    renderGallery();
    updateFilterStatusBar();
  }

  function updateFilterStatusBar() {
    const total = state.currentCollection.length;
    let label = '';

    if (state.activeCategory === 'favorites') {
      label = `Showing ${total} favorited photograph${total === 1 ? '' : 's'}`;
    } else if (state.activeCategory === 'all') {
      label = `Showing all ${total} photograph${total === 1 ? '' : 's'}`;
    } else {
      const catCap = state.activeCategory.charAt(0).toUpperCase() + state.activeCategory.slice(1);
      label = `Showing ${total} photograph${total === 1 ? '' : 's'} in ${catCap}`;
    }

    if (state.searchQuery.trim()) {
      label += ` matching "${escapeHtml(state.searchQuery.trim())}"`;
    }

    if (DOM.galleryStatusCount) {
      DOM.galleryStatusCount.textContent = label;
    }

    // Show or hide Reset filter button
    const isFiltered = state.activeCategory !== 'all' || state.searchQuery.trim() !== '';
    if (DOM.resetFilterBtn) {
      DOM.resetFilterBtn.hidden = !isFiltered;
    }
  }

  function renderGallery() {
    if (!DOM.masonryGallery) return;

    if (state.currentCollection.length === 0) {
      DOM.masonryGallery.innerHTML = '';
      if (DOM.galleryEmptyState) DOM.galleryEmptyState.hidden = false;
      return;
    }

    if (DOM.galleryEmptyState) DOM.galleryEmptyState.hidden = true;

    const cardsHtml = state.currentCollection.map((photo, index) => {
      const isFav = state.favorites.includes(photo.id);
      return `
        <article class="gallery-card" data-photo-id="${photo.id}" data-index="${index}" tabindex="0" role="button" aria-label="View photograph: ${escapeHtml(photo.title)} by ${escapeHtml(photo.photographer)}">
          <div class="gallery-card-img-wrap">
            
            <!-- Top Badges -->
            <div class="card-floating-badges">
              <span class="category-tag-badge">${escapeHtml(photo.categoryName)}</span>
              <button type="button" class="card-fav-btn ${isFav ? 'is-active' : ''}" data-fav-id="${photo.id}" aria-label="${isFav ? 'Remove from favorites' : 'Add to favorites'}" title="Favorite">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            <!-- Image with Lazy Loading & Fallback -->
            <img 
              src="${photo.thumb}" 
              alt="${escapeHtml(photo.title)} — Fine art ${escapeHtml(photo.categoryName)} photography in ${escapeHtml(photo.location)} by ${escapeHtml(photo.photographer)}" 
              class="gallery-card-img" 
              loading="lazy" 
              width="600" 
              height="400"
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=75';"
            >

            <!-- Card Hover Overlay (FR-09) -->
            <div class="gallery-card-overlay">
              <span class="overlay-expand-btn" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                </svg>
              </span>

              <div class="overlay-content">
                <h3 class="card-title">${escapeHtml(photo.title)}</h3>
                <p class="card-caption">${escapeHtml(photo.caption)}</p>
                <div class="card-meta-row">
                  <span class="card-photographer">${escapeHtml(photo.photographer)}</span>
                  <span class="card-location">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    ${escapeHtml(photo.location)}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </article>
      `;
    }).join('');

    DOM.masonryGallery.innerHTML = cardsHtml;
  }

  // =========================================================================
  // 7. FEATURED COLLECTION SECTION (FR-06)
  // =========================================================================
  function renderFeaturedCollection() {
    if (!DOM.featuredGrid) return;

    const featuredItems = GALLERY_DATA.filter(p => p.featured);

    const featuredHtml = featuredItems.map((photo) => {
      return `
        <article class="featured-item" data-featured-id="${photo.id}" tabindex="0" role="button" aria-label="Open featured photograph: ${escapeHtml(photo.title)}">
          <div class="featured-img-wrap">
            <img 
              src="${photo.image}" 
              alt="${escapeHtml(photo.title)} — ${escapeHtml(photo.award)}" 
              class="featured-img" 
              loading="lazy" 
              width="800" 
              height="500"
              onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';"
            >
            <div class="featured-overlay">
              <div class="featured-top-bar">
                <span class="award-badge">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  ${escapeHtml(photo.award || 'Featured Masterwork')}
                </span>
                <span class="category-tag-badge">${escapeHtml(photo.categoryName)}</span>
              </div>

              <div class="featured-bottom-bar">
                <h3 class="featured-title">${escapeHtml(photo.title)}</h3>
                <p class="featured-snippet">${escapeHtml(photo.caption)}</p>
                <div class="featured-meta">
                  <span>${escapeHtml(photo.photographer)}</span>
                  <span>•</span>
                  <span>${escapeHtml(photo.location)}</span>
                  <span class="featured-trigger-link">
                    <span>Inspect In Lightbox</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    DOM.featuredGrid.innerHTML = featuredHtml;
  }

  // =========================================================================
  // 8. IMAGE LIGHTBOX LOGIC (FR-04, FR-05)
  // =========================================================================
  function openLightbox(indexOrId) {
    let index = 0;

    if (typeof indexOrId === 'string') {
      // Find within currentCollection
      index = state.currentCollection.findIndex(p => p.id === indexOrId);
      if (index === -1) {
        // If not in current collection, reset category filter to 'all' and find
        state.activeCategory = 'all';
        state.searchQuery = '';
        if (DOM.gallerySearchInput) DOM.gallerySearchInput.value = '';
        syncFilterButtons();
        applyFilters();
        index = state.currentCollection.findIndex(p => p.id === indexOrId);
      }
    } else {
      index = indexOrId;
    }

    if (index < 0 || index >= state.currentCollection.length) {
      index = 0;
    }

    state.activeLightboxIndex = index;
    state.isLightboxOpen = true;
    state.isZoomed = false;

    updateLightboxContent();

    // Show modal
    DOM.lightboxModal.classList.add('active');
    DOM.lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent page background scrolling

    // Trap focus inside lightbox close button
    setTimeout(() => {
      if (DOM.lbCloseBtn) DOM.lbCloseBtn.focus();
    }, 50);
  }

  function closeLightbox() {
    if (!state.isLightboxOpen) return;

    DOM.lightboxModal.classList.remove('active');
    DOM.lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.isLightboxOpen = false;
    state.isZoomed = false;
    if (DOM.lightboxActiveImg) {
      DOM.lightboxActiveImg.classList.remove('zoomed');
    }
  }

  function showNextImage() {
    if (!state.isLightboxOpen || state.currentCollection.length === 0) return;
    state.activeLightboxIndex = (state.activeLightboxIndex + 1) % state.currentCollection.length;
    state.isZoomed = false;
    updateLightboxContent();
  }

  function showPrevImage() {
    if (!state.isLightboxOpen || state.currentCollection.length === 0) return;
    state.activeLightboxIndex = (state.activeLightboxIndex - 1 + state.currentCollection.length) % state.currentCollection.length;
    state.isZoomed = false;
    updateLightboxContent();
  }

  function updateLightboxContent() {
    const item = state.currentCollection[state.activeLightboxIndex];
    if (!item) return;

    // Counter (FR-04: formatted "01 / 20")
    const curNum = String(state.activeLightboxIndex + 1).padStart(2, '0');
    const totNum = String(state.currentCollection.length).padStart(2, '0');
    if (DOM.counterCurrent) DOM.counterCurrent.textContent = curNum;
    if (DOM.counterTotal) DOM.counterTotal.textContent = totNum;

    // Category tag
    if (DOM.lightboxCategoryTag) {
      DOM.lightboxCategoryTag.textContent = item.categoryName;
    }

    // Metadata
    if (DOM.lightboxTitle) DOM.lightboxTitle.textContent = item.title;
    if (DOM.lightboxCaption) DOM.lightboxCaption.textContent = item.caption;
    if (DOM.lightboxLocation) DOM.lightboxLocation.textContent = item.location;
    if (DOM.lightboxPhotographer) DOM.lightboxPhotographer.textContent = item.photographer;
    if (DOM.lightboxExif) DOM.lightboxExif.textContent = item.exif;

    // Favorite button
    updateLightboxFavButton();

    // Image & Loading Spinner
    if (DOM.lightboxSpinner) DOM.lightboxSpinner.classList.add('loading');
    if (DOM.lightboxActiveImg) {
      DOM.lightboxActiveImg.style.opacity = '0.3';
      DOM.lightboxActiveImg.classList.remove('zoomed');
      DOM.lightboxActiveImg.src = item.image;
      DOM.lightboxActiveImg.alt = `${item.title} — Fine art photography by ${item.photographer}`;

      DOM.lightboxActiveImg.onload = () => {
        if (DOM.lightboxSpinner) DOM.lightboxSpinner.classList.remove('loading');
        DOM.lightboxActiveImg.style.opacity = '1';
      };

      DOM.lightboxActiveImg.onerror = () => {
        if (DOM.lightboxSpinner) DOM.lightboxSpinner.classList.remove('loading');
        DOM.lightboxActiveImg.style.opacity = '1';
      };
    }
  }

  function toggleZoom() {
    state.isZoomed = !state.isZoomed;
    if (DOM.lightboxActiveImg) {
      DOM.lightboxActiveImg.classList.toggle('zoomed', state.isZoomed);
    }
    if (DOM.lbZoomBtn) {
      DOM.lbZoomBtn.setAttribute('aria-pressed', state.isZoomed);
      DOM.lbZoomBtn.title = state.isZoomed ? 'Zoom Out' : 'Zoom In';
    }
  }

  // =========================================================================
  // 9. EVENT LISTENERS SETUP
  // =========================================================================
  function setupEventListeners() {
    // -----------------------------------------------------------------------
    // Keyboard Navigation (FR-04, FR-05)
    // -----------------------------------------------------------------------
    window.addEventListener('keydown', (e) => {
      if (!state.isLightboxOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrevImage();
      }
    });

    // Lightbox Controls
    if (DOM.lbCloseBtn) DOM.lbCloseBtn.addEventListener('click', closeLightbox);
    if (DOM.lightboxBackdrop) DOM.lightboxBackdrop.addEventListener('click', closeLightbox);
    if (DOM.lbNextBtn) DOM.lbNextBtn.addEventListener('click', showNextImage);
    if (DOM.lbPrevBtn) DOM.lbPrevBtn.addEventListener('click', showPrevImage);
    if (DOM.lbZoomBtn) DOM.lbZoomBtn.addEventListener('click', toggleZoom);
    if (DOM.lightboxActiveImg) DOM.lightboxActiveImg.addEventListener('click', toggleZoom);

    // Lightbox Favorite Toggle
    if (DOM.lbFavBtn) {
      DOM.lbFavBtn.addEventListener('click', () => {
        const item = state.currentCollection[state.activeLightboxIndex];
        if (item) toggleFavorite(item.id);
      });
    }

    // Touch swipe gesture navigation for mobile
    if (DOM.lightboxImageViewport) {
      DOM.lightboxImageViewport.addEventListener('touchstart', (e) => {
        state.touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      DOM.lightboxImageViewport.addEventListener('touchend', (e) => {
        state.touchEndX = e.changedTouches[0].screenX;
        handleSwipeGesture();
      }, { passive: true });
    }

    function handleSwipeGesture() {
      const threshold = 50; // Min px swipe distance
      const diff = state.touchEndX - state.touchStartX;
      if (Math.abs(diff) > threshold) {
        if (diff < 0) {
          showNextImage(); // Swiped left -> show next
        } else {
          showPrevImage(); // Swiped right -> show previous
        }
      }
    }

    // -----------------------------------------------------------------------
    // Gallery Card Click & Keyboard Trigger (FR-02, FR-04)
    // -----------------------------------------------------------------------
    if (DOM.masonryGallery) {
      DOM.masonryGallery.addEventListener('click', (e) => {
        // Favorite button inside card
        const favBtn = e.target.closest('.card-fav-btn');
        if (favBtn) {
          e.stopPropagation();
          const photoId = favBtn.getAttribute('data-fav-id');
          if (photoId) toggleFavorite(photoId);
          return;
        }

        // Open Lightbox
        const card = e.target.closest('.gallery-card');
        if (card) {
          const photoId = card.getAttribute('data-photo-id');
          openLightbox(photoId);
        }
      });

      // Keyboard accessible card trigger
      DOM.masonryGallery.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const card = e.target.closest('.gallery-card');
          if (card && e.target === card) {
            e.preventDefault();
            const photoId = card.getAttribute('data-photo-id');
            openLightbox(photoId);
          }
        }
      });
    }

    // -----------------------------------------------------------------------
    // Featured Collection Click (FR-06)
    // -----------------------------------------------------------------------
    if (DOM.featuredGrid) {
      DOM.featuredGrid.addEventListener('click', (e) => {
        const item = e.target.closest('.featured-item');
        if (item) {
          const photoId = item.getAttribute('data-featured-id');
          openLightbox(photoId);
        }
      });

      DOM.featuredGrid.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          const item = e.target.closest('.featured-item');
          if (item && e.target === item) {
            e.preventDefault();
            const photoId = item.getAttribute('data-featured-id');
            openLightbox(photoId);
          }
        }
      });
    }

    // -----------------------------------------------------------------------
    // Category Filter Buttons (FR-03)
    // -----------------------------------------------------------------------
    DOM.filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');
        setCategory(cat);
      });
    });

    function setCategory(cat) {
      state.activeCategory = cat;
      syncFilterButtons();
      applyFilters();
    }

    function syncFilterButtons() {
      DOM.filterBtns.forEach(b => {
        const isMatch = b.getAttribute('data-category') === state.activeCategory;
        b.classList.toggle('active', isMatch);
        b.setAttribute('aria-selected', isMatch);
      });
    }

    // View Favorites Button in Header
    if (DOM.viewFavoritesBtn) {
      DOM.viewFavoritesBtn.addEventListener('click', () => {
        if (state.favorites.length === 0) {
          showToast('No favorite photographs saved yet. Click the ♥ icon on any artwork!');
          return;
        }
        setCategory('favorites');
        // Smooth scroll to categories section
        const catSec = document.getElementById('categories');
        if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Footer category shortcuts
    DOM.footerCatLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-cat');
        if (cat) {
          setCategory(cat);
          const catSec = document.getElementById('categories');
          if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Reset Filter Button
    if (DOM.resetFilterBtn) {
      DOM.resetFilterBtn.addEventListener('click', resetAllFilters);
    }
    if (DOM.emptyResetBtn) {
      DOM.emptyResetBtn.addEventListener('click', resetAllFilters);
    }

    function resetAllFilters() {
      state.activeCategory = 'all';
      state.searchQuery = '';
      if (DOM.gallerySearchInput) DOM.gallerySearchInput.value = '';
      if (DOM.clearSearchBtn) DOM.clearSearchBtn.hidden = true;
      syncFilterButtons();
      applyFilters();
      showToast('Restored all gallery photographs');
    }

    // -----------------------------------------------------------------------
    // Live Search Filter
    // -----------------------------------------------------------------------
    if (DOM.gallerySearchInput) {
      DOM.gallerySearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (DOM.clearSearchBtn) {
          DOM.clearSearchBtn.hidden = state.searchQuery.length === 0;
        }
        applyFilters();
      });
    }

    if (DOM.clearSearchBtn) {
      DOM.clearSearchBtn.addEventListener('click', () => {
        state.searchQuery = '';
        if (DOM.gallerySearchInput) {
          DOM.gallerySearchInput.value = '';
          DOM.gallerySearchInput.focus();
        }
        DOM.clearSearchBtn.hidden = true;
        applyFilters();
      });
    }

    // Header Search Shortcut Button
    if (DOM.headerSearchBtn) {
      DOM.headerSearchBtn.addEventListener('click', () => {
        const catSec = document.getElementById('categories');
        if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          if (DOM.gallerySearchInput) DOM.gallerySearchInput.focus();
        }, 400);
      });
    }

    // -----------------------------------------------------------------------
    // Layout Toggle: Masonry vs Grid
    // -----------------------------------------------------------------------
    if (DOM.layoutMasonryBtn && DOM.layoutGridBtn) {
      DOM.layoutMasonryBtn.addEventListener('click', () => {
        state.layoutMode = 'masonry';
        DOM.layoutMasonryBtn.classList.add('active');
        DOM.layoutGridBtn.classList.remove('active');
        DOM.masonryGallery.classList.remove('mode-grid');
      });

      DOM.layoutGridBtn.addEventListener('click', () => {
        state.layoutMode = 'grid';
        DOM.layoutGridBtn.classList.add('active');
        DOM.layoutMasonryBtn.classList.remove('active');
        DOM.masonryGallery.classList.add('mode-grid');
      });
    }

    // -----------------------------------------------------------------------
    // Sort Selector
    // -----------------------------------------------------------------------
    if (DOM.sortSelect) {
      DOM.sortSelect.addEventListener('change', (e) => {
        state.sortOrder = e.target.value;
        applyFilters();
      });
    }

    // -----------------------------------------------------------------------
    // Mobile Drawer Navigation (FR-01)
    // -----------------------------------------------------------------------
    if (DOM.mobileToggle && DOM.mobileNav) {
      DOM.mobileToggle.addEventListener('click', () => {
        const isOpen = DOM.mobileNav.classList.toggle('open');
        DOM.mobileToggle.setAttribute('aria-expanded', isOpen);
        DOM.mobileNav.setAttribute('aria-hidden', !isOpen);
      });

      if (DOM.mobileNavClose) {
        DOM.mobileNavClose.addEventListener('click', closeMobileMenu);
      }

      DOM.mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
      });
    }

    function closeMobileMenu() {
      if (DOM.mobileNav) {
        DOM.mobileNav.classList.remove('open');
        DOM.mobileNav.setAttribute('aria-hidden', 'true');
      }
      if (DOM.mobileToggle) {
        DOM.mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }

    // -----------------------------------------------------------------------
    // Header Scroll Shadow & Active Link Observer
    // -----------------------------------------------------------------------
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY > 40;
      if (DOM.siteHeader) {
        DOM.siteHeader.classList.toggle('scrolled', scrolled);
      }

      // Back to top button visibility
      if (DOM.backToTopBtn) {
        DOM.backToTopBtn.classList.toggle('visible', window.scrollY > 500);
      }
    }, { passive: true });

    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Section Active Link Highlighting
    const sections = document.querySelectorAll('section[id], footer[id]');
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          DOM.desktopNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' });

    sections.forEach(sec => navObserver.observe(sec));

    // -----------------------------------------------------------------------
    // Newsletter Subscription Handling
    // -----------------------------------------------------------------------
    if (DOM.newsletterForm && DOM.newsletterEmail && DOM.newsletterFeedback) {
      DOM.newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = DOM.newsletterEmail.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
          DOM.newsletterFeedback.className = 'form-feedback error';
          DOM.newsletterFeedback.textContent = 'Please enter a valid email address.';
          return;
        }

        DOM.newsletterFeedback.className = 'form-feedback success';
        DOM.newsletterFeedback.textContent = 'Thank you! You are now subscribed to the monthly curatorial portfolio.';
        DOM.newsletterEmail.value = '';
        showToast('Subscribed to MOMENTRA Curatorial Dispatch');
      });
    }
  }

  // =========================================================================
  // 10. INITIALIZATION
  // =========================================================================
  function init() {
    computeCategoryCounts();
    updateFavoriteBadges();
    applyFilters();
    renderFeaturedCollection();
    setupEventListeners();
    console.log('MOMENTRA Image Gallery initialized successfully with 20 artworks.');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
