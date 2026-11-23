(function () {
  'use strict';

  var menu = document.querySelector('.site-menu');
  if (menu) {
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
  }

  function isInViewport(el) {
    var rect = el.getBoundingClientRect();
    var height = window.innerHeight || document.documentElement.clientHeight;
    return rect.bottom > 0 && rect.top < height;
  }

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var hasIntersectionObserver = 'IntersectionObserver' in window;

  var horizon = document.querySelector('[data-home-motion="horizon"]');
  if (horizon) {
    var reteEl = horizon.querySelector('[data-horizon-rete]');
    var deferentEl = horizon.querySelector('[data-horizon-deferent]');
    var epicycleEl = horizon.querySelector('[data-horizon-epicycle]');
    var cursorEl = horizon.querySelector('[data-horizon-cursor]');
    var projEl = horizon.querySelector('[data-horizon-proj]');
    var projDotEl = horizon.querySelector('[data-horizon-proj-dot]');
    if (reteEl && deferentEl && epicycleEl && cursorEl && projEl && projDotEl) {
      var horizonInView = hasIntersectionObserver ? isInViewport(horizon) : true;
      var horizonFrame = 0;
      var horizonElapsed = 0;
      var horizonLastTick;

      function applyHorizon(reteDeg, defDeg, epiDeg) {
        reteEl.setAttribute('transform', 'rotate(' + reteDeg.toFixed(3) + ' 812 160)');
        deferentEl.setAttribute('transform', 'rotate(' + defDeg.toFixed(3) + ' 812 160)');
        epicycleEl.setAttribute('transform', 'rotate(' + epiDeg.toFixed(3) + ' 894 160)');
        var rad = (defDeg * Math.PI) / 180;
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        cursorEl.setAttribute('transform', 'translate(' + (128 * c).toFixed(3) + ' 0)');
        var px = 812 + 82 * c;
        var py = 160 + 82 * s;
        projEl.setAttribute('d', 'M' + px.toFixed(3) + ' 56V' + (py - 4).toFixed(3));
        projDotEl.setAttribute('cx', px.toFixed(3));
      }

      function stepHorizon(now) {
        if (horizonLastTick !== undefined) {
          horizonElapsed += Math.min((now - horizonLastTick) / 1000, 0.1);
        }
        horizonLastTick = now;
        applyHorizon(
          -128 - (360 / 36) * horizonElapsed,
          -142 + (360 / 16) * horizonElapsed,
          -38 - (360 / (16 / 3)) * horizonElapsed
        );
        if (horizonInView && !document.hidden && !reducedMotion.matches) {
          horizonFrame = window.requestAnimationFrame(stepHorizon);
        } else {
          horizonFrame = 0;
        }
      }

      function syncHorizon() {
        if (horizonFrame) {
          window.cancelAnimationFrame(horizonFrame);
          horizonFrame = 0;
        }
        horizonLastTick = undefined;
        if (reducedMotion.matches) {
          horizonElapsed = 0;
          applyHorizon(-128, -142, -38);
          return;
        }
        if (horizonInView && !document.hidden) {
          horizonFrame = window.requestAnimationFrame(stepHorizon);
        }
      }

      if (hasIntersectionObserver) {
        new IntersectionObserver(function (entries) {
          horizonInView = entries[entries.length - 1].isIntersecting;
          syncHorizon();
        }).observe(horizon);
      }
      document.addEventListener('visibilitychange', syncHorizon);
      if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', syncHorizon);
      else reducedMotion.addListener(syncHorizon);
      applyHorizon(-128, -142, -38);
      syncHorizon();
    }
  }

  var harmonic = document.querySelector('[data-home-motion="harmonic"]');
  if (harmonic) {
    var discEl = harmonic.querySelector('[data-harmonic-disc]');
    var contactEl = harmonic.querySelector('[data-harmonic-contact]');
    var vlineEl = harmonic.querySelector('[data-harmonic-vline]');
    var axisNodeEl = harmonic.querySelector('[data-harmonic-axis-node]');
    var orbEl = harmonic.querySelector('[data-harmonic-orb]');
    if (discEl && contactEl && vlineEl && axisNodeEl && orbEl) {
      var harmonicInView = hasIntersectionObserver ? isInViewport(harmonic) : true;
      var harmonicFrame = 0;
      var harmonicElapsed = 0;
      var harmonicLastTick;

      function applyHarmonic(deg) {
        var rad = (deg * Math.PI) / 180;
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var dx = 46 * c;
        var dy = 46 * s;
        discEl.setAttribute(
          'transform',
          'translate(' + dx.toFixed(3) + ' ' + dy.toFixed(3) + ') rotate(' + (-deg).toFixed(3) + ' 824 140)'
        );
        contactEl.setAttribute('transform', 'rotate(' + deg.toFixed(3) + ' 824 140)');
        var lx = 524 + 148 * c;
        var ly = 42 + 22 * Math.sin(2 * rad);
        vlineEl.setAttribute('d', 'M' + lx.toFixed(3) + ' 14V70');
        axisNodeEl.setAttribute('transform', 'translate(' + (148 * c).toFixed(3) + ' 0)');
        orbEl.setAttribute('cx', lx.toFixed(3));
        orbEl.setAttribute('cy', ly.toFixed(3));
      }

      function stepHarmonic(now) {
        if (harmonicLastTick !== undefined) {
          harmonicElapsed += Math.min((now - harmonicLastTick) / 1000, 0.1);
        }
        harmonicLastTick = now;
        applyHarmonic(-124 - (360 / 12) * harmonicElapsed);
        if (harmonicInView && !document.hidden && !reducedMotion.matches) {
          harmonicFrame = window.requestAnimationFrame(stepHarmonic);
        } else {
          harmonicFrame = 0;
        }
      }

      function syncHarmonic() {
        if (harmonicFrame) {
          window.cancelAnimationFrame(harmonicFrame);
          harmonicFrame = 0;
        }
        harmonicLastTick = undefined;
        if (reducedMotion.matches) {
          harmonicElapsed = 0;
          applyHarmonic(-124);
          return;
        }
        if (harmonicInView && !document.hidden) {
          harmonicFrame = window.requestAnimationFrame(stepHarmonic);
        }
      }

      if (hasIntersectionObserver) {
        new IntersectionObserver(function (entries) {
          harmonicInView = entries[entries.length - 1].isIntersecting;
          syncHarmonic();
        }).observe(harmonic);
      }
      document.addEventListener('visibilitychange', syncHarmonic);
      if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', syncHarmonic);
      else reducedMotion.addListener(syncHarmonic);
      applyHarmonic(-124);
      syncHarmonic();
    }
  }

  if (hasIntersectionObserver) {
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
