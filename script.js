 const nav = document.getElementById("navbar");
    const navLinks = document.getElementById("navLinks");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });

    function toggleMenu() {
      navLinks.classList.toggle("active");
    }
