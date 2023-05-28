function encriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    
    if (texto.length !=0){
    document.getElementById("imgResultado").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("input-texto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  
      
  }else{
      alert("Debes ingresar algún texto");
  }
  }
  
  function desencriptar() {
    var texto = document.getElementById("input-texto").value.toLowerCase();
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    
    if (texto.length !=0){
    document.getElementById("imgResultado").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("input-texto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";

    } else{
      alert("Debes ingresar algun texto");
    }
    
}




var $txtcopiado = document.getElementById("texto2"),
$btncopiado = document.getElementById("copiar");
//$copiado = document.getElementById("copiar");

$btncopiado.addEventListener("click", e =>{
    $txtcopiado.select();
    document.execCommand("copy");

    //$copiado.innerHTML="Copiado..."
    alert("Texto copiado correctamente");
    window.location.reload();


})
