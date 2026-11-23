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

  function createMotionLoop(element, onPose, onReset) {
    var inView = hasIntersectionObserver ? isInViewport(element) : true;
    var frame = 0;
    var elapsed = 0;
    var lastTick;

    function step(now) {
      if (lastTick !== undefined) {
        elapsed += Math.min((now - lastTick) / 1000, 0.1);
      }
      lastTick = now;
      onPose(elapsed);
      if (inView && !document.hidden && !reducedMotion.matches) {
        frame = window.requestAnimationFrame(step);
      } else {
        frame = 0;
      }
    }

    function sync() {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      lastTick = undefined;
      if (reducedMotion.matches) {
        elapsed = 0;
        onReset();
        return;
      }
      if (inView && !document.hidden) {
        frame = window.requestAnimationFrame(step);
      }
    }

    if (hasIntersectionObserver) {
      new IntersectionObserver(function (entries) {
        inView = entries[entries.length - 1].isIntersecting;
        sync();
      }).observe(element);
    }
    document.addEventListener('visibilitychange', sync);
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', sync);
    else reducedMotion.addListener(sync);
    onReset();
    sync();
  }

  var horizon = document.querySelector('[data-home-motion="horizon"]');
  if (horizon) {
    var reteEl = horizon.querySelector('[data-horizon-rete]');
    var deferentEl = horizon.querySelector('[data-horizon-deferent]');
    var epicycleEl = horizon.querySelector('[data-horizon-epicycle]');
    if (reteEl && deferentEl && epicycleEl) {
      function applyHorizon(reteDeg, defDeg, epiDeg) {
        reteEl.setAttribute('transform', 'rotate(' + reteDeg.toFixed(3) + ' 142 142)');
        deferentEl.setAttribute('transform', 'rotate(' + defDeg.toFixed(3) + ' 142 142)');
        epicycleEl.setAttribute('transform', 'rotate(' + epiDeg.toFixed(3) + ' 224 142)');
      }
      createMotionLoop(
        horizon,
        function (elapsed) {
          applyHorizon(
            -128 - (360 / 36) * elapsed,
            -142 + (360 / 16) * elapsed,
            -38 - (360 / (16 / 3)) * elapsed
          );
        },
        function () {
          applyHorizon(-128, -142, -38);
        }
      );
    }
  }

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

  var xyRail = document.querySelector('[data-home-motion="xy-rail"]');
  if (xyRail) {
    var xyBarXEl = xyRail.querySelector('[data-xy-bar-x]');
    var xyBarYEl = xyRail.querySelector('[data-xy-bar-y]');
    var xyBusEl = xyRail.querySelector('[data-xy-bus]');
    var xyBusMidEl = xyRail.querySelector('[data-xy-bus-mid]');
    if (xyBarXEl && xyBarYEl && xyBusEl && xyBusMidEl) {
      function applyXYRail(ux, uy) {
        var bx = 188 + 96 * ux;
        var by = 188 + 96 * uy;
        var mid = (bx + by) / 2;
        xyBarXEl.setAttribute('transform', 'translate(' + bx.toFixed(3) + ' 14)');
        xyBarYEl.setAttribute('cx', by.toFixed(3));
        xyBusMidEl.setAttribute('cx', mid.toFixed(3));
        var busD;
        if (Math.abs(bx - by) <= 6.4) {
          busD = 'M' + bx.toFixed(3) + ' 18.5V27.8 M' + by.toFixed(3) + ' 32.2V42';
        } else if (bx < by) {
          busD = 'M' + bx.toFixed(3) + ' 18.5V30H' + (mid - 2.2).toFixed(3) +
                 ' M' + (mid + 2.2).toFixed(3) + ' 30H' + by.toFixed(3) + 'V42';
        } else {
          busD = 'M' + bx.toFixed(3) + ' 18.5V30H' + (mid + 2.2).toFixed(3) +
                 ' M' + (mid - 2.2).toFixed(3) + ' 30H' + by.toFixed(3) + 'V42';
        }
        xyBusEl.setAttribute('d', busD);
      }
      createMotionLoop(
        xyRail,
        function (elapsed) {
          var pos = sampleXY(elapsed);
          applyXYRail(pos[0], pos[1]);
        },
        function () {
          applyXYRail(0.5, -0.5);
        }
      );
    }
  }

  var xyMatrix = document.querySelector('[data-home-motion="xy-matrix"]');
  if (xyMatrix) {
    var xyPointEl = xyMatrix.querySelector('[data-xy-point]');
    var xyProjXEl = xyMatrix.querySelector('[data-xy-proj-x]');
    var xyProjYEl = xyMatrix.querySelector('[data-xy-proj-y]');
    var xyQuadEl = xyMatrix.querySelector('[data-xy-quadrant]');
    var xyVxEl = xyMatrix.querySelector('[data-xy-vx]');
    var xyVyEl = xyMatrix.querySelector('[data-xy-vy]');
    if (xyPointEl && xyProjXEl && xyProjYEl && xyQuadEl && xyVxEl && xyVyEl) {
      function applyXYMatrix(ux, uy) {
        var px = 124 + 96 * ux;
        var py = 124 + 96 * uy;
        xyPointEl.setAttribute('transform', 'translate(' + px.toFixed(3) + ' ' + py.toFixed(3) + ')');
        xyVxEl.setAttribute('transform', 'translate(' + px.toFixed(3) + ' 238)');
        xyVyEl.setAttribute('transform', 'translate(238 ' + py.toFixed(3) + ')');

        var projX = '';
        if (py - 7 > 28) projX += 'M' + px.toFixed(3) + ' 28V' + (py - 7).toFixed(3);
        if (py + 7 < 234) projX += (projX ? ' ' : '') + 'M' + px.toFixed(3) + ' ' + (py + 7).toFixed(3) + 'V234';
        xyProjXEl.setAttribute('d', projX);

        var projY = '';
        if (px - 7 > 28) projY += 'M28 ' + py.toFixed(3) + 'H' + (px - 7).toFixed(3);
        if (px + 7 < 234) projY += (projY ? ' ' : '') + 'M' + (px + 7).toFixed(3) + ' ' + py.toFixed(3) + 'H234';
        xyProjYEl.setAttribute('d', projY);

        xyQuadEl.setAttribute('x', Math.min(124, px).toFixed(3));
        xyQuadEl.setAttribute('y', Math.min(124, py).toFixed(3));
        xyQuadEl.setAttribute('width', Math.abs(px - 124).toFixed(3));
        xyQuadEl.setAttribute('height', Math.abs(py - 124).toFixed(3));
      }
      createMotionLoop(
        xyMatrix,
        function (elapsed) {
          var pos = sampleXY(elapsed);
          applyXYMatrix(pos[0], pos[1]);
        },
        function () {
          applyXYMatrix(0.5, -0.5);
        }
      );
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
