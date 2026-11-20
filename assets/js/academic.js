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
    var mastheadHeight = document.querySelector('.masthead').getBoundingClientRect().height;
    var threshold = mastheadHeight + 48;
    var current = sections[0];
    sections.forEach(function (section) {
      if (section.target.getBoundingClientRect().top <= threshold) current = section;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
      var fragment = document.querySelector(':target');
      var linkedSection = fragment && fragment.closest('.home-section');
      current = sections.find(function (section) {
        if (!linkedSection || !linkedSection.contains(section.target)) return false;
        var top = section.target.getBoundingClientRect().top;
        return top >= mastheadHeight && top < window.innerHeight;
      }) || sections[sections.length - 1];
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
  window.addEventListener('hashchange', requestSectionUpdate);
  window.addEventListener('resize', requestSectionUpdate);
  window.addEventListener('load', requestSectionUpdate);
  if (sections.length && 'ResizeObserver' in window) {
    new ResizeObserver(requestSectionUpdate).observe(document.body);
  }
  updateCurrentSection();

  if ('IntersectionObserver' in window) {
    var solar = document.querySelector('.home-solar');
    if (solar) {
      var solarInView = false;
      function syncSolar() {
        solar.toggleAttribute('data-orbit-playing', solarInView && !document.hidden);
      }
      var solarObserver = new IntersectionObserver(function (entries) {
        solarInView = entries[0].isIntersecting;
        syncSolar();
      });
      solarObserver.observe(solar);
      document.addEventListener('visibilitychange', syncSolar);
    }

    var entrances = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var element = entry.target;
        element.classList.add(element.matches('h2') ? 'chapter-entered' : 'figure-entered');
        entrances.unobserve(element);
      });
    }, {rootMargin: '0px 0px -5% 0px'});
    document.querySelectorAll('.home-section > h2, .project-figure').forEach(function (element) {
      entrances.observe(element);
    });
  }
})();
