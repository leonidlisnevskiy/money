console.log('common');

$body = $("body");
$window = $(window);

$window.scroll(function() {
	if ( $window.scrollTop() > 0) {
		$body.addClass("is-fixed");
	} else{
		$body.removeClass("is-fixed");
	}
});


$(document).ready(function() {
	$(".js-btn-nav").click(function() {
		$body.toggleClass("is-open");
	});

	$(".js-dropdown").click(function(e) {
		e.preventDefault();
		$(".js-dropdown-content").toggleClass("is-open");
	});

	// animated scroll
	$('.js-scroll-to').on("click", function(e){
		e.preventDefault();
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
	});

	// map scroll disable
	$('.map-container').click(function () {
		$('.map-container iframe').css("pointer-events", "auto");
	});

	$( ".map-container" ).mouseleave(function() {
		$('.map-container iframe').css("pointer-events", "none");
	});

// popup
// $(".js-open-table").click(function(e) {
// 	e.preventDefault();
// 	$(".js-table").toggleClass("is-active");
// });

// $(".js-close-table").click(function(e) {
// 	e.preventDefault();
// 	$(".js-table").removeClass("is-active");
// });


});