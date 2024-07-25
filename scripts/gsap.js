gsap.registerPlugin(ScrollSmoother, ScrollTrigger)


ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
});



gsap.fromTo('.Hero', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.Hero',
        start: 'center',
        end: 'bottom',
        scrub: true
    }
})