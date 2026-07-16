(function () {
  'use strict';

  function init() {
    var gallery = document.querySelector('.gallery');
    if (!gallery) return;

    var overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-hidden', 'true');
    overlay.setAttribute('tabindex', '-1');
    overlay.innerHTML =
      '<img class="lightbox-img" alt="">' +
      '<p class="lightbox-caption"></p>';
    document.body.appendChild(overlay);

    var overlayImg = overlay.querySelector('.lightbox-img');
    var overlayCaption = overlay.querySelector('.lightbox-caption');
    var lastFocused = null;

    function open(img) {
      var figure = img.parentNode;
      var caption = figure ? figure.querySelector('figcaption') : null;

      overlayImg.src = img.currentSrc || img.src;
      overlayImg.alt = img.alt || '';
      overlayCaption.textContent = caption ? caption.textContent : '';

      lastFocused = document.activeElement;
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      overlay.focus();
    }

    function close() {
      if (!overlay.classList.contains('is-open')) return;
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lightbox-open');
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }

    gallery.addEventListener('click', function (event) {
      var img = event.target.closest('figure img');
      if (!img) return;
      open(img);
    });

    overlay.addEventListener('click', close);

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' || event.key === 'Esc') close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
