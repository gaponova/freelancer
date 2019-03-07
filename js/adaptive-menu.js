$(function() {
    
   $('.menuToggle').on('click', function(){
			$('.main-nav').slideToggle(500, function(){
				if($(this).css('display') === 'none'){
					$(this).removeAttr('style');
				}
			});
		});
});

// Для того чтобы меню исчезло после клика на пункте

$('.main-nav a').click(function(){
	$('.main-nav').hide(300);});