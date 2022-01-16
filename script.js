/**For Responsive Navbar Menu**/

var navList =  document.getElementById("nav-lists");
function Show() {
    navList.classList.add("Menus-show");
}
    
function Hide(){
    navList.classList.remove("Menus-show");
}

/**Forswiper.js**/
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: -100,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
});

//Get the button:
mybutton = document.getElementById("backBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
let height = document.documentElement.scrollHeight
let pageHeight = height/4

function scrollFunction() {
  if (document.body.scrollTop >= pageHeight || document.documentElement.scrollTop >= pageHeight) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
