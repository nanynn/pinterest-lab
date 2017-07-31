$(document).ready(function() {
	
	data.forEach(function(element){
		//console.log(element.title);
		var infoPines ='<a href="#" class="cont-modal"><div class="pines__contenedor">'+
								'<div class="pines__tarjeta">'+
									'<img src="dist/img/'+ element.id +'.jpg">'+
									'<h3 class="pines__tarjeta--title">' + element.title + '</h3>'+
									'<h4 class="pines__tarjeta--description">'+ element.description+'</h4>'+
									'<h5 class="pines__tarjeta--username"><i class="fa fa-user-circle" aria-hidden="true"></i>'+element.username+ '</h5>'+
									'<p class="pines__tarjeta--hashtag">' + element.hashtag+'</p>'+
								'</div>'+
							'</div></a>';

		infoPines=$(infoPines); //declarar objeto en jquery

			infoPines.data('pin', element); //metodo para que saque de la data saque toda la info  

			infoPines.click(function(){
				var pin = infoPines.data('pin');
				var modalInfo = '<div class="modal__contenedor">'+
									'<img src="dist/img/'+ pin.id +'.jpg" class="img-modal">'+
									'<h3 class="modal__contenedor--title">' + pin.title + '</h3>'+
									'<h4 class="modal__contenedor--description">'+ pin.description+'</h4>'+
									'<h5 class="modal__contenedor--username"><i class="fa fa-user-circle" aria-hidden="true"></i>'+pin.username+ '</h5>'+
									'<p class="modal__contenedor--hashtag">' + pin.hashtag+'</p>'+
								'</div>';
				
				$('#modal').find('.cajaModal').html(modalInfo);
				$('#modal').modal();
			});	
		
		$(".pines").append(infoPines);					
	});
});
			