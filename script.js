// handle click Form 
(function() {
const headerIconSearch = document.querySelector(".header-icon-search");
const headerContainer = document.querySelector(".header-container");
const headerForm = document.querySelector(".header-form");
const headerFormClose = document.querySelector(".header-form-icons");
const headerbarsMb = document.querySelector(".header-bars-mobile");
const headerbarsTb = document.querySelector(".header-bars-table");
headerIconSearch.addEventListener("click", (e) => {
  toggleHeader([headerContainer,  headerbarsMb, headerbarsTb], "is-noneForm")
  headerForm.classList.toggle("is-showForm");
})
headerFormClose.addEventListener("click",() => {
  toggleHeader([headerbarsMb,headerContainer, headerbarsTb ], "is-noneForm")
  headerForm.classList.toggle("is-showForm");
})
function toggleHeader (eles = [], classes) {
  eles.forEach(ele => {
    ele.classList.toggle(classes);
  })
}
})();
// handle click Mobile 
(function () {
  const menuMobileIcon = document.querySelector(".header-bars-mobile");
  const menuMobile = document.querySelector(".menu-mb");
  const wrapperMobile = document.querySelector(".wrapper ");
  const headerMobile = document.querySelector(".header ");
  menuMobileIcon.addEventListener("click", (e) => {
    menuMobile.classList.toggle("is-showMenuMb");
    wrapperMobile.classList.toggle("is-showMb");
    headerMobile.classList.toggle("is-showMb");
  })
})();
// handle click Menu-tb
(function() {
const menuTableIcon = document.querySelector(".header-bars-table");
const menuTable = document.querySelector(".menu-tb");
const wrapperTable = document.querySelector(".wrapper ");
const headerTable = document.querySelector(".header ");
const optionTable = document.querySelector(".option");
const optionIconTable = document.querySelector(".option-icon");
menuTableIcon.addEventListener("click", (e) => {
  MenuTb([wrapperTable, headerTable], "is-showLeftTB")
  menuTable.classList.toggle("is-showTb");
  optionTable.classList.toggle("is-showOptionTB");
});
optionIconTable.addEventListener("click", () => {
  MenuTb([wrapperTable, headerTable], "is-showLeftTB")
  menuTable.classList.toggle("is-showTb");
  optionTable.classList.toggle("is-showOptionTB");
  optionTable.classList.toggle("option-show");
});
function MenuTb(elements = [], classTb) {
  elements.forEach(element => {
    element.classList.toggle(classTb)
  })
}
})();
// Header
(function() {
  const header = document.querySelector(".header");
  const headerImg = document.querySelector(".header-img");
  const headerLink = document.querySelectorAll(".header-item-link");
  const headerIcon = document.querySelectorAll(".header-icon");
  const headerIconBars = document.querySelector(".header-icon-bars");
  const headerIconBarsMobile = document.querySelector(".header-bars-mobile");
  const formIconClose = document.querySelector(".header-form-icons");
  const headerTbImg = document.querySelector(".header-bars-table");
  const headerMbImg = document.querySelector(".header-bars-mobile");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    if (scrollY >= 100) {
      headerLink.forEach((item) => (item.style.color = "#333"));
      headerIcon.forEach((item) => (item.style.color = "#333"));
      header.style.background = "#fff";
      header.style.boxShadow = "0 0 2px rgb(0 0 0 / 10)";
      headerIconBars.style.borderColor = "#e1e1e1";
      headerImg.setAttribute("src","http://zozothemes.com/html/epoint/demo/images/logo.png");
      headerColor([formIconClose, headerTbImg, headerMbImg], "#000")
    } else {
      headerLink.forEach((item) => (item.style.color = "#fff"));
      headerIcon.forEach((item) => (item.style.color = "#fff"));
      header.style.background = "transparent";
      headerIconBars.style.borderColor = "rgba(255,255,255,.2)";
      header.style.boxShadow = "none";
      headerImg.setAttribute( "src", "http://zozothemes.com/html/epoint/demo/images/logo-light.png");
      headerColor([formIconClose, headerTbImg, headerMbImg, headerIconBarsMobile], "#fff")
    }
  });
    function headerColor(items = [], colors) {
      items.forEach(item => {
        item.style.color = (colors);
      })
    }
})();
// handle Click Dropdown Shopping
const headerIconShopping = document.querySelector(".header-icon-shopping");
const shoppingDropdown = document.querySelector(".shopping-dropdown");
headerIconShopping.addEventListener("click", (e) => {
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
(function() {
  const menu = document.querySelector(".menu");
  const wrapper = document.querySelector(".wrapper");
  const menuClose = document.querySelector(".menu-close");
  const headerIconBars = document.querySelector(".header-icon-bars");
  const header = document.querySelector(".header")
  headerIconBars.addEventListener("click", () => {
    toggleMenu([header, wrapper], "menu-left")
    menu.classList.toggle("menu-show");
  });
  menuClose.addEventListener("click", () => {
    toggleMenu([header, wrapper], "menu-left")
    menu.classList.remove("menu-show");
  });
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !e.target.matches(".header-icon-bars")) {
      menu.classList.remove("menu-show");
      header.classList.remove("menu-left");
      wrapper.classList.remove("menu-left");
    }
  });
  function toggleMenu(items = [], classTg) {
    items.forEach((item => {
      item.classList.toggle(classTg);
    }))
  }
})();
// slide banner-container
const bannerWrapper = document.querySelector(".banner-wrapper");
const bannerContainer = document.querySelector(".banner-container");
const bannerItem = document.querySelectorAll(".banner-item");
const bannerNext = document.querySelector(".banner-next");
const bannerPrev = document.querySelector(".banner-prev");
const bannerDots = document.querySelectorAll(".banner-dot-item");
  [...bannerDots].forEach((item, index) => {
    item[index];
    console.log(item);
  })
