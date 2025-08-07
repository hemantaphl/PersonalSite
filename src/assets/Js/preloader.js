window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  const pageContent = document.getElementById('page-content');
  
  // Show preloader for 4 seconds after page load, then fade out
  setTimeout(() => {
    preloader.classList.add('opacity-0');
    setTimeout(() => {
      preloader.style.display = 'none';
      // Reveal page content
      if (pageContent) {
        pageContent.classList.remove('invisible');
      }
    }, 300); //
  }, 700); //
});
