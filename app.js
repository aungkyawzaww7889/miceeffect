const getcontainer = document.querySelector('.container');
const geticon = document.getElementById('icon');
const gettextspace = document.querySelector('.textspace');
const textbody = document.querySelector('.textbody');
const textspace = document.querySelector('.textspace');




window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition;


geticon.addEventListener('click',()=>{
    // console.log('hay');
    getrec.start();

    getrec.addEventListener('result',(e)=>talking(e));
    // getcontainer.classList.add('active');

});



let idx = 0;    

function talking(ele){
    // console.log(ele.results[0][0].transcript);

    let miceresults = ele.results[0][0].transcript;
    let textes = miceresults;
    // textspace.innerText = textes;

    function counttext(){
        // console.log('hay');
        // console.log(textes);
        // console.log(textes.slice(0,idx));
        textspace.innerText = textes.slice(0,idx);

        idx++
        if(idx > textes.length){
            idx = textes.length;
            // window.location.reload();

        }

       
        setTimeout(function(){
            counttext();
            getcontainer.classList.remove('active');

        },100);

    

    }

    counttext();

    getrec.stop();

}

// setTimeout(function(){
//     window.location.reload();
// },9000);