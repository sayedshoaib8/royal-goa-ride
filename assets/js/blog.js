// Royal Goa Ride — Blog article behaviors (vanilla JS, no dependencies)
(function(){
  "use strict";

  /* Mobile nav toggle */
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  if(navToggle && mainNav){
    function toggleNav(force){
      var open = typeof force === 'boolean' ? force : !mainNav.classList.contains('open');
      mainNav.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      return open;
    }

    navToggle.addEventListener('click', function(){
      toggleNav();
    });

    document.addEventListener('keydown', function(event){
      if(event.key === 'Escape' && mainNav.classList.contains('open')){
        toggleNav(false);
      }
    });

    document.addEventListener('click', function(event){
      if(!mainNav.classList.contains('open')) return;
      if(!mainNav.contains(event.target) && !navToggle.contains(event.target)){
        toggleNav(false);
      }
    });
  }

  /* Reading progress bar */
  var fill = document.querySelector('.progress-bar-fill');
  var article = document.querySelector('.article-body');
  function updateProgress(){
    if(!fill || !article) return;
    var rect = article.getBoundingClientRect();
    var total = article.offsetHeight - window.innerHeight;
    var scrolled = Math.min(Math.max((-rect.top), 0), total);
    var pct = total > 0 ? (scrolled / total) * 100 : 0;
    fill.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, {passive:true});
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* TOC active-section highlighting */
  var tocLinks = document.querySelectorAll('.toc-box a, .toc-mobile a');
  var headings = document.querySelectorAll('.article-body h2[id]');
  if(headings.length && tocLinks.length){
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          tocLinks.forEach(function(l){ l.classList.remove('active'); });
          var match = document.querySelectorAll('a[href="#' + entry.target.id + '"]');
          match.forEach(function(l){ l.classList.add('active'); });
        }
      });
    }, {rootMargin: '-15% 0px -70% 0px'});
    headings.forEach(function(h){ obs.observe(h); });
  }

  /* Reveal-on-scroll animations */
  var revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length){
    var revealObs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          revealObs.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    revealEls.forEach(function(el){ revealObs.observe(el); });
  }

})();
