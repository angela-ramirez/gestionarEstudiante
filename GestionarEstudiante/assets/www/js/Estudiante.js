/* Nombre       : Alexander Mondragon Valencia
 * Fecha        : 2015
 * Descripcion  : Clase que obtiene los datos de estudiante para enviarlos a la BD
 */

//---------------------------------------------------------------------------------------------------
//funcion que valida si se presiono el boton aceptar, llama a funcion guardarDatosEstudiante
//mobileinit: evento que se dispara indicando que es la app movil
//---------------------------------------------------------------------------------------------------
var endpoint = "http://192.168.1.103/";
$(document).bind("mobileinit", function () {

    //#estudiante: esta referenciado por el id
    $('#estudiante').live('pageinit', function () {

        //------------------------------------------------
        //funcion para guardar
        //------------------------------------------------
        $('#btnAceptar').bind('click', function () {
            //llamado a funcion guardarDatosEstudiante
            guardarDatosEstudiante();
        });

        //------------------------------------------------
        //funcion para consultar
        //------------------------------------------------
        $('#btnConsultar').bind('click', function () {
            //llamado a funcion consultarDatosEstudiante
            consultarDatosEstudiante();
        });
    });
});

//funcion que valida si se han llenado las cajas de texto
function guardarDatosEstudiante() {
    var user = getData();

    //obtiene los datos de las cajas de texto 
    var sbCedula = txtCedula.value;
    var sbNombre = txtNombre.value;
    var sbApellido = txtApellido.value;
    var sbDireccion = txtDireccion.value;
    var sbTelefono = txtTelefono.value;
    var sbEmail = txtEmail.value;

    //inicializa variable para saber si se puede enviar la peticion url
    var blSubmit = true;
    //crea variable para armar mensaje de alerta
    var sbMensaje = 'Complete los siguientes campos:\n';

    //valida si la caja de texto cedula esta vacia
    if (sbCedula == '') {
        sbMensaje += "- sbCedula \n";
        blSubmit = false;
    }//fin del else

    //valida si la caja de texto nombre esta vacia
    else if (sbNombre == '') {
        sbMensaje += "- sbNombre \n";
        blSubmit = false;
    }//fin del else

    //valida si la caja de telefono nombre esta vacia
    else if (sbTelefono == '') {
        sbMensaje += "- sbNombre \n";
        blSubmit = false;
    }//fin del else

    //valida si la variabe blSubmit esta en true para poder realizar el llamado al Url
    //usa metodo ajax
    if (blSubmit) {
        $.ajax({
            //arma url usa metodo post
            //url: "http://172.16.89.50/ServidorPHP/guardar.php",			
            //url: "http://192.168.43.247/ServidorPHP/guardar.php",	
            url: endpoint+"ServidorPHP/guardar.php",
            //url: "http://192.168.1.103/ServidorPHP/guardar.php",
            type: "POST",
            //obtiene la informacion de las variables usuario y clave
            data: {cedula: sbCedula, nombre: sbNombre, apellido: sbApellido, direccion: sbDireccion, telefono: sbTelefono, email: sbEmail, usuario: user},
            //envia los datos por medio de function
            success: function (data) {
                //muestra mensaje si estuvo bien el proceso o no!
                navigator.notification.alert(data);
            },
            error: function (data) {
                //muestra mensaje si estuvo bien el procesoo no!
                navigator.notification.alert(data);
            }
        });
    }//fin del if
    //entra aqui si falta por llenar algun campo, lo que indica que la variable blSubmit esta en false 
    else
    {
        navigator.notification.vibrate(1000);
        navigator.notification.alert(sbMensaje, "Estudiante");
    }//fin del else
}//fin de funcion guardarDatosEstudiante

//----------------------------------------------------------------------------
//funcion que valida si se han llenado las cajas de texto
//----------------------------------------------------------------------------
function consultarDatosEstudiante() {

    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/consultar.php",			
        //url: "http://192.168.43.247/ServidorPHP/consultar.php",
        url: endpoint+"ServidorPHP/consultar.php",
        //url: "http://192.168.1.103/ServidorPHP/consultar.php",	
        type: "POST",
        //envia los datos por medio de function
        success: function (data) {
            //muestra mensaje si estuvo bien el proceso o no!
            navigator.notification.alert(data);
        },
        error: function (data) {
            //muestra mensaje si estuvo bien el procesoo no!
            navigator.notification.alert(data);
        }
    });
}//fin de funcion consultarDatosEstudiante
