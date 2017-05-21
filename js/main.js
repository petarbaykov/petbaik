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
          /*  $('#home-header').css({marginTop:$('nav').height()});*/
            $('nav').fadeIn().css({position:'fixed',width:'100%',background:'#234465',zIndex:'10'});
            $('#left-nav').css({position:'fixed',top:'20%'});
          }else{
            $('nav').removeAttr('style');
            $('#left-nav').removeAttr('style');
          }
      }

    });
});
function scrollToSection(self){
  var id = $(self).attr('id');
  $('html, body').animate({
    scrollTop:$('.'+id).offset().top
  },2000);
}
