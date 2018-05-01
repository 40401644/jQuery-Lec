$(function(){
	for(var i=0;i<100;i++){
		var msg=$('<div>Hello World</div>');			//msg is content
		msg.css('font-size',i);							//put css in content 
		$('body').append(msg);							//append from the last 
	}
});