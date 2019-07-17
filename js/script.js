

//////////////////////////////////////////////
// HAMBURGER MENU
//////////////////////////////////////////////
var menuBar = document.getElementById('menuBar');
var mainNav = document.getElementById('mainNav');

menuBar.addEventListener('click', function () {
    mainNav.classList.toggle('active');
    console.log('working');
});

// smooth scroll function
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
          $('html, body').animate({
          scrollTop: target.offset().top - 0 + 'px'
          }, 1000);
          return false;
      }
      }
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
       $(".fa fa-navicon").click(function(){
           $("navi_wrap").slideToggle();
       });
   });
