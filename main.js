$('#fullpage').fullpage({

    autoScrolling: true,
    recordHistory: true,
    behavior: 'smooth',
    fixedElements: 'header, #menu',
    menu: '#fp-nav',
    anchors : ["home","aboutMe","why","contact"],
    scrollingSpeed: 1000,

    // section
    sectionSelector: ".section",

    // animation
    afterRender : () => {

},
    afterLoad : () => {


            if ($('.section').hasClass("active")){
                gsap.from('.text .title', { duration: 1, ease:"power3.out", x:-700, z:-100,},)
                gsap.from('.decoLines span', {duration: 1,ease:"power3.out", x:-500, stagger:0.2,})
                gsap.from('.section h2', {duration: 1.2,ease:"power3.out", x:-500,})
            }
    },

});

let hash = window.location.hash;
console.log(hash);
