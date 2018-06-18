  // .offset no tiene un valor fijo
//window.cipher = {
//codificar 
function encode(){
let texCifra ="";
//obtener el numero de letras en el texto ingresado por el usuario
//alert("encode");
let textIn=document.getElementById("textoInicial").value; //texIn=TEXTOINICIAL
//quitando espacios en blanco al texto
textIn=textIn.trimEnd();
//alert(textIn);
let botNum=document.getElementById("offset").value;       //BOTON NUMERO
botNum = parseInt(botNum);
//alert(botNum);
texaNum=textIn.length;
//alert("texaNum");
//para //contador//condicion//expresion final//sentencia 
//cree mi variable contador para almacenar el numero de veces que se llevara a cabo ese bucle
for (let contador=0;contador<texaNum;contador++) {
  //alert("for");
//ME DEVUELVE LA POSICION DE LA LETRA QUE INDIQUE EN EL CODIGO ASCII
//agregar la variable de donde se almacena mi texto
//indicarle  el numero de letras que forman mi texto
let posiAscii=textIn.charCodeAt(contador);
//posiascii en esta variable guardare la posicion obtenido en el codigo ascii

//en esta variable se guarda el numero que ocupa mi letra 
//actual en el codigo ascii mas el numero de desplazamiento
posiAscii+=botNum;
//alert("posiAscii: "+posiAscii);
//tomar la posicion desplazada que le corresponde a
// la letra y tomar la letra que ocupa ese lugar
//let nuePosAsc=posDesAsc;
if(posiAscii>255)
  posiAscii = posiAscii -255;
//alert("posiAscii: "+posiAscii);
//le entrego el numero de posicion de mi letra en el codigo ascii 
// y me devuelve la letra que ocupa ese numero
//se concatena el valor obtenido (+=)
//alert ("posiAscii= "+posiAscii);
texCifra+=String.fromCharCode(posiAscii);
//alert("Caracter cifrado: "+texCifra);
//alert("tescifra: "+texCifra)
//alert("texCifra");
}//llave de cierre de for
//alert("texCifra: "+texCifra );
return texCifra;

}//llave de cierre de encode

function decode(){
//dar a mi boton la funcion de decodificar

  
let botDec=document.getElementById("decodificar").value; //BOTON descifrar

//indicar l texto a decodificar
let texDecif=document.getElementById("descifrado").value; //texto descifrado

return texDecif;

}

function createWithCipherOffset(){


//
document.getElementById("cifrado").value = encode();           //TEXTO CIFRADO
document.getElementById("decifrado").value= decode();          //TEXTO DECIFRADO

}


//} //llave de window cipher













  

 