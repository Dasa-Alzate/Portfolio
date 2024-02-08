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