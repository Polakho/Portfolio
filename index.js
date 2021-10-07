var $header_top = $('.header-top');
var $menu = $('menu');

$header_top.find('a').on('click', function() {
    $(this).parent().toggleClass('open-menu');
});

$('#fullpage').fullpage({
    sectionSelector: '.vertical-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['home', 'aboutMe', 'why', 'contact'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

    onLeave: function(index, nextIndex, direction) {
        if(index == 5) {
            $('#fp-nav').show();
        }
    },

});