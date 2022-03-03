gsap.to('.box', {
    scrollTrigger: '.box',
    opacity: 1,
    x: 500
});
gsap.to('#left', {
    scrollTrigger: '#left',
    x: 600,
    duration: 2
});

gsap.to('img', {
    scale: 1.5,
    duration: 1,
    scrollTrigger: {
        trigger: 'img',
        markers: true,
        scrub: true,
        start: 'bottom bottom'
    }
});

ScrollTrigger.create({
    trigger: "#left",
    start: "top center",
    end: "+=1000",
    pin: true, 
    markers:true,
    pinSpacing: false 
});