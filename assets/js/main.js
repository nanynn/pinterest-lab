$(document).ready(function() {
	
	data.forEach(function(element){
		//console.log(element.title);
		var infoPines =  '<a href="#" class="open-modal"><div class="pines__contenedor">'+
								'<div class="pines__tarjeta">'+
									'<img src="dist/img/'+ element.id +'.jpg">'+
									'<h3 class="pines__tarjeta--title">' + element.title + '</h3>'+
									'<h4 class="pines__tarjeta--username"><i class="fa fa-user-circle" aria-hidden="true"></i>'+element.username+ '</h4>'+
									'<p class="pines__tarjeta--hashtag">' + element.hashtag+'</p>'+
								'</div>'+
							'</div></a>';
	});

	infoPines=$(infoPines); //declarar objeto en jquery

	infoPines.data('pin', element); //metodo para que saque de la data saque toda la info  

	$(".pines").append(infoPines);

	infoPines.click(function(){
		var pin = infoPines.data('pin');
		console.log(pin);
		var modal = '<img src="dist/img/1.jpg">';

		$('#modal').modal();
	});

});
			