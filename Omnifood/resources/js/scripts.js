/*global $ */
/*global document*/

$(document).ready(function () {
   
    /*for the sticky nav*/
  $('.js---section-features').waypoint(function(direction){
     /*for the sticky nav*/
      if(direction == 'down'){
          $('nav').addClass('sticky');
      }else{
          $('nav').removeClass('sticky');   
      }
  }, {
  offset: '60px;'
})    
     /*scroll on buttons*/
    $('.js---scroll-to-plan').click(function(){
       $('html,body').animate({scrollTop:$('.js---section-plans').offset().top},1000);      
    });
    
    $('.js---scroll-to-start').click(function(){
       $('html,body').animate({scrollTop:$('.js---section-features').offset().top},1000);      
    });
    
    
    /*navi scroll*/
    
    $(function() {
  $('a[href*="#"]')
    .not('[href="#"]')
    .click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
     /*animation on scroll*/
    $('.js--wp-1').waypoint(function(){
      $('.js--wp-1').addClass('animated fadeIn');        
    },{
        
        offset: '50%'
    });
    
     $('.js--wp-2').waypoint(function(){
      $('.js--wp-2').addClass('animated fadeInUp');        
    },{
        
        offset: '50%'
    });
    
     $('.js--wp-3').waypoint(function(){
      $('.js--wp-3').addClass('animated fadeIn');        
    },{
        
        offset: '50%'
    });
    
     $('.js--wp-4').waypoint(function(){
      $('.js--wp-4').addClass('animated pulse');        
    },{
        
        offset: '50%'
    });
    
    
    /*Mobile nav*/
    
    $('.js--nav-icon').click(function(){
        
        var nav = $('.js--main-nav');
        nav.slideToggle(200); 
        var icon= $('.js--nav-icon i');
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    
    });
  /*Maps*/
    var map = new GMaps({
  div: '.map',
  lat: 52.5065133, 
  lng: 14,
  zoom: 8       
});
    map.addMarker({
  lat: 52.5065133,
  lng: 13.1445525,
  title: 'Lima',
  infoWindow: {
  content: '<p>Welcom to Berlin</p>'
}
});
    
    
});