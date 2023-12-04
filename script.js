let slideIndex = 0;
const slides = document.querySelectorAll('.slide1');

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.opacity = "0";
    });

    if (slideIndex == 1) {
        slides[slideIndex].style.transform = "translate(-100%,0px)";
    }
    if (slideIndex == 2) {
        slides[slideIndex].style.transform = "translate(-200%,0px)";
    }

    slides[slideIndex].style.opacity = "1";
}

function moveSlide(n) {
    slideIndex += n;
    console.log(slideIndex);
    showSlide(slideIndex);
}

// Initial slide display
showSlide(slideIndex);


document.getElementById('nextBtn').addEventListener('click', () => {
    moveSlide(1);
});



const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));
