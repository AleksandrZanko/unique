//slider

let slides = $('.slider__item');
let slide = $('.showed');
let dots = $('.slider__dot');

dots.on('click', function() {
	let selectItem = $(this);
	let data = selectItem.attr('data-slide');
	if(selectItem.hasClass('slider__dot--active')) {

	} else {
		dots.removeClass('slider__dot--active');
		slides.removeClass('showed');
		selectItem.addClass('slider__dot--active');
		
		currentSlide = $(".slider__item[data-slide =" + data + "]");
		currentSlide.addClass('showed');
	}
});

//header-menu

(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);

//header-menu scrolling

$(function () {
	$('.site-list__link, .anchor').on('click', function (e) {
		e.preventDefault();

		var selector = $(this).attr('href');
		var h = $(selector);

		$('html, body').animate({
			scrollTop: h.offset().top -50
		}, 1100);
	});
});

// arrows scrolling 

let buttons = $('.scroll');
let btnTop = $('.scroll__top');
let btnBot = $('.scroll__bottom');
let height = $("body").height();

$(function () {
	$(window).scroll(function() {
		if($(window).scrollTop() > 1700) {
			buttons.addClass('scroll--active');
		}
		else {
			buttons.removeClass('scroll--active');
		}
	})

	btnTop.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	})

	btnBot.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: height
		}, 1000);
	})
})
