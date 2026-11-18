(function () {
  'use strict';

  var menu = document.querySelector('.site-menu');
  if (!menu) return;
  var summary = menu.querySelector('summary');
  var desktop = window.matchMedia('(min-width: 1200px)');

  function syncMenu() {
    menu.open = desktop.matches;
  }

  syncMenu();
  if (desktop.addEventListener) desktop.addEventListener('change', syncMenu);
  else desktop.addListener(syncMenu);

  menu.addEventListener('click', function (event) {
    if (!desktop.matches && event.target.closest('a')) menu.open = false;
  });

  document.addEventListener('click', function (event) {
    if (!desktop.matches && !menu.contains(event.target)) menu.open = false;
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.open && !desktop.matches) {
      menu.open = false;
      summary.focus();
    }
  });

  // Keep the long reading page's current section visible in the navigation.
  var sections = Array.prototype.map.call(menu.querySelectorAll('a[href*="#"]'), function (link) {
    var url = new URL(link.href);
    var target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target || url.pathname !== window.location.pathname) return null;
    return { link: link, target: target };
  }).filter(Boolean);
  var framePending = false;
  var currentLink;

  function updateCurrentSection() {
    framePending = false;
    if (!sections.length) return;
    var threshold = document.querySelector('.masthead').getBoundingClientRect().height + 48;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.target.getBoundingClientRect().top <= threshold) current = section;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    if (currentLink === current.link) return;
    if (currentLink) currentLink.removeAttribute('aria-current');
    current.link.setAttribute('aria-current', 'location');
    currentLink = current.link;
  }

  function requestSectionUpdate() {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateCurrentSection);
  }

  window.addEventListener('scroll', requestSectionUpdate, { passive: true });
  window.addEventListener('resize', requestSectionUpdate);
  window.addEventListener('load', requestSectionUpdate);
  updateCurrentSection();
})();
