/* Nombre       : Alexander Mondragon Valencia
 * Fecha        : 2015
 * Descripcion  : Clase que consulta los datos del estudiante a partir de la cedula
 */

//---------------------------------------------------------------------------------------------------
//funcion que valida si se presiono el boton aceptar, llama a funcion guardarDatosEstudiante
//mobileinit: evento que se dispara indicando que es la app movil
//---------------------------------------------------------------------------------------------------

$(document).bind("mobileinit", function () {
    //#gestionarcredito: esta referenciado por el id
    $('#gestionarcredito').live('pageinit', function () {
        //------------------------------------------------
        //funcion para Guardar
        //------------------------------------------------
        $('#btnGuardarCredito').bind('click', function () {
            //llamado a funcion GuardarCredito
            guardarCreditoPorCedula();
        });

        //------------------------------------------------
        //funcion para modificar
        //------------------------------------------------
        $('#btnModificarCredito').bind('click', function () {
            //llamado a funcion modificarCredito
            modificarCreditoPorCedula();
        });

        //------------------------------------------------
        //funcion para consultar
        //------------------------------------------------
        $('#btnConsultarCredito').bind('click', function () {
            //llamado a funcion consultarCreditoPorCedula
            consultarCreditoPorCedula();
        });

        //------------------------------------------------
        //funcion para eliminar
        //------------------------------------------------
        $('#btnEliminarCredito').bind('click', function () {
            //llamado a funcion eliminarCreditoPorCedula
            eliminarCreditoPorCedula();
        });
    });
});

//----------------------------------------------------------------------------
//funcion que consulta datos por cedula
//----------------------------------------------------------------------------
function consultarCreditoPorCedula() {
    //obtiene la cedula de la caja de texto
    var sbCedula = $("#txtCedula").val();
    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/consultarPorCedula.php",	
        //url: "http://192.168.43.247/ServidorPHP/consultarPorCedula.php",
        url: endpoint + "ServidorPHP/consultarPorCedula.php",
        //url: "http://192.168.1.103/ServidorPHP/consultarCreditoPorCedula.php",
        type: "POST",
        data: {cedula: sbCedula},
        //envia los datos por medio de function
        success: function (data) {
            //ubica los datos en las cajas de texto
            var res = data.split("|");
            $("#txtNombre").val(res[0]);
            $("#txtEmail").val(res[1]);

            //obtiene cantidad de filas afectadas
            var numFilasAfectadas = res[2];
            //valida si se encontro la cedula en la consulta   
            if (numFilasAfectadas !== 0) {
                navigator.notification.alert("No se Encontró Cédula");
            }
        },
        error: function (data) {
            //muestra mensaje si estuvo bien el procesoo no!
            navigator.notification.alert(data);
        }
    });


}//fin de funcion consultarDatosEstudiante

//----------------------------------------------------------------------------
//funcion que Guarda datos del credito
//----------------------------------------------------------------------------
function guardarCreditoPorCedula() {
    //obtiene datos de las cajas de texto
    var sbCedula = $("#txtCedula").val();
    var sbNombre = $("#txtNombre").val();
    var sbEmail = $("#txtEmail").val();

    //obtiene el login del LocalStorage
    var user = getData();
    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/guardarCredito.php",
        //url: "http://192.168.1.103/ServidorPHP/guardarCredito.php",
        //url: "http://192.168.43.247/ServidorPHP/guardarCredito.php",
        url: endpoint + "ServidorPHP/guardarCredito.php",
        type: "POST",
        data: {cedula: sbCedula, nombre: sbNombre, email: sbEmail, usuario: user},
        //envia los datos por medio de function
        success: function (data) {
        navigator.notification.alert(data);
        },
        error: function (data) {
            //muestra mensaje si estuvo bien el procesoo no!
            navigator.notification.alert(data);
        }
    });
}//fin de funcion guardarCreditoPorCedula


//----------------------------------------------------------------------------
//funcion que modifica datos por cedula
//----------------------------------------------------------------------------
function modificarCreditoPorCedula() {
    //obtiene datos de las cajas de texto
    var sbCedula = $("#txtCedula").val();
    var sbNombre = $("#txtNombre").val();
    var sbEmail = $("#txtEmail").val();

    //obtiene el login del LocalStorage
    var user = getData();
    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/modificarCreditoPorCedula.php",	
        //url: "http://192.168.43.247/ServidorPHP/modificarCreditoPorCedula.php",
        url: endpoint + "ServidorPHP/modificarCreditoPorCedula.php",
        //url: "http://192.168.1.103/ServidorPHP/modificarCreditoPorCedula.php",
        type: "POST",
        data: {cedula: sbCedula, nombre: sbNombre, email: sbEmail, usuario: user},
        //envia los datos por medio de function
        success: function (data) {
            navigator.notification.alert(data);
        },
        error: function (data) {
            //muestra mensaje si estuvo bien el procesoo no!
            navigator.notification.alert(data);
        }
    });
}//fin de funcion modificarDatosEstudiantePorCedula

//----------------------------------------------------------------------------
//funcion que elimina datos eliminarCreditoPorCedula
//----------------------------------------------------------------------------
function eliminarCreditoPorCedula() {
    //obtiene datos de las cajas de texto
    var sbCedula = $("#txtCedula").val();
    var user = getData();
    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/eliminarCreditoPorCedula.php",			
        //url: "http://192.168.43.247/ServidorPHP/eliminarCreditoPorCedula.php",
        url: endpoint + "ServidorPHP/eliminarCreditoPorCedula.php",
        //url: "http://192.168.1.103/ServidorPHP/eliminarCreditoPorCedula.php",
        type: "POST",
        data: {cedula: sbCedula, usuario: user},
        //envia los datos por medio de function
        success: function (data) {
            navigator.notification.alert(data);
        },
        error: function (data) {
            //muestra mensaje si estuvo bien el procesoo no!
            navigator.notification.alert(data);
        }
    });
    //llamado a metodo que limpia las cajas de texto
    limpiarCajasTexto();
}//fin de funcion eliminarDatosEstudiante	

//----------------------------------------------------------------------------
//funcion que limpia cajas de texto
//----------------------------------------------------------------------------
function limpiarCajasTexto() {
    $("#txtCedula").val("");
    $("#txtNombre").val("");
    $("#txtEmail").val("");
}//fin funcion limpiarCajasTexto