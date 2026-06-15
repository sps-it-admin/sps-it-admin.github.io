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
