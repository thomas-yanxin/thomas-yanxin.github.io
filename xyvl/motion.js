(() => {
  const diagram = document.querySelector('#xyvl-drawing');
  const playback = document.querySelector('#xyvl-playback');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const english = new URLSearchParams(location.search).get('lang') === 'en';
  const embedded = new URLSearchParams(location.search).has('embed');
  const labels = english
    ? { pause: 'Pause animation', resume: 'Resume animation', replay: 'Replay animation' }
    : { pause: '暂停动画', resume: '继续播放', replay: '重播动画' };
  const find = id => diagram.querySelector(`#${id}`);
  const duration = 15.2;
  const blue = '#0237bd';

  const signals = document.createElementNS(diagram.namespaceURI, 'g');
  signals.setAttribute('id', 'xyvl-signals');
  signals.setAttribute('aria-hidden', 'true');
  signals.setAttribute('stroke', blue);
  signals.setAttribute('stroke-opacity', '1');
  diagram.append(signals);

  const transfers = [
    ['intake-left', .32, 1.88],
    ['intake-right', .48, 1.88],
    ['intake-middle', 1.48, 1.88],
    ['aggregate', 1.88, 2.35],
    ['normalize', 2.89, 3.39],
    ['tag', 3.77, 4.97],
    ['judge', 5.47, 6.29],
    ['curate', 6.96, 8.14],
    ['distribute', 8.57, 9.02],
    ['split-sft', 9.02, 10.15],
    ['split-opd', 9.02, 10.04],
    ['split-rl', 9.02, 10.15],
    ['train-sft', 10.41, 10.94],
    ['train-opd', 11.34, 12.09],
    ['teacher-travel', 11.59, 12.09],
    ['train-rl', 12.55, 13.29],
    ['reward-travel', 12.79, 13.29],
    ['release', 13.76, 14.30],
  ].map(([id, start, end]) => {
    const source = find(id);
    const signal = document.createElementNS(diagram.namespaceURI, 'path');
    signal.setAttribute('d', source.getAttribute('d'));
    signals.append(signal);
    const length = source.getTotalLength();
    return { signal, start, end, length, tail: Math.min(18, length * .65) };
  });

  const shades = new Map(Array.from(diagram.querySelectorAll('[data-settle-for]'), element => [
    element.dataset.settleFor,
    {
      element,
      restingOpacity: Number(element.getAttribute('opacity')),
      peakOpacity: Number(element.dataset.peakOpacity),
      travel: Number(element.dataset.shadowTravel || 0),
    },
  ]));

  const highlights = [
    ['hugging-face', .05, .51],
    ['modelscope', .18, .64],
    ['github', 1.21, 1.69],
    ['meta', 2.26, 3.05],
    ['schema', 3.30, 3.94],
    ['tagger', 4.89, 5.66],
    ['evaluator', 6.20, 7.14],
    ['curated', 8.05, 8.78],
    ['split-hub', 8.94, 9.32],
    ['opd-input', 9.96, 10.34],
    ['sft-input', 10.07, 10.45],
    ['rl-input', 10.07, 10.45],
    ['qwen', 10.16, 10.58],
    ['sft', 10.85, 11.53],
    ['teacher', 11.32, 11.76],
    ['teacher-input', 12.01, 12.39],
    ['opd', 12.00, 12.74],
    ['rewards', 12.52, 12.96],
    ['reward-input', 13.21, 13.59],
    ['rl', 13.20, 13.95],
    ['xyvl', 14.21, 15.1],
  ].map(([id, start, end]) => ({ node: find(id), shade: shades.get(id), start, end }));

  function draw(time) {
    for (const { signal, start, end, length, tail } of transfers) {
      const active = time > start && time < end;
      signal.style.display = active ? '' : 'none';
      if (!active) continue;

      const head = (length + tail) * (time - start) / (end - start);
      const offset = Math.max(0, head - tail);
      const span = Math.min(length, head) - offset;
      signal.setAttribute('stroke-dasharray', `0 ${offset} ${span} ${length}`);
    }

    for (const { node, shade, start, end } of highlights) {
      const strength = time > start && time < end
        ? Math.sin(Math.PI * (time - start) / (end - start))
        : 0;
      node.style.stroke = strength ? `color-mix(in srgb, ${blue} ${strength * 100}%, currentColor)` : '';
      if (!shade) continue;

      const { element, restingOpacity, peakOpacity, travel } = shade;
      element.style.opacity = strength ? restingOpacity + (peakOpacity - restingOpacity) * strength : '';
      if (travel) {
        const offset = travel * strength;
        element.style.transform = offset ? `translate(${offset}px, ${offset}px)` : '';
      }
    }
  }

  let elapsed = 0;
  let lastTick;
  let frame;
  let playing = false;

  function updateButton() {
    playback.hidden = preference.matches;
    playback.setAttribute('aria-label', labels[playing ? 'pause' : elapsed >= duration ? 'replay' : 'resume']);
  }

  function stop() {
    cancelAnimationFrame(frame);
    lastTick = undefined;
    playing = false;
    updateButton();
  }

  function tick(now) {
    if (lastTick !== undefined) elapsed = Math.min(duration, elapsed + (now - lastTick) / 1000);
    lastTick = now;
    draw(elapsed);
    if (elapsed < duration) frame = requestAnimationFrame(tick);
    else if (embedded) {
      elapsed = 0;
      lastTick = undefined;
      frame = requestAnimationFrame(tick);
    } else stop();
  }

  function play() {
    if (elapsed >= duration) elapsed = 0;
    playing = true;
    updateButton();
    frame = requestAnimationFrame(tick);
  }

  function syncPreference() {
    stop();
    elapsed = preference.matches ? duration : 0;
    draw(elapsed);
    if (!preference.matches) play();
  }

  playback.addEventListener('click', () => playing ? stop() : play());
  preference.addEventListener('change', syncPreference);
  document.addEventListener('visibilitychange', () => { lastTick = undefined; });
  syncPreference();
})();
