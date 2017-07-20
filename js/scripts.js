$(document).ready(function() {

	$(".menu__hamburger").click(function() {
		$(".menu__list").slideToggle(300, function() {
			if($(this).css("display") == 'none') {
				$(this).removeAttr('style');
			}
		});
	});

});