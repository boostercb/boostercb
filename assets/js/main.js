(function($) {
  $(document.body).fadeIn(1200);
})(jQuery);

$(document).ready(function() {
    $('a[href=#top]').click(function(){
        $('html, body').animate({scrollTop:0}, 'slow');
        return false;
    });
	$('a[href=#contact]').click(function(){
        $('html, body').animate({scrollTop: $("#contact").offset().top}, 'slow');
        return false;
    });
});

/* $(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
}); */

$(window).load(function() {
	// The slider being synced must be initialized first
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		itemMargin: 5,
		asNavFor: '#slider'
	});

	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	});
});

function showWork() {
	$('.collapse').collapse('show');
	return false;
}