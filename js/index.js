const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const mobileNav = document.querySelector(".mobile-nav");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
const slidesWrapper = document.querySelector(".slides-wrapper");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");

//mobile nav open
openBtn.onclick = () => {
  mobileNav.classList.toggle("close-mobile-nav");
  mobileNav.classList.toggle("open-mobile-nav");
};

//mobile nav close
closeBtn.onclick = () => {
  mobileNav.classList.toggle("close-mobile-nav");
  mobileNav.classList.toggle("open-mobile-nav");
};

const data = [
  {
    title: "Discover innovative ways to decorate",
    desc: " We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe",
    desc: "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Manufactured with the best materials",
    desc: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

//slider js functionality
let currentSlide = 0; //(0,1,2)

function goToSlide() {
  slidesWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  title.innerHTML = data[currentSlide].title;
  desc.innerHTML = data[currentSlide].desc;
}

leftBtn.onclick = () => {
  if (currentSlide <= 0) {
    currentSlide = 2;
    goToSlide();
  } else {
    currentSlide -= 1;
    goToSlide(currentSlide);
  }
};

rightBtn.onclick = () => {
  if (currentSlide >= 2) {
    currentSlide = 0;
    goToSlide();
  } else {
    currentSlide += 1;
    goToSlide(currentSlide);
  }
};
