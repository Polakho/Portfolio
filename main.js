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
        },
    });
});



$(".sp").ready(function(){
    let $window = $(window)
    let p = $(".secondPage").offset().top

    $window.scroll(function () {
        if ($window.scrollTop() >= p) {
            $("header").addClass("black")
            $("#arrow").attr("src", "images/arrow-black.png")
            $("#linkedin").attr("src", "images/linkedin-black.png")
            $("#gitHub").attr("src", "images/gitHub-black.png")
            $("#gmail").attr("src", "images/gmail-black.png")
            $("#resume").attr("src", "images/resume-black.png")
        } else {
            $("header").removeClass("black")
            $("#arrow").attr("src", "images/arrow.png")
            $("#linkedin").attr("src", "images/linkedin.png")
            $("#gitHub").attr("src", "images/gitHub.png")
            $("#gmail").attr("src", "images/gmail.png")
            $("#resume").attr("src", "images/resume.png")
        }
    })
})

$(document).ready(function (){
    const ratio = 0.5;
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    };

    const handleIntersect = function(entries,observer) {
        entries.forEach(function (entry){
            if(entry.intersectionRatio > ratio){
                entry.target.classList.add('reveal-visible')
                observer.unobserve(entry.target)
            }
        })
    }

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll(".reveal").forEach(function (r){
        observer.observe(r)
    })
})


$(".containerCard").hover(
    function(){
        $(this).removeClass("pulse");
    }, function (){
        $(this).addClass("pulse");
    }
);





