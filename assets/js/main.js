$(document).ready(function() {
	
	data.forEach(function(element){
		console.log(element.title);
		$(".espacio").append('<img src="assets/img/'+element.id+'.jpg">'+
								'<h4>' + element.title + '</h4>'+
								'<p>'++'</p>');
	});

});
