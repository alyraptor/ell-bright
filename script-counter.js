$(document).ready(function() {

	// Mobile Menu Expand
	$('.js-nav-expand').click(function(e) {
		e.preventDefault();

		$('.expand').toggleClass('toggle');
		$('.close').toggleClass('toggle');
		$('.mobile-menu-wrap').fadeToggle(250);
	});

	//Initialize Swiper Carousel
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		pagination: 'carousel-counter',
		paginationClickable: true,
		paginationType: 'bullets',
		paginationBulletRender: function (index, className) {
			return '<span class="swiper-counter ' + className + '">' + (index + 2) + '</span>';
		}
	});
});