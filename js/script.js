

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


// go to top button


var goToTop = document.getElementById('goToTop');

    document.addEventListener('scroll' , function() {
      if(scrollY > 200) {
        goToTop.classList.add('active');
      } else {
        goToTop.classList.remove('active');
      }
    })
