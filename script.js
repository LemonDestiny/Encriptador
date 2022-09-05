const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
const subtitulo = document.querySelector(".ningunMensaje");
const parrafo = document.querySelector(".parrafo");
btnCopy.style.display = "none"




function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    btnCopy.style.display = "block";
    subtitulo.style.display = "none";
    parrafo.style.display = "none";
}




function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"],["i", "imes",], ["a", "ai",],["o", "ober",],["u", "ufat",]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0 ; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);

        }

    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    btnCopy.style.display = "block";
    subtitulo.style.display = "none";
    parrafo.style.display = "none";
}


function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e", "enter"],["i", "imes",], ["a", "ai",],["o", "ober",],["u", "ufat",]]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0 ; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }

    }
    return stringDesencriptada;
}

function copiar (){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto Copiado");

}


