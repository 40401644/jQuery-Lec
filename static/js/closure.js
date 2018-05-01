
$(document).ready(function(){
	for(var i=0;i<4;i++)
		$('body')
			.append($('<button/>',{text:i})
				.click(function(){
				alert(i);
			}));
	});