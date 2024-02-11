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

// Swiper

var mySwiper = new Swiper('#carousel', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
});


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