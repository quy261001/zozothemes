const header = document.querySelector(".header");
const headerImg = document.querySelector(".header-img");
const headerLink = document.querySelectorAll(".header-item-link");
const headerIcon = document.querySelectorAll(".header-icon");
const headerIconBars = document.querySelector(".header-icon-bars");
const headerIconBarsMobile = document.querySelector(".header-bars-mobile");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY >= 100) {
    headerLink.forEach((item) => (item.style.color = "#333"));
    headerIcon.forEach((item) => (item.style.color = "#333"));
    headerIconBarsMobile.style.color = "#000";
    header.style.background = "#fff";
    header.style.boxShadow = "0 0 2px rgb(0 0 0 / 10)";
    headerImg.setAttribute(
      "src",
      "http://zozothemes.com/html/epoint/demo/images/logo.png"
    );
    headerIconBars.style.borderColor = "#e1e1e1";
  } else {
    headerLink.forEach((item) => (item.style.color = "#fff"));
    headerIcon.forEach((item) => (item.style.color = "#fff"));
    header.style.background = "transparent";
    headerIconBars.style.borderColor = "rgba(255,255,255,.2";
    headerIconBarsMobile.style.color = "#fff";
    header.style.boxShadow = "none";
    headerImg.setAttribute(
      "src",
      "http://zozothemes.com/html/epoint/demo/images/logo-light.png"
    );
  }
});

// handle Click Dropdown Shopping

const headerIconShopping = document.querySelector(".header-icon-shopping");
const shoppingDropdown = document.querySelector(".shopping-dropdown");
headerIconShopping.addEventListener("click", (e) => {
  console.log(e.target);
  shoppingDropdown.classList.toggle("is-show");
  e.target.classList.toggle("blur");
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".header-icon-shopping")) {
    shoppingDropdown.classList.remove("is-show");
    headerIconShopping.classList.remove("blur");
  }
});

// handle Click Option
const optionIcon = document.querySelector(".option-icon");
const option = document.querySelector(".option");
optionIcon.addEventListener("click", (e) => {
  option.classList.toggle("option-show");
});

// Handle Click Menu
const menu = document.querySelector(".menu");
const wrapper = document.querySelector(".wrapper");
const menuClose = document.querySelector(".menu-close");
headerIconBars.addEventListener("click", () => {
  menu.classList.toggle("menu-show");
  header.classList.toggle("menu-left");
  wrapper.classList.toggle("menu-left");
});

menuClose.addEventListener("click", () => {
  menu.classList.remove("menu-show");
  header.classList.toggle("menu-left");
  wrapper.classList.toggle("menu-left");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !e.target.matches(".header-icon-bars")) {
    menu.classList.remove("menu-show");
    header.classList.remove("menu-left");
    wrapper.classList.remove("menu-left");
  }
});

// slide banner-container
const bannerContainer = document.querySelectorAll("banner-container");
const bannerNext = document.querySelector(".banner-next");
const bannerPrev = document.querySelector(".banner-prev");
const activeBanner = document.querySelector(".banner-active-text");
const bannerDots = document.querySelectorAll(".banner-dot-item");

// handle scroll services
const servicesItem = document.querySelectorAll(".services-item")
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY >= 850) {
    servicesItem.forEach(item => {
      item.classList.add("services-item-animation");
    })
  }
});
// handle Click Projects
const projectsContainer = document.querySelector(".projects-container");
const projectsItem = document.querySelectorAll(".projects-item");
const projectsNext = document.querySelector(".projects-next");
const projectsPrev = document.querySelector(".projects-prev");
const projectsItemWidth = projectsItem[1].offsetWidth;
const projectsLength = projectsItem.length;
console.log(projectsLength * projectsItemWidth);
console.log(projectsItemWidth)
  let positionX = 0; 
  index = 0;
projectsNext.addEventListener("click",  () => {
  handleChangeSlide(1);
});
projectsPrev.addEventListener("click", () => {
  handleChangeSlide(-1);
});

function handleChangeSlide(direction) {
  if (direction === 1) {
    index++;
    if (index > projectsLength - 3) return;
    positionX -= projectsItemWidth;
    projectsContainer.style = `transform: translateX(${positionX}px)`
    console.log(index);
  } else if (direction === -1) {
    console.log("prev");
  }
};

