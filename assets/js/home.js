
var navbars = document.getElementById("navbars");

function showMenu(){     // showMenu
    navbars.style.right="0vw";
}
function hideMenu(){       // Hide menu
    navbars.style.right="-70vw";
}

var bar= document.getElementById("bar");
bar.addEventListener("click",showMenu);

var crosss = document.getElementById("crosss");
crosss.addEventListener("click",hideMenu);



//  home page swiper

var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  // CS-IT page swiper

  var swiper = new Swiper(".video-cs-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 11000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      380: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

 



  