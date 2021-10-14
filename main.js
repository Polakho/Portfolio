$(document).ready(function() {
    $('#fullpage').fullpage({

        autoScrolling: true,
        recordHistory: true,
        behavior: 'smooth',
        fixedElements: 'header, #menu',
        menu: '#fp-nav',
        navigation: true,
        anchors : ["home","aboutMe","why","contact"],
        scrollingSpeed: 1000,
        sectionSelector: "section",
        fitToSectionDelay: 1000,
        afterRender:  () => {
            if($('.fp-section.active')) {
                console.log($(this).children.children.children.children(".title"))
            }
        },

        afterLoad: function(){

            /** gsap.from('.text .title', { duration: 1, ease:"power3.out", x:-700, z:-100,},)
             gsap.from('.decoLines span', {duration: 0.8,ease:"power3.out", x:-500, stagger:0.2,})
             gsap.from('.section h2', {duration: 1.4,ease:"power3.out", x:-500,})
             **/
        },

    });
});


