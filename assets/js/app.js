// The nav is replaced by the hamburger icon when the viewport is less or equal
// to 900px.
// When the user clicks on a navigation link, when in mobile, then the mobile
// navigation is removed and replaced with the hamburger icon.

(function() {
  const navLinks = document.querySelectorAll(".nav__list__item");

  navLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      const target = link.getAttribute("data-destination");
      const targetDestination = document.getElementById(target);
      const scrollTop = targetDestination.getBoundingClientRect().top;

      window.scrollBy({
        top: scrollTop,
        behavior: "smooth"
      });
    });
  });

  // remove mobile nav after user has clicked on link.
  if (window.innerWidth <= 900) {
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        const checkbox = document.getElementById("checkbox");

        checkbox.checked = false;
      });
    });
  }
})();
