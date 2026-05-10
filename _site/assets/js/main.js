(function() {
  'use strict';

  var menuBtn = document.querySelector('.menu-btn');
  var header = document.getElementById('header');

  if (menuBtn && header) {
    menuBtn.addEventListener('click', function() {
      var isOpen = header.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && header.classList.contains('menu-open')) {
        header.classList.remove('menu-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Lazy load images with background-image
  if ('IntersectionObserver' in window) {
    var lazyImages = document.querySelectorAll('.post-image[data-bg]');
    var imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var img = entry.target;
          img.style.backgroundImage = 'url(' + img.dataset.bg + ')';
          imageObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(function(img) { imageObserver.observe(img); });
  }

  // Copy button for code blocks
  document.addEventListener('DOMContentLoaded', function() {
    var codeBlocks = document.querySelectorAll('pre[class*="language-"]');
    codeBlocks.forEach(function(block) {
      var btn = document.createElement('button');
      btn.className = 'code-copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', '코드 복사');
      btn.addEventListener('click', function() {
        var code = block.querySelector('code');
        if (code) {
          navigator.clipboard.writeText(code.textContent).then(function() {
            btn.textContent = 'Copied!';
            setTimeout(function() { btn.textContent = 'Copy'; }, 2000);
          });
        }
      });
      block.style.position = 'relative';
      block.appendChild(btn);
    });
  });
})();
