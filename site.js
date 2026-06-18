/* St Philomena School — Distance Learning
   Shared site JavaScript */

(function () {
  'use strict';

  // Sticky header shadow on scroll
  var header = document.querySelector('.main-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // Mobile nav toggle
  var mobileToggle = document.querySelector('.mob-toggle');
  var mobileNav    = document.querySelector('.mobile-nav');
  var iconMenu     = document.getElementById('icon-menu');
  var iconClose    = document.getElementById('icon-close');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      if (iconMenu)  iconMenu.style.display  = isOpen ? 'none'  : 'block';
      if (iconClose) iconClose.style.display = isOpen ? 'block' : 'none';
    });
  }

  // Scroll-reveal via IntersectionObserver
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  // Image focus mode (lightbox) — campus gallery
  var focusImages = document.querySelectorAll('.campus-featured img, .campus-grid img');
  if (focusImages.length) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Image viewer');
    lightbox.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Exit focus mode">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" ' +
        'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        'Close' +
      '</button>' +
      '<figure class="lightbox-figure">' +
        '<img class="lightbox-img" alt="">' +
        '<figcaption class="lightbox-caption"></figcaption>' +
      '</figure>';
    document.body.appendChild(lightbox);

    var lbImg     = lightbox.querySelector('.lightbox-img');
    var lbCaption = lightbox.querySelector('.lightbox-caption');
    var lbClose   = lightbox.querySelector('.lightbox-close');
    var lastTrigger = null;

    function openFocus(img) {
      lastTrigger = img;
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      lbCaption.textContent = img.alt || '';
      lbCaption.style.display = img.alt ? '' : 'none';
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function closeFocus() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
      if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
    }

    focusImages.forEach(function (img) {
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', (img.alt ? img.alt + ' — ' : '') + 'view larger image');
      img.addEventListener('click', function () { openFocus(img); });
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openFocus(img);
        }
      });
    });

    lbClose.addEventListener('click', closeFocus);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeFocus();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) closeFocus();
    });
  }

  // Lucide icons — initialise after DOM is ready
  function initIcons() {
    if (window.lucide) window.lucide.createIcons();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIcons);
  } else {
    initIcons();
  }
}());
