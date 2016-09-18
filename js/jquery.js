$(document).ready(function() {

	var blocksPerSide = 4;
	var totalBlocks = 16;
	
	function makeGrid() {
		for (var i = 0; i < totalBlocks; i++) {
			var divBlock = $('<div/>', {
				"class": "block",
				"id": i
			});
			$('.container').append(divBlock);
			$('.block').css({
				'height': 100/blocksPerSide + '%',
				'width': 100/blocksPerSide + '%'
			})
		}
	}

	makeGrid();

	function black() {

		$('.block').on('mouseenter', function() {
			$(this).addClass('highlight')
		});

		$('.block').on('click', function() {
			$(this).toggleClass('highlight')
		});
	}

	black()

	$('button').on('click',function() {
		$('html').find('.block').removeClass('highlight');

		var usersize = prompt("How many squares would you like per side of the next grid?", "Go big...");
		blocksPerSide = usersize;
		totalBlocks = usersize ** 2;
		$('.block').remove();
		makeGrid();
		black();

	})

});
