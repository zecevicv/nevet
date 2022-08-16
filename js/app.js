/* #Hamburger
  ======================================================= */
const header = document.querySelector('.header');
const headerBtn = document.querySelector('.header-hamburger a');
const menuClose = document.querySelector('.menu-close');

if (header) {
  headerBtn.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.toggle('show');
    body.classList.toggle('no-scroll');
  });

  menuClose.addEventListener('click', (e) => {
    e.preventDefault();

    header.classList.remove('show');
    body.classList.remove('no-scroll');
  });
}


/* #Header
  ======================================================= */

// Color Change
if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

/* #Partners Slider
  ======================================================= */
if (document.querySelector('.partners .swiper')) {
  var swiper = new Swiper(".partners .swiper", {
    grid: {
      rows: 2,
      fill: 'row'
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      }
    },
    navigation: {
      nextEl: ".partners .next",
      prevEl: ".partners .prev",
    },
  });
}

/* #Reviews Slider
  ======================================================= */
if (document.querySelector('.reviews .swiper')) {
  var swiper = new Swiper(".reviews .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".reviews .next",
      prevEl: ".reviews .prev",
    },
    loop: true,
    autoplay: {
      delay: 5000,
    },
  });
}

/* #Steps Slider
  ======================================================= */
if (document.querySelector('.steps .swiper')) {
  var swiper = new Swiper(".steps .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.15,
      },
      1024: {
        slidesPerView: 2.34,
      }
    },
    navigation: {
      nextEl: ".steps .next",
      prevEl: ".steps .prev",
    },
  });
}

/* #Collaboration Slider
  ======================================================= */
if (document.querySelector('.collaboration .swiper')) {
  var swiper = new Swiper(".collaboration .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.15,
      },
      1024: {
        slidesPerView: 1.55,
      }
    },
    navigation: {
      nextEl: ".collaboration .next",
      prevEl: ".collaboration .prev",
    },
  });
}

/* #Numbers Animation
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);

const numbers = document.querySelectorAll('.numbers .num');
let numbersStatus = false;

if (numbers) {
  ScrollTrigger.create({
    trigger: ".numbers",
    onEnter: () => {
      if (!numbersStatus) {
        numbers.forEach((number) => {
          var zero = {
            val: 0
          };
          var num = number.innerHTML;

          gsap.to(zero, {
            val: num,
            duration: 3,
            scrollTrigger: numbers,
            onUpdate: function () {
              number.innerHTML = zero.val.toFixed(0);
            }
          });
        });

        numbersStatus = true;
      }
    }
  });
}

/* #Sandiwch Animation
  ======================================================= */
const sandwichLi = document.querySelectorAll('.sandwich li');

if (sandwichLi) {
  sandwichLi.forEach(li => {
    ScrollTrigger.create({
      trigger: li,
      onEnter: () => {
        gsap.from(li, {
          opacity: 0,
          yPercent: 200,
          duration: 1,
          scrollTrigger: sandwichLi,
        });
      }
    });
  });
}

/* #Post Slider
  ======================================================= */
if (document.querySelector('.post-slider .swiper')) {
  var swiper = new Swiper(".post-slider .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.15,
      },
      1024: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: ".post-slider .next",
      prevEl: ".post-slider .prev",
    },
  });
}

/* #Post Slider
  ======================================================= */
if (document.querySelector('.stories .swiper')) {
  var swiper = new Swiper(".stories .swiper", {
    breakpoints: {
      0: {
        slidesPerView: 1.15,
      },
      1024: {
        slidesPerView: 1
      }
    },
    navigation: {
      nextEl: ".stories .next",
      prevEl: ".stories .prev",
    },
  });
}

/* #Activity Slider
  ======================================================= */
if (document.querySelector('.activity .swiper')) {
  var swiper = new Swiper(".activity .swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".activity .next",
      prevEl: ".activity .prev",
    },
  });
}