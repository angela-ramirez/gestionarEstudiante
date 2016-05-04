/* Nombre       : Alexander Mondragon Valencia
 * Fecha        : 2015
 * Descripcion  : Clase que permite recibir los datos del html y enviarlos a la logica de negocio php
 */

//funcion que valida si se presiono el boton enviar, llama a funcion validar
//mobileinit: evento que se dispara indicando que es la app movil
$(document).bind("mobileinit", function(){

   //#index: indica el html inicial,esta referenciado por el id

	$('#index').live('pageinit', function() {
	
		$('#btnEnviar').bind('click', function(){
		   //llamado a funcion validar
			validar();
		});
	});
  
});



// Guardamos el usuario
function setData(){
  localStorage.setItem("login",txtLogin.value); 
}


//funcion que valida si se han llenado las cajas de texto
function validar(){
 
     //llama a la funcion que guarda el usuario en el localStorage
     setData();
      

    //obtiene los datos de las cajas de texto usuario y sbClave
	var sbUsuario = txtLogin.value;
	var sbClave   = txtClave.value;
	
	
	//guardar usuario en localStorage
	
	
	
	//inicializa variable para saber si se puede enviar la peticion url
	var blSubmit = true;
	
	//crea variable para armar mensaje de alerta
	var sbMensaje = 'Complete los siguientes campos:\n';

    //valida si las cajas de texto estan vacias
	if(sbUsuario == '' && sbClave == ''){
		sbMensaje += "Digite Todos Los Campos\n";	
		blSubmit = false;
	}//fin del if
	
	//valida si la caja de texto usuario esta vacia
	else if(sbUsuario == ''){
		sbMensaje += "- sbUsuario \n";		
		blSubmit = false;
	}//fin del else
	
	//valida si la caja de texto clave esta vacia
	else if(sbClave == ''){
		sbMensaje += "- sbClave \n";
		blSubmit = false;
	}//fin del else
	
	
	//valida si la variabe blSubmit esta en true para poder realizar el llamado al Url
	//usa metodo ajax
	if(blSubmit){
		$.ajax({
		
		    //arma url usa metodo post
			//url: "http://172.16.89.50/ServidorPHP/validar.php",
			//url: "http://192.168.43.247/ServidorPHP/validar.php",
			//url: "http://192.168.1.103/ServidorPHP/validar.php",
			url: "http://192.168.1.16/ServidorPHP/validar.php",
			type: "POST",
			//obtiene la informacion de las variables usuario y clave
			data: {user: sbUsuario, pass: sbClave},
			
			//envia los datos por medio de function
			success: function(data){
			
			if (data == 1){			      
				  //llamado al formulario estudiante
				  window.location = 'frm/frmMenuAdmin.html';   
			}
			else if (data == 2){
				  
				  //llamado al formulario estudiante
				  window.location = 'frm/frmMenuConsulta.html';
			}
			else if (data == 3){
				  
				  //llamado al formulario estudiante
				  window.location = 'frm/frmMenuRegistro.html';
			}
			
			else{
				     navigator.notification.alert("Usuario No Valido");
				}
				
			},
			error: function(data){
			    //muestra mensaje si estuvo bien el procesoo no!
			    navigator.notification.alert(data);						
			}
		})
		
	}//fin del if
	
	//entra aqui si falta por llenar algun campo, lo que indica que la variable blSubmit esta en false 
	else
	{
		navigator.notification.vibrate(1000);
		navigator.notification.alert(sbMensaje, "Estudiante");	
	}//fin del else
	
}//fin de funcion validar



