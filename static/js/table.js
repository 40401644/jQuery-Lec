$(function()
		{
			$('#key th').css('color','red');
			$('#key').css('background','yellow');				//adding bg color
			// $('body').append($('<div>Hide key</div>'));
			// $('body').prepend($('<div/>',{text:'Hide key',css:{color:'blue'}, cursor:'pointer'},
			// 	click:function()
			// 	{
			// 		$('#key').toggle();
			// 	}

			$('body').append($('<div>Hide key</div>'));
			$('body').prepend($('<div/>',{text:'Hide key',css:{color:'blue', cursor:'pointer'},
				click:function(){
			if($('#key:visible').length==1){
				$('#key').fadeOut('slow');
				$('this').text('Show Key');
			}else{
				$('#key').fadeIn('slow');
				$('this').text('Hide Key');
			}}}));

			$(function()
			{
			$('tr.t1:first-child').css('background','grey');
	
			$('table td:not(:empty)').mouseover(function()
			{
			$(this).css('background','red');
			});

			$('table td').mouseout(function()
			{
			$(this).css('background','inherit');
			});

			});

			});
