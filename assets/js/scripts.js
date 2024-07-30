
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Get the value of the dir=""
var textDirectionOfTheDom = document.querySelector('html').getAttribute('dir');



/*  
  -------------------------------------------
  -----      JS for loader-wrapper      -----
  -------------------------------------------
*/

window.addEventListener("load", function(event){
    var loaderWrapper = document.querySelector('.loader-wrapper');
    if (loaderWrapper) {
        loaderWrapper.style.display = "none";
    } 

    // initialize the AOS
    if (typeof AOS === 'object') {
        AOS.init({
            offset: 0,
            once: true,
        });
    }
})



/*  
  ---------------------------------------------------------------------
  -----      JS to update all the current year automatically      -----
  ---------------------------------------------------------------------
*/

var currentYear = new Date().getFullYear();
var currentYearTag = document.getElementsByClassName("current-year");

if (currentYearTag.length > 0) {
    for (var i = 0; i < currentYearTag.length; i++) {
        currentYearTag[i].innerHTML = currentYear;
    }
}



/*  
  --------------------------------------------------
  -----      JS for scroll to the section      -----
  --------------------------------------------------
*/

function scrollToSection(sectionId) {
    // Hide the navigation menu
    var navCollapse = document.querySelector('.offcanvas.show');
    if (navCollapse) {
        navCollapse.classList.remove('show');
    }

    // Scroll to the target section
    var section = document.querySelector(sectionId);
    var offset = 0; // Adjust this value to account for fixed headers
    if (section) {
        var top = section.offsetTop - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }
}



/*  
  --------------------------------------------------
  -----      JS for header top navigation      -----
  --------------------------------------------------
*/

const navigation = document.querySelector('.navigation');
if (navigation) {
    
    navigation.style.transition = 'top 1s';
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollTop > 300) {
                navigation.classList.add("fixed-top", "bg-body-tertiary", "border-bottom", "border-light", "border-opacity-10");
                navigation.classList.remove("position-absolute");
                navigation.style.top = '-190px'; // Hide the navigation menu
            }
        } else {
            // Scrolling up
            if (scrollTop > 300) {
                navigation.classList.add("fixed-top", "bg-body-tertiary", "border-bottom", "border-light", "border-opacity-10");
                navigation.classList.remove("position-absolute");
                navigation.style.top = '0'; // Show the navigation menu
            } else {
                navigation.classList.remove("fixed-top", "bg-body-tertiary", "border-bottom", "border-light", "border-opacity-10");
                navigation.classList.add("position-absolute");
                navigation.style.top = ''; // Reset top style
            }
        }

        lastScrollTop = scrollTop;
    });
}




/*  
  -----------------------------------------------
  -----      JS for button back to top      -----
  -----------------------------------------------
*/

let btnBackToTop = document.querySelector(".btn-back-to-top");

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// When the user scrolls down 800px from the top of the document, show the button
function scrollbtnBackToTopFun() {
    if ( document.body.scrollTop > 800 || document.documentElement.scrollTop > 800 ) {
        btnBackToTop.style.display = "inline-flex";
    } else {
        btnBackToTop.style.display = "none";
    }
}

window.onscroll = function () {
    if (btnBackToTop) {
        scrollbtnBackToTopFun();
    }
};

// When the user clicks on the button, scroll to the top of the document
if (btnBackToTop) {
    btnBackToTop.addEventListener("click", backToTop);
}




/*  
  ----------------------------------
  -----      JS for Glide      -----
  ----------------------------------
*/ 



// Select all elements with the class 'glide'
const glideElements = document.querySelectorAll('.glide');

// Loop through each element and create a Glide instance
if (glideElements.length > 0) {
    // Create an object to store the options for each class
    const glideOptions = {
        glideHighLinear: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            focusAt: 'center',
            startAt: 4,
            perView: 6,
            breakpoints: {
                1400: { perView: 5 },
                1200: { perView: 4 },
                992: { perView: 3 },
                768: { perView: 2 },
                576: { perView: 1 }
            },
            autoplay: true,
            animationDuration: 3000,
            animationTimingFunc: 'linear'
        },

        glideLowGap: {
            direction: textDirectionOfTheDom,
            type: 'carousel',
            perView: 2.75,
            focusAt: 0,
            autoplay: 3000,
            gap: 20,
            breakpoints: {
                1400: { perView: 2.5 },
                1200: { perView: 2.1 },
                992: { perView: 1.5 },
                768: { perView: 1.25 },
                576: { perView: 1 }
            }
        },

        // Add more classes and options as needed
    };

    glideElements.forEach(element => {
        const classList = element.classList;
        const className = classList[1];
        const option = glideOptions[className];

        // Create and mount the Glide instance
        const glide = new Glide(element, option);
        glide.mount();

        let glideArrowRight = element.querySelector(".glide__arrow--right");
        let glideArrowLeft = element.querySelector(".glide__arrow--left");

        if (glideArrowRight) {
            glideArrowRight.addEventListener("click", () => {
                glide.go(">");
            });
        }

        if (glideArrowLeft) {
            glideArrowLeft.addEventListener("click", () => {
                glide.go("<");
            });
        }
    });

}