document.addEventListener("DOMContentLoaded", () => {
  banner_slide(1);
});

function banner_slide(amountSlideBanner) {
  const widthItemBanner = bannerWrapper.offsetWidth / amountSlideBanner;
  let widthAllBanner = widthItemBanner * bannerItem.length;
  bannerContainer.style.width = `${widthAllBanner}px`;
  bannerItem.forEach((item) => {
    item.style.width = `${widthItemBanner}px`;
  });
  let i = 0;
  let widthBanner = widthAllBanner - widthItemBanner * amountSlideBanner;
  // Next, Prev Btn
  bannerNext.addEventListener("click", () => {
    i += widthItemBanner;
    if (i > widthBanner) {
      i = 0;
    }
    bannerContainer.style.transform = `translateX(${-i}px)`;
    bannerDots.forEach((item, index) => {
      item[index].classList.add("active");
    })
  });
  bannerPrev.addEventListener("click", () => {
    i -= widthItemBanner;
    if (i < 0) {
      i = widthBanner;
    }
    bannerContainer.style.transform = `translateX(${-i}px)`;
  });
  // DOTS
  [...bannerDots].forEach((item) => {
    item.addEventListener("click", (e) => {
      [...bannerDots].forEach(element => {
        element.classList.remove("active");
      })
      e.target.classList.add("active"); 
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      i = 1 * index * widthItemBanner; 
      bannerContainer.style.transform = `translateX(${-1 * index * widthItemBanner}px)`;
    });
  });
}

//  Draggable
let isPressedDown = false;
let cursorXspace;

bannerWrapper.addEventListener("mousedown", (e) => {
  bannerContainer.style.transition = "none";
  isPressedDown = true;
  cursorXspace = e.offsetX - bannerContainer.offsetLeft;
  bannerWrapper.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  bannerContainer.style.transition = "all 0.5s linear";
  isPressedDown = false;
});

bannerWrapper.addEventListener("mousemove", (e) => {
  if (!isPressedDown) return;
  e.preventDefault();
  bannerContainer.style.left = `${e.offsetX - cursorXspace}px`;
  boundCards();
});

