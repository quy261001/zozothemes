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
    headerIconBars.style.borderColor = "rgba(255,255,255,.2)";
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

document.addEventListener("DOMContentLoaded", function() {
  make_slide(4)
})

function make_slide(amountSlideAppear) {
  const widthItemAndMargin = projectsContainer.offsetWidth / amountSlideAppear;
  console.log(widthItemAndMargin);
  let widthAllBox = widthItemAndMargin * projectsItem.length
  
}





// let counter = 0;
// const size = projectsItem[0].clientWidth;
// console.log(size);
// projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';


// projectsNext.addEventListener("click",  () => {
//   if (counter >=  projectsItem.length - 5) return;
//   projectsContainer.style.transition = "all 0.4s linear"
//   counter++;
//   console.log(counter);
//   projectsContainer.style.transform = 'translateX(' + (-(size+30) * counter) +'px)';
// });
// projectsPrev.addEventListener("click", () => {
//   projectsContainer.style.transition = "all 0.4s linear"
//   counter--;
//   projectsContainer.style.transform = 'translateX(' + (-(size+30) * counter) +'px)';
// });

// projectsContainer.addEventListener('transitionend', () => {
//   if (projectsItem[counter].id === 'last-item') {
//     projectsContainer.style.transition = "none";
//     counter = projectsItem[counter].id === 'first-item';
//     projectsContainer.style.transform = 'translateX(' + (-(size+30) * counter) +'px)';
//   }
//   if (projectsItem[counter].id === 'first-item') {
//     projectsContainer.style.transition = "none";
//     counter = projectsItem[4].id === 'last-item';
//     projectsContainer.style.transform = 'translateX(' + (-(size+30) * counter) +'px)';
//   }
// })


// theme show
const themeTitle = document.querySelector('.theme-title');
const themeBtn = document.querySelector('.theme-btn');
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY >= 2150) {
    themeTitle.style.animation = "themeTitle 0.5s linear"
    themeBtn.style.animation = "themeButton 0.5s linear"
  }
});