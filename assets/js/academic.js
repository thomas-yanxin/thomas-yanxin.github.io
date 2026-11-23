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
    var xyPointEl = harmonic.querySelector('[data-xy-point]');
    var xyProjXEl = harmonic.querySelector('[data-xy-proj-x]');
    var xyProjYEl = harmonic.querySelector('[data-xy-proj-y]');
    var xyQuadEl = harmonic.querySelector('[data-xy-quadrant]');
    var xyVxEl = harmonic.querySelector('[data-xy-vx]');
    var xyVyEl = harmonic.querySelector('[data-xy-vy]');
    var xyBarXEl = harmonic.querySelector('[data-xy-bar-x]');
    var xyBarYEl = harmonic.querySelector('[data-xy-bar-y]');
    var xyBusEl = harmonic.querySelector('[data-xy-bus]');
    var xyBusMidEl = harmonic.querySelector('[data-xy-bus-mid]');
    if (
      xyPointEl && xyProjXEl && xyProjYEl && xyQuadEl &&
      xyVxEl && xyVyEl && xyBarXEl && xyBarYEl && xyBusEl && xyBusMidEl
    ) {
      var harmonicInView = hasIntersectionObserver ? isInViewport(harmonic) : true;
      var harmonicFrame = 0;
      var harmonicElapsed = 0;
      var harmonicLastTick;
      var xyBeats = [
        { x0: 0.5, y0: -0.5, x1: -0.5, y1: 0.5, move: 1.80, hold: 0.55 },
        { x0: -0.5, y0: 0.5, x1: 0.5, y1: 0.5, move: 1.40, hold: 0.50 },
        { x0: 0.5, y0: 0.5, x1: -0.5, y1: -0.5, move: 1.80, hold: 0.55 },
        { x0: -0.5, y0: -0.5, x1: 0.0, y1: 0.0, move: 1.05, hold: 0.45 },
        { x0: 0.0, y0: 0.0, x1: 0.0, y1: 1.0, move: 1.40, hold: 0.55 },
        { x0: 0.0, y0: 1.0, x1: 1.0, y1: 0.0, move: 1.80, hold: 0.50 },
        { x0: 1.0, y0: 0.0, x1: 0.5, y1: -0.5, move: 1.05, hold: 0.55 }
      ];
      var xyCycle = xyBeats.reduce(function (sum, b) {
        return sum + b.move + b.hold;
      }, 0);

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      }

      function applyXY(ux, uy) {
        var px = 824 + 96 * ux;
        var py = 136 + 96 * uy;
        var bx = 508 + 96 * ux;
        var by = 508 + 96 * uy;
        var mid = (bx + by) / 2;

        xyPointEl.setAttribute('transform', 'translate(' + px.toFixed(3) + ' ' + py.toFixed(3) + ')');
        xyVxEl.setAttribute('transform', 'translate(' + px.toFixed(3) + ' 250)');
        xyVyEl.setAttribute('transform', 'translate(938 ' + py.toFixed(3) + ')');

        var projX = '';
        if (py - 7 > 40) projX += 'M' + px.toFixed(3) + ' 40V' + (py - 7).toFixed(3);
        if (py + 7 < 246) projX += (projX ? ' ' : '') + 'M' + px.toFixed(3) + ' ' + (py + 7).toFixed(3) + 'V246';
        xyProjXEl.setAttribute('d', projX);

        var projY = '';
        if (px - 7 > 728) projY += 'M728 ' + py.toFixed(3) + 'H' + (px - 7).toFixed(3);
        if (px + 7 < 934) projY += (projY ? ' ' : '') + 'M' + (px + 7).toFixed(3) + ' ' + py.toFixed(3) + 'H934';
        xyProjYEl.setAttribute('d', projY);

        xyQuadEl.setAttribute('x', Math.min(824, px).toFixed(3));
        xyQuadEl.setAttribute('y', Math.min(136, py).toFixed(3));
        xyQuadEl.setAttribute('width', Math.abs(px - 824).toFixed(3));
        xyQuadEl.setAttribute('height', Math.abs(py - 136).toFixed(3));

        xyBarXEl.setAttribute('transform', 'translate(' + bx.toFixed(3) + ' 28)');
        xyBarYEl.setAttribute('cx', by.toFixed(3));
        xyBusMidEl.setAttribute('cx', mid.toFixed(3));

        var busD;
        if (Math.abs(bx - by) <= 6.4) {
          busD = 'M' + bx.toFixed(3) + ' 32.5V41.8 M' + by.toFixed(3) + ' 46.2V56';
        } else if (bx < by) {
          busD = 'M' + bx.toFixed(3) + ' 32.5V44H' + (mid - 2.2).toFixed(3) +
                 ' M' + (mid + 2.2).toFixed(3) + ' 44H' + by.toFixed(3) + 'V56';
        } else {
          busD = 'M' + bx.toFixed(3) + ' 32.5V44H' + (mid + 2.2).toFixed(3) +
                 ' M' + (mid - 2.2).toFixed(3) + ' 44H' + by.toFixed(3) + 'V56';
        }
        xyBusEl.setAttribute('d', busD);
      }

      function sampleXY(elapsed) {
        var t = ((elapsed % xyCycle) + xyCycle) % xyCycle;
        for (var i = 0; i < xyBeats.length; i++) {
          var b = xyBeats[i];
          var span = b.move + b.hold;
          if (t < span) {
            var u = t < b.move ? easeInOutCubic(t / b.move) : 1;
            return [b.x0 + (b.x1 - b.x0) * u, b.y0 + (b.y1 - b.y0) * u];
          }
          t -= span;
        }
        return [0.5, -0.5];
      }

      function stepHarmonic(now) {
        if (harmonicLastTick !== undefined) {
          harmonicElapsed += Math.min((now - harmonicLastTick) / 1000, 0.1);
        }
        harmonicLastTick = now;
        var pos = sampleXY(harmonicElapsed);
        applyXY(pos[0], pos[1]);
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
          applyXY(0.5, -0.5);
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
      applyXY(0.5, -0.5);
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