function boundCards() {
  const wrapper_rect = bannerWrapper.getBoundingClientRect();
  const container_rect = bannerContainer.getBoundingClientRect();

  if (parseInt(bannerContainer.style.left) > 0) {
    bannerContainer.style.left = 0;
  } else if (container_rect.right < wrapper_rect.right) {
    bannerContainer.style.left = `-${
      container_rect.width - wrapper_rect.width
    }px`;
  }
}

// handle scroll services
const servicesItem = document.querySelectorAll(".services-item");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY >= 850) {
    servicesItem.forEach((item) => {
      item.classList.add("services-item-animation");
    });
  }
});

// handle Click Projects
// Cách 1
const projectsWrapper = document.querySelector(".projects-wrapper");
const projectsContainer = document.querySelector(".projects-container");
const projectsItem = document.querySelectorAll(".projects-item");
const projectsNext = document.querySelector(".projects-next");
const projectsPrev = document.querySelector(".projects-prev");

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 1023) {
    make_slide(4);
  } else if (window.innerWidth >= 481) {
    make_slide(2);
  } else {
    make_slide(1);
  }
});

function make_slide(amountSlideAppear) {
  const widthItemAndMargin = projectsWrapper.offsetWidth / amountSlideAppear;
  let widthAllItem = widthItemAndMargin * projectsItem.length;
  projectsContainer.style.width = `${widthAllItem}px`;

  projectsItem.forEach((element) => {
    // element.style.marginRight = `30px`
    element.style.width = `${widthItemAndMargin}px`;
  });

  // handel slide
  let counter = 0;
  let positionX = widthAllItem - widthItemAndMargin * amountSlideAppear;
  projectsNext.addEventListener("click", () => {
    counter += widthItemAndMargin;
    if (counter > positionX) {
      counter = 0;
    }
    projectsContainer.style.transform = `translateX(${-counter}px)`;
  });

  projectsPrev.addEventListener("click", () => {
    counter -= (widthItemAndMargin);
    if (counter < 0) {
      counter = positionX;
    }
    projectsContainer.style.transform = `translateX(${-counter}px)`;
  });

  // slide auto cách 1
  setInterval(() => {
    counter += (widthItemAndMargin);
    if (counter > positionX) {
      counter = 0;
    }
    projectsContainer.style.transform = `translateX(${-counter}px)`;
  }, 5000);
}

// slide auto cách 2
// let counter = 0;
// const size = projectsItem[0].clientWidth;
// projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
// console.log(size);
// setInterval(() => {

//   projectsContainer.addEventListener('transitionend', () => {
//     if (projectsItem[counter].id === 'last-item') {
//         projectsContainer.style.transition = "none";
//         counter = projectsItem[counter].id === 'first-item';
//         projectsContainer.style.transform = 'translateX(' + (-(size+30) * counter) +'px)';
//         }})
//   if (counter >=  projectsItem.length - 5) return;
//       projectsContainer.style.transition = "all 0.4s linear"
//       counter++;
//       console.log(counter);
//       projectsContainer.style.transform = 'translateX(' + (-(size+30) * counter) +'px)';

//  }, 1000);

// Cách 2
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
const themeTitle = document.querySelector(".theme-title");
const themeBtn = document.querySelector(".theme-btn");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  if (scrollY >= 2150) {
    themeTitle.style.animation = "themeTitle 0.5s linear";
    themeBtn.style.animation = "themeButton 0.5s linear";
  }
});

// slide auto testimonials
const testimonialsWrapper = document.querySelector(".testimonials-wrapper");
const testimonialsItem = document.querySelectorAll(".testimonials-item");
const testimonialsContainer = document.querySelector(".testimonials-container");
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 1023) {
    testimonials_slide(3);
  } else if (window.innerWidth >= 481) {
    testimonials_slide(2);
  } else {
    testimonials_slide(1);
  }
});

