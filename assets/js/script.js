document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '1' && key <= '9') {
      const sections = document.querySelectorAll('section');
      const index = parseInt(key) - 1;
      const sectionToScroll = sections[index];
      if (sectionToScroll) {
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    if (sections.length > 0) {
      sections[0].scrollIntoView({ behavior: 'smooth' });
    }
  });

  window.addEventListener('scroll', e => {
    var el = document.getElementById('jsScroll');
    if(window.scrollY > 200) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  