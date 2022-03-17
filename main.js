const backToTop = document.querySelector(".backToTop");
const menuButton = document.querySelector(".mobileMenu");
let nav = document.querySelector("nav");
let stickyHead = document.querySelector(".main__nav");
const navLinks = document.querySelectorAll(".nav__links li");

window.onscroll = function () {
  scrollBehaviour();
};

function scrollBehaviour() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    stickyHead.classList.add("nav__scroll");
    backToTop.classList.add("backToTopAdd");
  } else {
    stickyHead.classList.remove("mnav__scroll");
    backToTop.classList.remove("backToTopAdd");
  }
}

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

menuButton.addEventListener("click", () => {
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
});

const displayMenu = () => {
  if (nav.classList.contains("responsive")) nav.classList.remove("responsive");
  else nav.classList.add("responsive");
};

navLinks.forEach((link) => link.addEventListener("click", displayMenu));
