(function() {
  // get a reference to each li tag.
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

  // grab the button with the hamburger icon.
  const button = document.querySelector('.button--open');
  // grab the hamburger icon
  const icon = button.firstElementChild;
  const navList = document.querySelector('.nav__list');

  // when the user clicks on the hamburger icon
  // slide the menu from the right.
  button.addEventListener('click', function(e) {
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

  // when a user clicks on a link on mobile.
  // remove the nav and change the icon to the hamburger.
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navList.classList.remove('nav__list--mobile');
      button.classList.remove('button--close');
      button.classList.add('button--open');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
})();
