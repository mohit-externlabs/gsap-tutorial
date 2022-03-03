var tl = gsap.timeline({
    defaults: {duration: 1}
});

var rule = CSSRulePlugin.getRule('span::after');

tl.from('.anim1', {
    y: -50,
    opacity: 0,
    stagger: 0.30
}).to(
    rule,
    {cssRule: {scaleY: 0}, duration: 1},
    '-=0.75'
).from('#img1', {
   x: 50,
   opacity: 0
}, '-=.75').from('#img2', {
    y: 50,
    opacity: 0
}, '-=.5');

document.getElementById('button').addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();
});