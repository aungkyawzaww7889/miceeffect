const getcontainer = document.querySelector('.container');
const geticon = document.getElementById('icon');
const gettextspace = document.querySelector('.textspace');



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition;


geticon.addEventListener('click',()=>{
    // console.log('hay');
    getrec.start();

    getrec.addEventListener('result',(e)=>talking(e));

});


function talking(ele){
    // console.log(ele.results[0][0].transcript);

    let miceresults = ele.results[0][0].transcript;

    gettextspace.innerText = miceresults;

    getrec.stop();

}