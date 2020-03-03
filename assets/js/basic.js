$(function(){
    navbar_add_color();
});

$(window).scroll(function() {

    navbar_add_color();
});

$('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');_d.addClass('show');
    setTimeout(function(){
        _d[_d.is(':hover')?'addClass':'removeClass']('show');
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
    },300);
});


function navbar_add_color()
{
    console.log('navbar....');

    /* add color if scrolled more than 40 */
    if ($(this).scrollTop() >= 40) {
        $('.navbar').addClass('colored')
    } else {
        $('.navbar').removeClass('colored')
    }

}


$('.navbar .nav-item').hover(function(){
    $(this).addClass('active');
},function(){
    $(this).removeClass('active');
});


$('.background-image').each(function(i,obj){
    let background_image=$(obj).attr('background-image');
    $(obj).css('background-image', 'url('+background_image+')');
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$('.owl-two').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    lazyLoad : true,
    autoplay:true,
    autoplayTimeout:7000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    dotsContainer: '#carousel-custom-dots',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.owl-dot').click(function () {
    $('.owl-two').trigger('to.owl.carousel', [$(this).index(), 300]);
});


$('.counter').counterUp(
    {
        delay: 10, //wait
        time: 1000 //total duratino
    }
);



$('.slider-nav-2').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay:1,
    arrows : false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});
