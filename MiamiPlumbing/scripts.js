// Initialize AOS
AOS.init();

// Sticky menu background
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 150) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function() {
    $('body').scrollspy({ target: '#navbarSupportedContent' });
});

    $(document).ready(function() {
        // Initialize carousel
        var $carousel = $('.hero-slider').slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: 'linear',
          autoplay: true, // Enable autoplay
          autoplaySpeed: 3000,
          initialSlide: 0 // Set initial slide to 0 (main hero image)
        });
      
        // Show main hero image initially
        $('.hero-slider .slide').eq(0).addClass('active');
      });
      
// Initialize OSM map with Miami's coordinates
var map = L.map('osm-map').setView([25.7617, -80.1918], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

// Smooth Scroll
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });
});

// Scroll Reveal
ScrollReveal().reveal('.testimonial', { delay: 300 });
ScrollReveal().reveal('.cta-buttons', { delay: 300 });
ScrollReveal().reveal('.blog-post', { delay: 300 });
