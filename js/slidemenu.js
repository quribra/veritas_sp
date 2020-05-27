$(function() {

	if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){}
	else { return; }

	var _click = ('ontouchstart' in document) ? 'touchstart' : 'click';

	$(document).on(_click, ".menu", function(e){
		if ($('#menulist').css('display') == 'none') {
			$('#menulist').animate({ height: 'show' }, "fast");
			$(this).addClass("active");
			$(window).on('touchmove.noScroll', function(e) { e.preventDefault(); });
		}
		else{
			$('#menulist').animate({ height: 'hide' },"fast");
			$(this).removeClass("active");
			$(window).off('.noScroll');
		}
	});

	$(document).on(_click, '#menulist .close, .menu_2', function(e){
		$( '#menulist .close').parent('#menulist').animate({ height: 'hide' }, "fast");
		$(".menu").removeClass("active");
		$(window).off('.noScroll');
	});


 });
