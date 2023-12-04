// var ssPreloader = function () {

//     $("html").addClass('ss-preload');

//     $WIN.on('load', function () {

//         //force page scroll position to top at page refresh
//         $('html, body').animate({ scrollTop: 0 }, 'normal');

//         // will first fade out the loading animation 
//         $("#loader").fadeOut("slow", function () {
//             // will fade out the whole DIV that covers the website.
//             $("#preloader").delay(300).fadeOut("slow");
//         });

//         // for hero content animations 
//         $("html").removeClass('ss-preload');
//         $("html").addClass('ss-loaded');

//     });
// };


const ssPreloader = () => {
    document.querySelector("html").classList.add('ss-preload');

    window.addEventListener('load', () => {
        // Force page scroll position to top at page refresh
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Will first fade out the loading animation 
        const loader = document.getElementById("loader");
        const preloader = document.getElementById("preloader");
        
        fadeOut(loader, "slow", () => {
            // Will fade out the whole DIV that covers the website.
            setTimeout(() => {
                fadeOut(preloader, "slow");
            }, 300);
        });

        // For hero content animations 
        document.querySelector("html").classList.remove('ss-preload');
        document.querySelector("html").classList.add('ss-loaded');
    });
};

// Function to fade out an element
const fadeOut = (element, duration, callback) => {
    const fadeEffect = setInterval(() => {
        if (!element.style.opacity) {
            element.style.opacity = 1;
        }
        if (element.style.opacity > 0) {
            element.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            if (callback && typeof callback === 'function') {
                callback();
            }
        }
    }, duration / 10);
};

// Call the preloader function
ssPreloader();



const video = document.querySelector('.videodiv');
const playBtn = document.querySelector('.playbtn');
const pauseBtn = document.querySelector('.pausebtn');

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'block';
    } else {
        video.pause();
        playBtn.style.display = 'block';
        pauseBtn.style.display = 'none';
    }
});

pauseBtn.addEventListener('click', () => {
    video.pause();
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
});






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
