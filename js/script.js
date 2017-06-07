jQuery(document).ready(function() {
    
    var navOffset = $('.services-nav').offset().top;
    jQuery(window).scroll(function() {
		
		scrollPos = jQuery(this).scrollTop();
		console.log(scrollPos);
		if (scrollPos >= navOffset) {
			jQuery(".services-nav").addClass("fixed");
		} else {
			jQuery(".services-nav").removeClass("fixed");
		}
		
	});
    
});