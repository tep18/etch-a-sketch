$(document).ready(function() {
	
	for (var i = 0; i < 16; i++) {
		var divBlock = $('<div/>', {
			"class": "block"
		});
		$('.container').append(divBlock);
	}

	$('.block').on('mouseenter', function() {
		$(this).addClass('highlight')
	});
	$('.block').on('click', function() {
		$(this).toggleClass('highlight')
	});

});
