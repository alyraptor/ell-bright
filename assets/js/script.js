$(document).ready(function() {

	// Mobile Menu Expand
	$('.js-nav-expand').click(function(e) {
		e.preventDefault();

		$('.expand').toggleClass('toggle');
		$('.close').toggleClass('toggle');
		$('.mobile-menu-wrap').fadeToggle(250);
	});
});