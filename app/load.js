$(document).ready(function() {
	load();
});

function load(){
	setTimeout(function(){
		$('.loaderContainer').addClass('load');
	}, 500);
	setTimeout(function(){
		$('.loaderContainer').removeClass('load');
		removeOverlay();
	}, 3200);
}

function removeOverlay() {
	$('.overlay').fadeOut('slow');
}

$('.replay').on('click', function() {
	$('.overlay').fadeIn('fast');
	load();
});