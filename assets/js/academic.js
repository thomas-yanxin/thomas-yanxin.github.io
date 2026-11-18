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
})();
