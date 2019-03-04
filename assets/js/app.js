// The nav is replaced by the hamburger icon when the viewport is less or equal
// to 900px.
// When the user clicks on a navigation link, when in mobile, then the mobile
// navigation is removed and replaced with the hamburger icon.

(function() {
  if (window.innerWidth <= 900) {
    const navLinks = document.querySelector(".nav__list");
    const links = Array.from(navLinks.children);

    links.forEach(function(link) {
      link.addEventListener("click", function() {
        const checkbox = document.getElementById("checkbox");

        checkbox.checked = false;
      });
    });
  }
})();
