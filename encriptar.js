function encriptar_texto(parrafo) {
    // Reemplazar cada vocal según las reglas especificadas
    parrafo = parrafo.replace(/e/g, 'enter');
    parrafo = parrafo.replace(/i/g, 'imes');
    parrafo = parrafo.replace(/a/g, 'ai');
    parrafo = parrafo.replace(/o/g, 'ober');
    parrafo = parrafo.replace(/u/g, 'ufat');

    return parrafo;
}

function traducir_texto(parrafo){
        // Reemplazar cada palabra según las reglas especificadas
        parrafo = parrafo.replace(/enter/g, 'e');
        parrafo = parrafo.replace(/imes/g, 'i');
        parrafo = parrafo.replace(/ai/g, 'a');
        parrafo = parrafo.replace(/ober/g, 'o');
        parrafo = parrafo.replace(/ufat/g, 'u');
    
        return parrafo;
}

function encriptar(){
    var txt_contenido = document.getElementById('Id_texto').value.trim();
    if (txt_contenido=="") {
        document.getElementById("id_original").innerHTML='<h3> !! No hay texto para encriptar !!</h3>';
    } else {        
        try {
            let parrafo = document.getElementById('Id_texto').value;
            var texto = encriptar_texto(parrafo);
            document.getElementById('Id_encriptado').value=texto;
            console.log(texto);
        
            document.getElementById('Id_texto').style.visibility="hidden";
            document.getElementById('bto_borrar').style.visibility="hidden";
            document.getElementById('bto_copiar').style.visibility="hidden";
            document.getElementById('bto_encriptar').style.visibility ="hidden";
            document.getElementById('Id_encriptado').style.visibility="visible";
            document.getElementById('bto_borrar_dos').style.visibility="visible";
            document.getElementById('bto_copiar_dos').style.visibility="visible";
            document.getElementById('bto_traducir').style.visibility ="visible";
        
            document.getElementById("id_original_dos").innerHTML='';
            document.getElementById("id_original").innerHTML='<img src="img/exito.png" text-align="center" width="150px" heigth="auto"/><h2>Encriptado Exitoso !!!</h2>';

        } catch (err) {
            console.error("Error al encriptar el texto:", err);
        }
    }
}

function traducir(){
    var txt_contenido = document.getElementById('Id_encriptado').value.trim();
    if (txt_contenido=="") {
        document.getElementById("id_original_dos").innerHTML='<h3> !! No hay texto para traducir !!</h3>';
    } else {
        try {
            let parrafo = document.getElementById('Id_encriptado').value;
            var texto = traducir_texto(parrafo);
            document.getElementById('Id_texto').value=texto;
            console.log(texto);

            document.getElementById('Id_encriptado').style.visibility="hidden";
            document.getElementById('bto_borrar_dos').style.visibility="hidden";
            document.getElementById('bto_copiar_dos').style.visibility="hidden";
            document.getElementById('bto_traducir').style.visibility ="hidden";
            document.getElementById('Id_texto').style.visibility="visible";
            document.getElementById('bto_borrar').style.visibility="visible";
            document.getElementById('bto_copiar').style.visibility="visible";
            document.getElementById('bto_encriptar').style.visibility ="visible";

            document.getElementById("id_original").innerHTML='';
            document.getElementById("id_original_dos").innerHTML='<img src="img/exito.png" text-align="center" width="150px" heigth="auto"/><h2>Tradución Exitosa !!!</h2>';

        } catch (err) {
            console.error("Error al traducir el texto",err)
        }
    }
}

function borrar_texto_original(){
    document.getElementById('Id_texto').value = "";
}

function borrar_encriptado_original(){
    document.getElementById('Id_encriptado').value="";
}

function copiarAlPortapapeles(texto) {
    // Crea un elemento de texto temporal en el DOM
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;
  
    // Asegúrate de que el elemento sea visible y esté seleccionado
    elementoTemporal.style.position = "fixed";
    document.body.appendChild(elementoTemporal);
    elementoTemporal.focus();
    elementoTemporal.select();
  
    // Intenta copiar el texto al portapapeles
    try {
      var exito = document.execCommand("copy");
      var mensaje = exito ? "¡Texto copiado al portapapeles!" : "¡No se pudo copiar el texto!";
      console.log(mensaje);
    } catch (err) {
      console.error("Error al intentar copiar el texto:", err);
    }
  
    // Elimina el elemento temporal
    document.body.removeChild(elementoTemporal);
  }
  
  function copiar_texto(){
    var texto = document.getElementById('Id_texto').value;
    copiarAlPortapapeles(texto);
  }

  function copiar_encriptado(){
    var texto = document.getElementById('Id_encriptado').value;
    copiarAlPortapapeles(texto);
  }

function reset(){
    document.getElementById('Id_texto').style.visibility="visibility";
    document.getElementById('Id_texto').value="";
    document.getElementById('bto_borrar').style.visibility="visibility";
    document.getElementById('bto_copiar').style.visibility="visibility";
    document.getElementById('bto_encriptar').style.visibility ="visibility";
    document.getElementById('Id_encriptado').style.visibility="visibility";
    document.getElementById('Id_encriptado').value="";
    document.getElementById('bto_borrar_dos').style.visibility="visibility";
    document.getElementById('bto_copiar_dos').style.visibility="visibility";
    document.getElementById('bto_traducir').style.visibility ="visibility";

}