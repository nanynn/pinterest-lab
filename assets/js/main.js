$(document).ready(function() {
	
	data.forEach(function(element){
		//console.log(element.title);
		$(".pines").append('<div class="pines__contenedor">'+
								'<div class="pines__tarjeta">'+
									'<a href="#" id="login-form" class="modal"><img src="dist/img/'+ element.id +'.jpg"></a>'+
									'<h3 class="pines__tarjeta--title">' + element.title + '</h3>'+
									'<h4 class="pines__tarjeta--username"><i class="fa fa-user-circle" aria-hidden="true"></i>'+element.username+ '</h4>'+
									'<p class="pines__tarjeta--hashtag">' + element.hashtag+'</p>'+
								'</div>'+
							'</div>');
	});
	$('#login-form').click(function(event) {
		$(this).modal();
	});
});
			
					
			