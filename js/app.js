$(document).ready(function() {
	playBG();

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();		
	})
	
	.mousedown(function() {
		playHadouken(); 
		$('.ryu-ready').hide();
    	$('.ryu-throwing').show();
    	$('.hadouken').finish().show()
    	.animate({'left': '1400px'}, 500, function() {
		    $(this).hide();
		    $(this).css('left', '535px');
		  }
		);
  	})

  	.mouseup(function() {
  	  	$('.ryu-throwing').hide();
  		$('.ryu-ready').show();
  	});

  	$(document).keydown(function (e) {
		if (e.keyCode == 88) { 
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})

	.keyup(function (e) {
		if (e.keyCode == 88) { 
			$('.ryu-ready').show();
			$('.ryu-still').hide();
			$('.ryu-cool').hide();
		}
	})

	$('.instructions').on('click', function(){
			$(this).animate({'bottom':'0'}, 500);			
	});

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playBG () {
  $('#ryu-bg')[0].volume = 0.9;
  $('#ryu-bg')[0].load();
  $('#ryu-bg')[0].play();
}