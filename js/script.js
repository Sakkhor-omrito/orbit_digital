
$('.slick_slider').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:false,
    slidesToShow:5,
    slidesToScroll:1,

     responsive: [
        {
          breakpoint:992,
          settings: {
            slidesToShow:5,
            slidesToScroll:5,
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow:2,
          }
        },
        {
          breakpoint:575,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1
          }
        }
      ]
  });


//   counter js
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


$(function(){

    let menuTop =$('.custom_navs').offset().top;
    
    $(window).on('scroll',function(){
         
        let scrollToTop=$(window).scrollTop();

   if(scrollToTop>menuTop){
      $(".custom_navs").addClass("menufix");
   }else{
    $(".custom_navs").removeClass("menufix");
   }

//back to top
if(scrollToTop>500){
 $('.back_top').fadeIn(1000);
}else{
    $('.back_top').fadeOut(1000); 
}



    });
 
//wow 
new WOW().init();
      
});