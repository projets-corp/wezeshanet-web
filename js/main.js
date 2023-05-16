$(document).ready(function(){

    "use strict";

    // Show Navbar background on scroll
    $(window).scroll(function(){
        
      var top = $(window).scrollTop();
      if(top>=100){
        $('.navbar').css('background','linear-gradient(135deg, rgba(59, 36, 114, 1) 0%, rgba(113, 64, 145, 1) 100%)'); 
      }
      
      else 
          if($('.navbar').css('background','linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)')){

              $('.navbar').css('background','linear-gradient(135deg, rgba(44, 51, 56, 0) 0%, rgba(44, 51, 56, 0) 100%)'); 
          }
   });


    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll The optional number
          // (800) specifies the number of milliseconds it takes to scroll to the
          // specified area
          $('html, body').animate({
              scrollTop: $(hash)
                  .offset()
                  .top
          }, 800, function () {

              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
          });
      } // End if
  });

    // Testimonial Slick Slider
    $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,    
      prevArrow: false,
      nextArrow: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('.slick-slider-clients').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: false,
      nextArrow: false,
      autoplaySpeed: 2000,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
  });

  //Counter Up
  $('.counter').counterUp({delay: 10, time: 3000});

  //Wow JS
  new WOW().init({
    mobile: true,
    });

    // Animate loader off screen
    $('.se-pre-con').fadeOut('slow');

    //Image Light Box Popup
    $('.image-link').magnificPopup({type: 'image'});
    $('.video-link').magnificPopup({type: 'iframe'});
    
  });

let requestForm = document.getElementById('requestForm');
requestForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById('first_name').value + ' ' + document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let country = document.getElementById('country').value;
    let city = document.getElementById('city').value;
    let comment = document.getElementById('comment').value;

    let body = {
        name: name,
        email: email,
        country: country,
        city: city,
        comments: comment
    }

    $.post("http://wezeshanet.test/api/v1/request_demo", body)
    alert("Demo request submitted successfully.")
    window.location.reload();
})