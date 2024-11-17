function darkModeListener() {
  document.querySelector("html").classList.toggle("dark");
}

document.querySelector("input[type='checkbox']#dark-toggle").addEventListener("click", darkModeListener);

function stringContinuity(string, length) {
  return string.length > length ? string.slice(0, length) + "..." : string
}

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

// project cards switch

function switchActive(e) {
  e.dataset.active = e.dataset.active == "false" ? "true" : "false";

  filterCards();
}

function filterCards() {
  const categoryList = document.querySelectorAll('#project-category-list li');
  const cardItems = Array.from(document.querySelectorAll('#cards-container > li'));
  
  const activeCategories = Array.from(categoryList)
    .filter(li => li.dataset.active === "true")
    .map(li => li.textContent);

  const filteredItems = cardItems.filter(cardItem => {
    const innerListItems = cardItem.querySelectorAll('div ul li');
    return Array.from(innerListItems).some(innerListItem => activeCategories.includes(innerListItem.textContent));
  });
  
  if (activeCategories.length >= 1) {
    cardItems.forEach(cardItem => {
      cardItem.classList.add("hidden");
    });
  
    filteredItems.forEach(cardItem => {
      cardItem.classList.remove("hidden");
    });

  } else {
    cardItems.forEach(cardItem => {
      cardItem.classList.remove("hidden");
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const stackLogos = document.querySelectorAll('#stack div .container img');
  const startLogoAnimation = 70;
  const endLogoAnimation = 10;
  let diffLogoAnimation = startLogoAnimation - endLogoAnimation;
  const cardsDescription = document.querySelectorAll("#cards-container li p");
  const bgLogoLayer = document.querySelector("#bg-logo-layer");
    
  // GSAP
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#about", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 50%",
      end: "top 5%",
      scrub: 2,
      toggleActions: "restart none none none",
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from("#work", {
    scrollTrigger: {
      trigger: "#work",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
      toggleActions: "restart none none none",
    },
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  gsap.from("#education", {
    scrollTrigger: {
      trigger: "#education",
      start: "top 60%",
      end: "top 30%",
      scrub: 2,
      toggleActions: "restart none none none",
    },
    x: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  stackLogos.forEach((logo, index) => {
    const xOffset = 100 * index;
    const offset = Math.ceil(70 - (diffLogoAnimation / (stackLogos.length * 1.5)) * index);
    gsap.from(logo, {
      scrollTrigger: {
        trigger: "#stack",
        start: `top ${offset}%`,
        end: `top ${offset-10}%`,
        toggleActions: "play none none none",
      },
      x: -100,
      rotation: -210,
      opacity: 0.2,
      duration: .8
    });
  });

  gsap.from("#projects", {
    scrollTrigger: {
      trigger: "#projects",
      start: "top 60%",
      end: "top 40%",
      scrub: 2,
      toggleActions: "restart none none none",
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power2.out"
  });

  // text-overflow
  cardsDescription.forEach(cardText => {
    cardText.innerHTML = stringContinuity(cardText.innerHTML, 130);
  })

  stackLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
      bgLogoLayer.src = logo.src;
      bgLogoLayer.classList.remove("opacity-0");
      bgLogoLayer.classList.add("opacity-50");
    });

    logo.addEventListener('mouseleave', () => {
      bgLogoLayer.classList.remove("opacity-50");
      bgLogoLayer.classList.add("opacity-0");
    });
  })
});

// i18next
i18next.use(i18nextHttpBackend).init({
  lng: 'es',
  fallbackLng: 'es',
  backend: {
      loadPath: 'locales/{{lng}}/translation.json'
  }
}, function(err, t) {
  if (err) return console.error('Error initializing i18next:', err);
  console.log('i18next initialized successfully with language:', i18next.language);
  updateContent();
});

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    const key = element.getAttribute('data-i18n');
    const translation = i18next.t(key);
    if (element.hasAttribute('data-i18n-title')) {
      element.setAttribute('title', translation);
    } else {
      element.innerHTML = translation;
    }
  });
}

// Language switcher
async function changeLang(e, lang) {
  var container = document.querySelector('.chooseLang').classList;
  elementClasses = e.classList;
  
  if (container.contains('open')) {
    container.remove('open');
    if (!elementClasses.contains('chosen')) {
      
      document.querySelector('.chooseLang .chosen').classList.remove('chosen');
      elementClasses.add('chosen');
      
      console.log(lang + ' chosen')
      i18next.changeLanguage(lang, function(err, t) {
          updateContent();
      });
    }
    return;
  }
  
  container.add('open');
  
}