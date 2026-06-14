{
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");
  const menuIcon = document.getElementById("menu-icon");
  const header = document.getElementById("main-header");
  let isMenuOpen = false;

  if (menuButton && menu) {
    menuButton.addEventListener("click", (e) => {
      e.stopPropagation();
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        menu.classList.remove("scale-95", "opacity-0", "pointer-events-none");
        menu.classList.add("scale-100", "opacity-100", "pointer-events-auto");
        if (menuIcon) {
          menuIcon.innerHTML =
            '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
        }
      } else {
        menu.classList.add("scale-95", "opacity-0", "pointer-events-none");
        menu.classList.remove(
          "scale-100",
          "opacity-100",
          "pointer-events-auto",
        );
        if (menuIcon) {
          menuIcon.innerHTML =
            '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      }
    });

    document.addEventListener("click", (event) => {
      if (
        isMenuOpen &&
        menu &&
        !menu.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        isMenuOpen = false;
        menu.classList.add("scale-95", "opacity-0", "pointer-events-none");
        menu.classList.remove(
          "scale-100",
          "opacity-100",
          "pointer-events-auto",
        );
        if (menuIcon) {
          menuIcon.innerHTML =
            '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
        }
      }
    });

    menu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }

  window.addEventListener("scroll", () => {
    if (!header) return;
    const nav = header.querySelector("nav");
    if (!nav) return;

    if (window.scrollY > 50) {
      header.classList.add("pt-2");
      nav.classList.add("py-2", "shadow-lg", "bg-white/80");
    } else {
      header.classList.remove("pt-2");
      nav.classList.remove("py-2", "shadow-lg", "bg-white/80");
    }
  });

  const scrollLinks =
    document.querySelectorAll<HTMLAnchorElement>(".scroll-link");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      if (!targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offset = 100;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        if (isMenuOpen && menu && menuButton) {
          isMenuOpen = false;
          menu.classList.add("scale-95", "opacity-0", "pointer-events-none");
          menu.classList.remove(
            "scale-100",
            "opacity-100",
            "pointer-events-auto",
          );
          if (menuIcon) {
            menuIcon.innerHTML =
              '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>';
          }
        }
      }
    });
  });
}
