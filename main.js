var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
//agrega esta línea para que reconozca el español
recognition.lang="en-US";

var Textbox = document.getElementById("textbox");




function speak (){
   
    var synth = window.speechSynthesis;
    var Content = document.getElementById("textbox").value;
    //Vamos a remplazar speak_data=document.getElementById("textbox").value; para que diga "Toma la selfie en 5 segundos"
    speak_data=Content;
//intentar cambiar de TAvalue a texto entre comillas

    var utterThis = new SpeechSynthesisUtterance(speak_data); 
    utterThis.lang="en-US";
    utterThis.rate=1
    synth.speak(utterThis);

}

