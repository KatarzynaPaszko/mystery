jQuery(document).ready(function($){

  console.log("bla");
  // var menuDarkTimer=null;
  // var menuDarkVisible=false;
  // $("#navigation-link-dark").hover(function(){
  //   setTimeout(function(){
  //     runDarkMenu();
  //   },200);
  //   function runDarkMenu(){
  //     if(!menuDarkVisible&&$("#navigation-link-dark").is(":hover")){
  //       menuDarkVisible=true;
  //       clearTimeout(menuDarkTimer);
  //       $("#navigation .navigation-dropdown").fadeOut();
  //       $("#navigation .navigation-link").css('border-bottom','7px #1a1a1a solid');
  //       menuLightVisible=false;$(this).css('border-bottom','7px solid #550000');
  //       $("#navigation-dropdown-dark").fadeIn();
  //       $("#navigation-dropdown-dark").mouseleave(function(){
  //         if(!$("#navigation-link-dark").is(':hover')){
  //           menuDarkTimer=setTimeout(function(){
  //             if(!$("#navigation-link-dark").is(':hover')&&!$("#navigation-dropdown-dark").is(':hover')){
  //               $("#navigation-dropdown-dark").fadeOut();
  //               $("#navigation-link-dark").css('border-bottom','7px #1a1a1a solid');
  //               clearTimeout(menuDarkTimer);
  //               menuDarkVisible=false;
  //             }
  //           },300);
  //         }
  //       });
  //     }
  //   }
  // });
  // $("#navigation-dropdown-dark").hover(function(){
  //   clearTimeout(menuDarkTimer);
  // });
  // var menuLightTimer=null;
  // var menuLightVisible=false;
  // $("#navigation-link-light").hover(function(){
  //   setTimeout(function(){
  //     runLightMenu();
  //   },200);
  //   function runLightMenu(){
  //     if(!menuLightVisible&&$("#navigation-link-light").is(":hover")){
  //       if(!menuLightVisible){
  //         menuLightVisible=true;
  //         clearTimeout(menuLightTimer);
  //         $("#navigation .navigation-dropdown").fadeOut();
  //         $("#navigation .navigation-link").css('border-bottom','7px #1a1a1a solid');
  //         menuDarkVisible=false;
  //         $(this).css('border-bottom','7px solid #550000');
  //         $("#navigation-dropdown-light").fadeIn();
  //         $("#navigation-dropdown-light").mouseleave(function(){
  //           if(!$("#navigation-link-light").is(':hover')){
  //             menuLightTimer=setTimeout(function(){
  //               if(!$("#navigation-link-light").is(':hover')&&!$("#navigation-dropdown-light").is(':hover')){
  //                 $("#navigation-dropdown-light").fadeOut();
  //                 $("#navigation-link-light").css('border-bottom','7px #1a1a1a solid');
  //                 clearTimeout(menuLightTimer);
  //                 menuLightVisible=false;
  //               }
  //             },300);
  //           }
  //         });
  //       }
  //     }
  //   }
  // });
  // $("#navigation-dropdown-light").hover(function(){
  //   clearTimeout(menuLightTimer);
  // });
  // $("#navigation-link-author").hover(function(){
  //   $("#navigation .navigation-dropdown").fadeOut();
  //   menuLightVisible=false;
  //   menuDarkVisible=false;
  //   $("#navigation .navigation-link").css('border-bottom','7px #1a1a1a solid');
  //   $(this).css('border-bottom','7px solid #550000');
  // });
  // $("#navigation-link-author").mouseleave(function(){
  //   $(this).css('border-bottom','7px #1a1a1a solid');
  // });
  // $("#navigation-link-other").hover(function(){
  //   $("#navigation .navigation-dropdown").fadeOut();
  //   menuLightVisible=false;
  //   menuDarkVisible=false;
  //   $("#navigation .navigation-link").css('border-bottom','7px #1a1a1a solid');
  //   $(this).css('border-bottom','7px solid #550000');
  // });
  // $("#navigation-link-other").mouseleave(function(){
  //   $(this).css('border-bottom','7px #1a1a1a solid');
  // });
  // $("#mobile-navigation .show-button").click(function(){
  //   $("#mobile-navigation .menu-container").slideToggle("slow");
  //   return false;
  // });
  // var menuHider=setInterval(function(){
  //   if(!$("#navigation").is(':hover')
  //   &&!$("#navigation-dropdown-light").is(':hover')
  //   &&!$("#navigation-dropdown-dark").is(':hover')){
  //     $(".navigation-dropdown").fadeOut();
  //     $(".navigation-link").css('border-bottom','7px #1a1a1a solid');
  //     clearTimeout(menuLightTimer);
  //     menuLightVisible=false;
  //     clearTimeout(menuDarkTimer);
  //     menuDarkVisible=false;
  //   }
  // },600);


// Main Slider
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    fade: true,
    cssEase: 'linear',
    // nextArrow: $(".slick-next"),
    // prevArrow: $(".slick-prev"),
  });



});
