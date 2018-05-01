//hello.js
$(document).ready(function(){
	alert("Hello World")
});

$(function(){
	var msg = $('<div>Hello World</div>');
	$('body').append(msg);						//dynamic content
});

$(function(){
	var gb = $('<div id="gid"/>');
		gb.append($('<div/>',{text:'Great Britian'}));
		gb.append($('<img>',{src:'file:///C:/Users/X541UJ/JQuery/static/flags/gb.gif'}));
		$('#countries').append(gb);
		// $('#countries').attr("id","gid");				//d hr ko htae yin, akone chg twr yaw.. that's whyma htae nae.
});

$(function(){
	var elem = $('<div/>');
	elem.html('An example element');
	elem.css('border','solid blue');
	$('body').append(elem);
});

$(function(){
	$("#fr img").css({
		background:"yellow",
		border:"3px red solid",
		width:"200px"
	});
});

$(function(){
	$("#fi img").css({
		background:"yellow",
		border:"3px red solid",
		width:"200px"
	});
});

$(function(){
	$("#gid img").css({
		background:"yellow",
		border:"3px green solid",
		width:"200px"
	});
});

$(function(){
	$('p:first-child').css('border','solid');
	$('p:nth-child(1)').css('border','solid');
	$('p:eq(1)').css('border','solid');
	$('p:last').css('border','solid');
});

$(function(){
	var ca={
		cname:"A J CUMMING",
		caddress:{
			street:"10 Colinton Rd",
			town:"Edinburgh",
			post_code:"EH14 5DT"
		},
		transaction:[
		{whn:"2014-01-11",nar:"Cash Withdrawal",amt:-100},
		{whn:"2014-01-11",nar:"BUS FARE",amt:-35}
		]
	};
	alert(ca.transaction[1].nar);
})