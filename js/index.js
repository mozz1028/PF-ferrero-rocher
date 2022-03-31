$(function(){
  
    var slickOpt = {
        prevArrow : ".prev",
        nextArrow : ".next",
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        infinite: true,
        autoPlaySpeed : 1000,
        speed : 1500
    }
      $('.item_track').slick(slickOpt);
        
      $("a" ).on("click", function(e){e.preventDefault();});
  });
  