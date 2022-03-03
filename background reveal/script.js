// gsap.to('.first', {
//     duration: 0.4,
//     x: '-100%'
// });

// gsap.to('.second', {
//     duration: 0.6,
//     x: '-100%'
// });

// gsap.to('.third', {
//     duration: 0.8,
//     x: '-100%'
// });

// gsap.from('.navbar', {
//     duration: 0.6,
//     y: -200
// });

// new hoverEffect({
//     parent: document.querySelector('.distortion'),
//     intensity: 0.2,
//     image1: 'matic.jpg',
//     image2: 'avax.png',
//     displacementImage: 'diss.png'
// });

// var element = document.querySelector('h1');

// element.addEventListener('mouseover', onMouseOver);

// function onMouseOver(event) {
//     var trg = event.target;
//     if(trg.tagName.toLowerCase() === 'span') {
//         var tl = new TimelineLite();
        
//         tl.to(trg, 1, {yPercent:-50, ease:Power2.easeInOut});
//         tl.to(trg, 1, {yPercent:0, ease:Power2.easeInOut});
//     }
// }

// const el = document.querySelector("#module");

// el.addEventListener("mousemove", (e) => {
//   el.style.backgroundPositionX = -e.offsetX + "px";
//   el.style.backgroundPositionY = -e.offsetY + "px";
// });

// (function() {

//     let magic = document.querySelector('.magic');
//     let magicWHalf = magic.offsetWidth / 2;
  
//     document.body.addEventListener('mousemove',function(e){
//       magic.style.left = e.pageX - magicWHalf+'px';
//       magic.style.top = e.pageY - magicWHalf+'px';
//     });
  
//     document.body.addEventListener('mouseout',function(e){
//       //magic.style.left = 'calc(50% - 10rem)';
//       //magic.style.top = 'calc(50% - 10rem)';
//     });
  
//   })();

$(document).ready(function() {
    var $magic = $(".magic"),
        magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function(e) {
      $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
  });