function darkModeListener() {
  document.querySelector("html").classList.toggle("dark");
}

document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);


// Modal
function toggleModal(modal_id) {
  document.getElementById(modal_id).classList.toggle("hidden");
  const sections = document.querySelectorAll("section");

  // Itera a través de todas las etiquetas <section> y aplica la clase "blur" a cada una
  sections.forEach(section => {
  section.classList.toggle("blur-md");
  });
}


// funcion scroll to top
var mybutton = document.getElementById("btn-scroll-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", scrollToTop);

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openLightbox(imageSrc) {
  document.getElementById('lightbox-image').src = imageSrc;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

document.getElementById('lightbox-image').addEventListener('click', function () {
  closeLightbox();
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeLightbox();
  }
});


// Swipper
document.querySelectorAll('.carousel').forEach(carousel => {
  new Swiper(carousel, {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });
});


// GSAP
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#about", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 50%",
      end: "top 5%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from("#work", {
    scrollTrigger: {
      trigger: "#work",
      start: "top 60%",
      end: "top 30%",
      scrub: 2,
    },
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from("#education", {
    scrollTrigger: {
      trigger: "#education",
      start: "top 40%",
      end: "top 10%",
      scrub: 2,
    },
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  const stackLogos = document.querySelectorAll('#stack div .container img');
  const startLogoAnimation = 70;
  const endLogoAnimation = 10;
  let diffLogoAnimation = startLogoAnimation - endLogoAnimation;

  stackLogos.forEach((logo, index) => {
    const xOffset = 100 * index;
    const offset = Math.ceil(70 - (diffLogoAnimation / (stackLogos.length * 1.5)) * index);
    gsap.from(logo, {
      scrollTrigger: {
        trigger: "#stack",
        start: `top ${offset}%`,
        end: `top ${offset-20}%`,
        scrub: true,
      },
      x: -100,
      rotation: 210,
      opacity: 0,
      duration: 2,
      ease: "power2.out"
    });
  });

  gsap.from("#proyectos", {
    scrollTrigger: {
      trigger: "#proyectos",
      start: "top 40%",
      end: "top 10%",
      scrub: 2,
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });
});