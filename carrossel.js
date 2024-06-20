document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider img");
  const slideWidth = slides[0].clientWidth; // Largura de cada slide
  let counter = 0;
  
  setInterval(() => {
      counter++;
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(${-counter * slideWidth}px)`;

      if (counter === slides.length - 1) {
          setTimeout(() => {
              slider.style.transition = "none";
              slider.style.transform = `translateX(0)`;
              counter = 0;
          }, 500); // Tempo de espera antes de reiniciar
      }
  }, 6000); // Intervalo de 3 segundos entre cada slide
});
