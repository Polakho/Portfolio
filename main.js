$(document).ready(function() {
    $('#fullpage').fullpage({

        autoScrolling: true,
        recordHistory: true,
        behavior: 'smooth',
        fixedElements: 'header, #menu',
        menu: '#fp-nav',
        navigation: true,
        anchors : ["home","aboutMe","why","contact"],
        scrollingSpeed: 1e3,
        sectionSelector: "section",
        fitToSectionDelay: 1000,
        easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1)',

        afterRender:  () => {
            let activeSection = $(".fp-section.active")
            if ($(activeSection)) {
               let tl = anime.timeline({
                    duration: 1000,
                    delay:100,
                    easing: 'easeInOutCubic',
                });
               tl.add({
                   targets: ".title",
                   translateX: [-700, 0]
               })
                tl.add({
                    targets: ".decoLines",
                    translateX: [-700, 0]
                },200)
                tl.add({
                    targets: ".subTitle",
                    translateX: [-700, 0]
                },400)
            }
        },

        onLeave: function() {
            let activeSection = $(".fp-section.active")
            if ($(activeSection)) {
                let tl = anime.timeline({
                    duration: 1500,
                    delay:50,
                    easing: 'easeInOutCubic',
                });
                tl.add({
                    targets: ".title",
                    translateX: [-700, 0]
                })
                tl.add({
                    targets: ".decoLines",
                    translateX: [-700, 0]
                },200)
                tl.add({
                    targets: ".subTitle",
                    translateX: [-700, 0]
                },400)
            }



            /** gsap.from('.text .title', { duration: 1, ease:"power3.out", x:-700, z:-100,},)
             gsap.from('.decoLines span', {duration: 0.8,ease:"power3.out", x:-500, stagger:0.2,})
             gsap.from('.section h2', {duration: 1.4,ease:"power3.out", x:-500,})
             **/
        },

    });
});


