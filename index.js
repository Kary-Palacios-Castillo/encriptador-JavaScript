function encriptar(){
    let texto = document.getElementById("texto-Encriptador").value;
    let tituloTxt = document.getElementById("tituloTexto");
    let parrafo = document.getElementById("parrafo");
    let imagen = document.getElementById("imagen");


    let textoCifrado = texto 
        .replace (/e/gi, "enter")
        .replace (/i/gi, "imes")
        .replace (/a/gi, "ai")
        .replace (/o/gi, "ai")
        .replace (/u/gi, "ufat");


        if (texto.length !=0){
            document.getElementById("texto-Encriptador").value = textoCifrado;
            tituloTxt.textContent = "Texto encriptado con éxito";
            parrafo.textContent="";
            imagen.src = "./img/exito.png";
        }else{
            imagen.src = "./img/Muñeco.png";
            tituloTxt.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent="Ingresa el texto que deseas encriptar o desencriptar";
            alert("Debes ingresar algún texto");
        }

}