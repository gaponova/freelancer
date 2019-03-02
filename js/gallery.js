$(document).ready(function() {
  

  $('#imageGallery').lightSlider({
      download: true,
      item: 1,
      loop: true,
      slideMargin: 10,
      
      // currentPagerPosition: 'left',
      controls: true,
      auto: true,
      speed: 2000,
      pause: 5000,
      pauseOnHover: true,
      
      

      onSliderLoad: function(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }
  });

});
