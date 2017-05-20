$(document).ready(function(){
    var openMenu = false;
    $('.mobMenu').click(function(){
        if(!openMenu){
          openMenu = true;
          $('#menuLeft').slideDown();
        }else{
          openMenu = false;
          $('#menuLeft').slideUp();
        }
    });
    $('article').hover(function() {
      $(this).find('.article_description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });
    $(window).scroll(function(){
      if(typeof page != "undefined" && page == "home"){
          if($(window).scrollTop() >= $('#headerBG').height()){
            $('nav').css({position:'fixed',width:'100%',background:'#234465',zIndex:'10'});
          }else{
            $('nav').removeAttr('style');
          }
      }

    });
});