function testimonials_slide(amountSlideTestimonials) {
  const widthItem = testimonialsWrapper.offsetWidth / amountSlideTestimonials;
  let widthAllTestimonials = widthItem * testimonialsItem.length;
  testimonialsContainer.style.width = `${widthAllTestimonials}px`;

  testimonialsItem.forEach((item) => {
    item.style.width = `${widthItem}px`;
  });

  let count = 0;
  let spacing = widthAllTestimonials - widthItem * amountSlideTestimonials;
  setInterval(() => {
    count += widthItem;
    if (count > spacing) {
      count = 0;
    }
    testimonialsContainer.style.transform = `translateX(${-count}px)`;
  }, 2000);
}

// draggble testimonials
const testimonialsLogoWrapper = document.querySelector(
  ".testimontals-logo-wrapper"
);
const testimonialsLogoContainer = document.querySelector(
  ".testimontals-logo-container"
);

let isPressedDowns = false;
let cursorXspaces;

testimonialsLogoWrapper.addEventListener("mousedown", (e) => {
  isPressedDowns = true;
  cursorXspaces = e.offsetX - testimonialsLogoContainer.offsetLeft;
  testimonialsLogoWrapper.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDowns = false;
});

testimonialsLogoWrapper.addEventListener("mousemove", (e) => {
  if (!isPressedDowns) return;
  e.preventDefault();
  testimonialsLogoContainer.style.left = `${e.offsetX - cursorXspaces}px`;
  boundCardss();
});

function boundCardss() {
  const wrapper_rectLogo = testimonialsLogoWrapper.getBoundingClientRect();
  const container_rectLogo = testimonialsLogoContainer.getBoundingClientRect();

  if (parseInt(testimonialsLogoContainer.style.left) > 0) {
    testimonialsLogoContainer.style.left = 0;
  } else if (container_rectLogo.right < wrapper_rectLogo.right) {
    testimonialsLogoContainer.style.left = `-${
      container_rectLogo.width - wrapper_rectLogo.width
    }px`;
  }
}

// handle AutoShow and draggre

const newsWrapper = document.querySelector(".news-wrapper");
const newsContainer = document.querySelector(".news-container");
const newsItem = document.querySelectorAll(".news-item");

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 1023) {
    news_slide(3);
  } else if (window.innerWidth >= 480) {
    news_slide(2);
  } else {
    news_slide(1);
  }
});

function news_slide(amountSlideNews) {
  const widthItemNews = newsWrapper.offsetWidth / amountSlideNews;
  let widthAllNews = widthItemNews * newsItem.length;
  newsContainer.style.width = `${widthAllNews}px`;
  newsItem.forEach((item) => {
    item.style.width = `${widthItemNews}px`;
  });

  let countNews = 0;
  let spacingNews = widthAllNews - widthItemNews * amountSlideNews;
  setInterval(() => {
    countNews += widthItemNews;
    if (countNews > spacingNews) {
      countNews = 0;
    }
    newsContainer.style.transform = `translateX(${-countNews}px)`;
  }, 5000);
}

// draggre
let isPressedDownNews = false;
let cursorXspaceerNews;

newsWrapper.addEventListener("mousedown", (e) => {
  newsContainer.style.transition = "none";
  isPressedDownNews = true;
  cursorXspaceerNews = e.offsetX - newsContainer.offsetLeft;
  newsWrapper.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressedDownNews = false;
  newsContainer.style.transition = "all 0.5s linear";
});

newsWrapper.addEventListener("mousemove", (e) => {
  if (!isPressedDownNews) return;
  e.preventDefault();
  newsContainer.style.left = `${e.offsetX - cursorXspaceerNews}px`;
  boundCardssnews();
});

function boundCardssnews() {
  const wrapper_rectNews = testimonialsLogoWrapper.getBoundingClientRect();
  const container_rectNews = newsContainer.getBoundingClientRect();

  if (parseInt(newsContainer.style.left) > 0) {
    newsContainer.style.left = 0;
  } else if (container_rectNews.right < wrapper_rectNews.right) {
    newsContainer.style.left = `-${
      container_rectNews.width - wrapper_rectNews.width
    }px`;
  }
}