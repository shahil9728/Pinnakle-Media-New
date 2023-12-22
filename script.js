const ssPreloader = () => {
    document.querySelector("html").classList.add('ss-preload');

    window.addEventListener('load', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const loader = document.getElementById("loader");
        const preloader = document.getElementById("preloader");

        let contentLoaded = false;

        // Function to fade out the preloader
        const fadeOutPreloader = () => {
            fadeOut(loader, "slow", () => {
                // Will fade out the whole DIV that covers the website.
                setTimeout(() => {
                    fadeOut(preloader, "slow");
                }, 300);
            });

            preloader.style.display = 'none';
            // For hero content animations 
            document.querySelector("html").classList.remove('ss-preload');
            document.querySelector("html").classList.add('ss-loaded');
        };

        // Check if content load takes more than 5 seconds
        const timeout = setTimeout(() => {
            if (!contentLoaded) {
                fadeOutPreloader();
            }
        }, 5000);

        // Wait for all resources to finish loading
        window.addEventListener('DOMContentLoaded', () => {
            contentLoaded = true;
            clearTimeout(timeout);
            fadeOutPreloader();
        });
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
const videos = document.querySelectorAll('.videoreel');

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.style.visibility = "hidden";
        slide.style.transition = "visibility 0s 0.3s, opacity 0.3s linear";
        slide.style.opacity = "0";
    });

    if (slideIndex == 1) {
        slides[slideIndex].style.transform = "translate(-100%, 0px)";
    }
    if (slideIndex == 2) {
        slides[slideIndex].style.transform = "translate(-200%, 0px)";
    }
    if (slideIndex == 3) {
        slides[slideIndex].style.transform = "translate(-300%, 0px)";
    }

    videos.forEach(video => {
        if (!video.paused) {
            video.pause();
        }
    });

    slides[slideIndex].style.visibility = "visible";
    slides[slideIndex].style.opacity = "1";
}

function moveSlide(n) {
    slideIndex += n;
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


const slider = document.querySelector('.slider');

const slideTrack = document.querySelector('.slide-track');
const slideTrack1 = document.querySelector('.slide-track1');

slideTrack.addEventListener('mouseenter', () => {
    slideTrack.classList.add('stop-animation');
});

slideTrack.addEventListener('mouseleave', () => {
    slideTrack.classList.remove('stop-animation');
});

slideTrack1.addEventListener('mouseenter', () => {
    slideTrack1.classList.add('stop-animation');
});

slideTrack1.addEventListener('mouseleave', () => {
    slideTrack1.classList.remove('stop-animation');
});

// Function to start the animation
function startAnimation(element) {
    let startValue = 1000000;
    let endValue = parseInt(element.getAttribute("data-value").replace(/,/g, ''));
    let duration = Math.floor(5000 / (endValue - startValue));
    let intervalId;

    function updateValue() {
        startValue += 1368;
        element.textContent = startValue.toLocaleString() + '+'; ;
        if (startValue >= endValue) {
            clearInterval(intervalId);
        }
    }

    intervalId = setInterval(updateValue, duration);
}

// Intersection Observer configuration
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Change this threshold as needed
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            startAnimation(entry.target);
            observer.unobserve(entry.target); // Stop observing once the animation starts
        }
    });
}, options);

// Start observing the element
let valueDisplay = document.querySelector("#videoviews");
observer.observe(valueDisplay);









// let valueDisplays = document.querySelectorAll("#videoviews");
// let interval = 5000;

// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 4955500;
//     let endValue = parseInt(valueDisplay.getAttribute("data-value").replace(/,/g, ''));
//     let duration = Math.floor(interval / (endValue - startValue));
//     let counter = setInterval(function () {
//         startValue += 1;
//         valueDisplay.textContent = startValue.toLocaleString(); 
//         if (startValue >= endValue) { 
//             clearInterval(counter);
//         }
//     }, duration);
// });
