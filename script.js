

// let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_back = document.getElementById("mountains_back");
let mountains_front = document.getElementById("mountains_front");
let btn = document.getElementById("btn-letsgo");
// let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // stars.style.bottom = value * 0.25 + "px";
  moon.style.top = value * 0.1 + "px";
  mountains_back.style.top = value * 0.01 + "px";
  mountains_front.style.top = value * 0.2 + "px";
  btn.style.marginTop = value * 1 + "px";
  // header.style.top = value * 0.5 + "px";
});

// music
// var track = document.getElementById('track');

// var controlBtn = document.getElementById('play-pause');

// function playPause() {
//     if (track.paused) {
//         track.play();
//         //controlBtn.textContent = "Pause";
//         controlBtn.className = "pause";
//     } else { 
//         track.pause();
//          //controlBtn.textContent = "Play";
//         controlBtn.className = "play";
//     }
// }

// controlBtn.addEventListener("click", playPause);
// track.addEventListener("ended", function() {
//   controlBtn.className = "play";
// });


$(function() {

  var inWrap = $('.inner-wrapper'),
  $slide = $('.slide');


  function slideNext() {

    inWrap.animate({left: '-200%'}, 200, function() {
  
      inWrap.css('left', '-100%');
  
      $('.slide').last().after($('.slide').first());
  
    });
  
  }


   //Enabling auto scroll
   sliderInterval = setInterval(slideNext, 4000);



  $('.prev').on('click', function() {

    inWrap.animate({left: '0%'}, 200, function() {

      inWrap.css('left', '-100%');

      $('.slide').first().before($('.slide').last());

    });
  });


  $('.next').on('click', function() {

    clearInterval(sliderInterval);

    slideNext();

  });


});

