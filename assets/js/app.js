(function() {
  init();
  // check when the viewport window is at least 950px wide.
  window.addEventListener('resize', function(e) {
    if (e.target.innerWidth <= 955) {
      init();
    }
  });

  // The nav is replaced by the hamburger icon when the viewport is less or equal
  // to 950px.
  // When the user clicks on a navigation link, when in mobile, then the mobile
  // navigation is removed and replaced with the hamburger icon.
  function init() {
    // get a reference to the li's that contains the necessary
    // data atribute.
    const navLinks = document.querySelectorAll('.nav__item');

    // when the user clicks on a link
    // create a smooth effect that takes the user to the appropriate location.
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // grab the value of data-description attribute
        const target = link.getAttribute('data-destination');
        // find the DOM element.
        const targetDestination = document.getElementById(target);
        // get the pixels of the top of the target element.
        const scrollTop = targetDestination.getBoundingClientRect().top;

        // scroll to the target element.
        window.scrollBy({
          top: scrollTop,
          behavior: 'smooth',
        });
      });
    });

    // remove mobile nav after user has clicked on link.
    if (window.innerWidth <= 955) {
      // grab the button with the hamburger icon.
      const button = document.querySelector('.button--open');
      // grab the hamburger icon
      const icon = button.firstElementChild;
      const navList = document.querySelector('.nav__list');

      // when the user clicks on the hamburger icon
      // slide the menu from the right.
      button.addEventListener('click', function() {
        // if hamburger icon is present.
        if (this.classList.contains('button--open')) {
          button.classList.remove('button--open');
          button.classList.add('button--close');

          // remove the hamburger icon class
          icon.classList.remove('fa-bars');
          // add the x icon class
          icon.classList.add('fa-times');

          navList.classList.add('nav__list--mobile');
        } else {
          button.classList.remove('button--close');
          button.classList.add('button--open');

          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');

          navList.classList.remove('nav__list--mobile');
        }
      });

      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navList.classList.remove('nav__list--mobile');
          button.classList.remove('button--close');
          button.classList.add('button--open');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        });
      });
    }
  }
})();
