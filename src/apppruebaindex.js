//todos los botones van aqui y todos los id 

let texaNum;                                             //TEXTO CONVERTIDO A NUMERO POR LENGHT

let botCif=document.getElementById("codificar");             //BOTON CIFRAR

let botDec=document.getElementById("decodificar");               //BOTON DECODIFICAR
 //boton  cifrar con metodo .addEventListener("click",event=>{
    /*let encodeValueClick=window.cipher.encode(
        botNum.value,
       textIn.value,
    );
    console.log(encodeValueClick);
   string.innerHTML=encodeValueClick;*/
 botCif.addEventListener("click",createWithCipherOffset);
   //texCifra.value=botCif.addEventListener("click",encode)

   //botDec.addEventListener("click", decode)
   botDec.addEventListener("click",createWithCipherOffset);
  
// texarea de texto codificado
//<button id="decodificar">DECODIFICAR</button>

//<textarea rows="10" id="decifrado" placeholder="Este es tu texto">
//</textarea>
