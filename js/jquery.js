$(document).ready(function() {

	var blocksPerSide = 4;
	var totalBlocks = 16;
	
	function makeGrid() {
		for (var i = 0; i < totalBlocks; i++) {
			
			var divBlock = $('<div/>', {
				"class": "block",
				"id": i,
				css:{
					height: 100/blocksPerSide + '%',
					width: 100/blocksPerSide + '%'
				}
			});

			$('.container').append(divBlock);
		}
	}

	
	function black() {
		$('.block').on('mouseenter', function() {
			$(this).addClass('highlight');
		});
	}

	makeGrid();
	black();

	$('.reset').on('click', function() {

		var usersize = prompt("How many squares would you like per side of the next grid?", "Up to 64!");
		
		if (usersize <= 64) {
			blocksPerSide = usersize;
			totalBlocks = usersize ** 2;
			$('.block').remove();
			makeGrid();
			black();
		}

		else {
			usersize;
		}

	})


	function randomColor() {
		var color = 'rgb(' 
		+ Math.floor((Math.random() * 256)) + ', '
		+ Math.floor((Math.random() * 256)) + ', '
		+ Math.floor((Math.random() * 256)) + ')';
		return color; 
	}

	$('.technicolor').on('click', function() {
		$('.block').off();
		$('.block').removeClass('highlight');
		$('.block').css('background-color', '#F3F4C3')
		$('.block').css('opacity', 1)
		$('.block').on('mouseenter', function() {
			$(this).css('background-color', randomColor())
		})
	})

	$('.shady').on('click', function() {
		$('.block').off();
		$('.block').removeClass('highlight');
		$('.block').css('background-color', '#F3F4C3')
		$('.block').on('mouseenter', function() {
			var opacityChange = 0.1;
			$(this).css('opacity', $(this).css('opacity') - opacityChange);
		})
	})

});


