/* Nombre       : Alexander Mondragon Valencia
 * Fecha        : 2012
 * Descripcion  : Clase que permite autenticar en el dispositivo usando PhoneGap, Bajo Android
 */

//incluye el paquete donde esta contenida la clase Estudiante
package diplo.phonegap;

//importa libreria para que phonegap trabaje co Android
import org.apache.cordova.DroidGap;


//importa libreria para permitir interaccion con tipos de datos primitivos
import android.os.Bundle;

//Define la clase estudiante que era de DroidGap (indica que se usara Android con phonegap)
public class GestionarEstudiante extends DroidGap {
    
	//define metodo onCreate que define el aranque inicial de la aplicacion
    public void onCreate(Bundle savedInstanceState) {
    	
    	//incova clase padre con super
    	//savedInstanceState: indica a la aplicacion que regrse a su estado anterior 
        super.onCreate(savedInstanceState);
        //carga un url con la pagina html que se desea como primer formulario
        super.loadUrl("file:///android_asset/www/index.html");
        
    }//fin del metodo onCreate
    
}//fin de la clase Estudiante