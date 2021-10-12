$('#fullpage').fullpage({

    autoScrolling: true,
    recordHistory: true,
    behavior: 'smooth',
    fixedElements: 'header',
    menu: '#menu',
    anchors:['#home', '#aboutMe', '#why', '#contact'],
    lockAnchors: true,
    scrollingSpeed: 1000,

    // section
    sectionSelector: ".section",

    // animation
    afterLoad: (origin, destination, direction) => {
        gsap.from('.text .title', { duration: 1.2, ease:"power3.out", x:-700, z:-100,},)
        gsap.from('.decoLines span', {duration: 1, x:-500, stagger:0.2 })
        gsap.from('.stuff', {duration: 1.8, x:-500, })
    },


})


