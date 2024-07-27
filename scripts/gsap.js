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

const sr = ScrollReveal({
    distance: "100px",
    duration: 2600,
    delay: 450,
    reset: true,
});
  const srres = ScrollReveal({
    distance: "100px",
    duration: 2600,
    delay: 450,
    reset: false,
});
  
  sr.reveal(".hero__text-main", { distance: "50px", delay: 0, origin: "top" });
  sr.reveal(".hero__text-second", { distance: "50px", delay: 200, origin: "bottom" });
  sr.reveal(".hero__button-container", { distance: "50px", delay: 400, origin: "left" });
  sr.reveal(".hero__buttons-map-button", { distance: "50px", delay: 600, origin: "right" });
  sr.reveal(".hero__p", { distance: "50px", delay: 800, origin: "bottom" });
  srres.reveal(".feature1", { delay: 100, origin: "left" });
  srres.reveal(".feature2", { delay: 200, origin: "left" });
  srres.reveal(".feature3", { delay: 300, origin: "right" });
  srres.reveal(".feature4", { delay: 400, origin: "right" });
  srres.reveal(".join-steps", { delay: 400, origin: "left" });
  srres.reveal(".download__block", { delay: 400, origin: "right" });
  sr.reveal(".vote__child", { distance: "0px", opacity: 0, origin: "bottom"});