function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
     .replace(/e/gi, "enter") 
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");

    if(texto.lenght !=0)  {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "texto encriptado con éxito";
      parrafo.textContent ="";
      muñeco.src = "./img/encriptado.jpg"; 
    }  
      else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Aún no se ha escrito un mensaje";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("debes ingresar algún texto");
    }                                                            

}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.lenght !=0) {
        document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "texto desencriptado con éxito";
      parrafo.textContent ="";
      muñeco.src = "./img/desencriptado.jpg";
    } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Aún no se ha escrito un mensaje";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("debes ingresar algún texto");
    }
}