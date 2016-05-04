/* Nombre       : Alexander Mondragon Valencia
 * Fecha        : 2015
 * Descripcion  : Clase que consulta los datos del estudiante a partir de la cedula
 */

//---------------------------------------------------------------------------------------------------
//funcion que valida si se presiono el boton aceptar, llama a funcion guardarDatosEstudiante
//mobileinit: evento que se dispara indicando que es la app movil
//---------------------------------------------------------------------------------------------------
var endpoint = "http://192.168.1.103/";
$(document).bind("mobileinit", function () {

    //#gestionarestudiante: esta referenciado por el id
    $('#gestionarestudiante').live('pageinit', function () {
        //------------------------------------------------
        //funcion para guardar
        //------------------------------------------------
        $('#btnModificar').bind('click', function () {
            //llamado a funcion modificarDatosEstudiantePorCedula
            modificarDatosEstudiantePorCedula();
        });

        //------------------------------------------------
        //funcion para consultar
        //------------------------------------------------
        $('#btnConsultarEstudiante').bind('click', function () {
            //llamado a funcion consultarDatosEstudiantePorCedula
            consultarDatosEstudiantePorCedula();
        });
        
        //------------------------------------------------
        //funcion para eliminar
        //------------------------------------------------
        $('#btnEliminar').bind('click', function () {
            //llamado a funcion eliminarDatosEstudiante
            eliminarDatosEstudiante();
        });
    });
});

//----------------------------------------------------------------------------
//funcion que consulta datos por cedula
//----------------------------------------------------------------------------
function consultarDatosEstudiantePorCedula() {
    //obtiene la cedula de la caja de texto
    var sbCedula = $("#txtCedula").val();
    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/consultarPorCedula.php",	
        //url: "http://192.168.43.247/ServidorPHP/consultarPorCedula.php",
        url: endpoint+"ServidorPHP/consultarPorCedula.php",
        //url: "http://192.168.1.103/ServidorPHP/consultarPorCedula.php",
        type: "POST",
        data: {cedula: sbCedula},
        //envia los datos por medio de function
        success: function (data) {
            //ubica los datos en las cajas de texto
            var res = data.split("|");
            $("#txtNombre").val(res[0]);
            $("#txtApellido").val(res[1]);
            $("#txtDireccion").val(res[2]);
            $("#txtTelefono").val(res[3]);
            $("#txtEmail").val(res[4]);

            //obtiene cantidad de filas afectadas
            var numFilasAfectadas = res[5];

            //valida si se encontro la cedula en la consulta   
            if (numFilasAfectadas != 1) {
                navigator.notification.alert("No se Encontro Cedula");
            }
        },
        error: function (data) {
            //muestra mensaje si estuvo bien el procesoo no!
            navigator.notification.alert(data);
        }
    });
}//fin de funcion consultarDatosEstudiante

//----------------------------------------------------------------------------
//funcion que modifica datos por cedula
//----------------------------------------------------------------------------
function modificarDatosEstudiantePorCedula() {
    //obtiene datos de las cajas de texto
    var sbCedula = $("#txtCedula").val();
    var sbNombre = $("#txtNombre").val();
    var sbApellido = $("#txtApellido").val();
    var sbDireccion = $("#txtDireccion").val();
    var sbTelefono = $("#txtTelefono").val();
    var sbEmail = $("#txtEmail").val();
    //obtiene el login del LocalStorage
    var user = getData();
    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/modificarPorCedula.php",	
        //url: "http://192.168.43.247/ServidorPHP/modificarPorCedula.php",
        url: endpoint+"ServidorPHP/modificarPorCedula.php",
        //url: "http://192.168.1.103/ServidorPHP/modificarPorCedula.php",
        type: "POST",
        data: {cedula: sbCedula, nombre: sbNombre, apellido: sbApellido, direccion: sbDireccion, telefono: sbTelefono, email: sbEmail, usuario: user},
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
//funcion que elimina datos estudiante
//----------------------------------------------------------------------------
function eliminarDatosEstudiante() {
    //obtiene datos de las cajas de texto
    var sbCedula = $("#txtCedula").val();
    var user = getData();
    $.ajax({
        //arma url usa metodo post
        //url: "http://172.16.89.50/ServidorPHP/eliminarPorCedula.php",			
        //url: "http://192.168.43.247/ServidorPHP/eliminarPorCedula.php",
        url: endpoint+"ServidorPHP/eliminarPorCedula.php",
        //url: "http://192.168.1.103/ServidorPHP/eliminarPorCedula.php",
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
    $("#txtApellido").val("");
    $("#txtDireccion").val("");
    $("#txtTelefono").val("");
    $("#txtEmail").val("");
}//fin funcion limpiarCajasTexto