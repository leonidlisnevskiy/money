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


var ocean = document.getElementsByClassName("ocean"),
waveWidth = 10,
waveItem = $(".wave"),
waveCount = Math.floor(waveItem.innerWidth/waveWidth),
docFrag = document.createDocumentFragment();

for (var i = 0; i < waveCount; i++) {
	var wave = document.createElement("div");
	wave.className += " wave";
	docFrag.appendChild(wave);
	wave.style.left = i * waveWidth + "px";
	wave.style.webkitAnimationDelay = (i/100) + "s";
}
ocean.appendChild(docFrag);

$(document).ready(function() {
	$("[data-fancybox]").fancybox({loop: false});
	$(".js-btn-nav").click(function() {$body.toggleClass("is-open");});

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
	$(".grid__item").click(function () {$('.grid__item iframe').css("pointer-events", "auto");});
	$(".grid__item").mouseleave(function() {$('.grid__item iframe').css("pointer-events", "none");});

	// popup:open
	$(".js-open-callback").click(function(e) {
		e.preventDefault();
		$(".js-callback").toggleClass("is-active");
	});

	// popup:close
	$(".js-close-callback").click(function(e) {
		e.preventDefault();
		$(".js-callback").removeClass("is-active");
	});
});