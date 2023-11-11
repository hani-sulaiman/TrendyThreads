const slider = {
  img: document.querySelector(".slider img"),
  title: document.querySelector(".slider .title"),
  subtitle: document.querySelector(".slider .subtitle"),
  btnAd: document.querySelector(".slider .ad-btn"),
};
const buttons = {
  menuSideOpen: document.querySelector(".menu-icon"),
  menuSideClose: document.querySelector(".menu-icon-close"),
};
const components = {
  sidebarMobile: document.querySelector(".sidebar-menu"),
  main: document.querySelector("main"),
};
const effects = {
  overlay: document.querySelector(".overlay"),
};
setTimeout(() => {
  slider.img.classList.remove("hide");
  setTimeout(() => {
    slider.title.classList.remove("hide");
    setTimeout(() => {
      slider.subtitle.classList.remove("hide");
      slider.btnAd.classList.remove("hide");
    }, 400);
  }, 600);
}, 2000);

buttons.menuSideOpen.addEventListener("click", () => {
  components.sidebarMobile.classList.remove("hide");
  components.sidebarMobile.classList.add("slidein");
  if (effects.overlay.classList.contains("hide")) {
    effects.overlay.classList.remove("hide");
  }
  effects.overlay.classList.add("show");
  setTimeout(() => {
    components.sidebarMobile.classList.remove("slidein");
  }, 300);
});

buttons.menuSideClose.addEventListener("click", () => {
  components.sidebarMobile.classList.add("slideout");
  effects.overlay.classList.remove("show");
  effects.overlay.classList.add("hide");
  setTimeout(() => {
    components.sidebarMobile.classList.remove("slideout");
    components.sidebarMobile.classList.add("hide");
  }, 300);
});

effects.overlay.addEventListener("click", () => {
  components.sidebarMobile.classList.add("slideout");
  effects.overlay.classList.remove("show");
  setTimeout(() => {
    components.sidebarMobile.classList.remove("slideout");
    components.sidebarMobile.classList.add("hide");
  }, 300);
});
