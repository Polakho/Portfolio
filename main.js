$(document).ready(function() {
    $('#fullpage').fullpage({

        autoScrolling: true,
        recordHistory: true,
        behavior: 'smooth',
        fixedElements: 'header, #menu',
        menu: '#fp-nav',
        navigation: !0,
        anchors : ["home","aboutMe","why","contact"],
        scrollingSpeed: 1000,
        sectionSelector: "section",
        fitToSectionDelay: 1000,
        easingcss3: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        animateAnchor: !1,

        afterRender:  () => {
            let activeSection = $(".fp-section.active")
            if ($(activeSection)) {
               let tl = anime.timeline({
                    duration: 1000,
                    easing: 'easeInOutCubic',
                });
                tl.add({
                    targets : ".loader",
                    translateY : -1000,
                })
               tl.add({
                   targets: ".title",
                   translateX: [-700, 0]
               },100)
                tl.add({
                    targets: ".decoLines",
                    translateX: [-700, 0]
                },200)
                tl.add({
                    targets:".secondSpan",
                    translateX: [-700, 0]
                },300)
                tl.add({
                    targets: ".subTitle",
                    translateX: [-700, 0]
                },400)
                tl.add({
                    targets: "#image",
                    translateX: [100, 0],
                    scale: [0,1],
                },400)
            }
        },

        onLeave: function() {
            let activeSection = $(".fp-section.active")
            if ($(activeSection)) {
                /** Animation on text **/
                let tl = anime.timeline({
                    duration: 1000,
                    easing: 'easeInOutCubic',
                });
                tl.add({
                    targets: ".title",
                    translateX: [-1000, 0]
                },100)
                tl.add({
                    targets: ".decoLines",
                    translateX: [-700, 0]
                },200)
                tl.add({
                    targets:".secondSpan",
                    translateX: [-700, 0]
                },300)
                tl.add({
                    targets: ".subTitle",
                    translateX: [-700, 0]
                },400)
                /** Animation on right of page **/
                tl.add({
                    targets : ".aboutAlex",
                    translateX: [100, 0],
                    translateY: [-100,0],
                    scale: [0.6,1],
                    opacity : [0.6,1],
                },400)
                tl.add({
                    targets: ".stuff",
                    translateX: [700, 0],
                    scale: [0,1],
                },400)
            }
            /** gsap.from('.text .title', { duration: 1, ease:"power3.out", x:-700, z:-100,},)
             gsap.from('.decoLines span', {duration: 0.8,ease:"power3.out", x:-500, stagger:0.2,})
             gsap.from('.section h2', {duration: 1.4,ease:"power3.out", x:-500,})
             **/
        },
    });
});


