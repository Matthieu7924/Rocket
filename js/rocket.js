'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
document.addEventListener ('DOMContentLoaded' , function() {
    let btnfire = document.getElementById('firing-button');
    let time = document.querySelector('#billboard span')
    let rampe = document.getElementById('launching-ramp');
    let rocket = document.getElementById('rocket');
    let btnstop = document.getElementById('stop-button');
    let btnreset = document.getElementById('reset-button');
    let counts = 10;
    let ch;
    btnstop.style.display ="none";

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/


// time2.write("ici");

function rebours (){ 
        btnstop.style.display = "block"
        rocket.src="./images/rocket2.gif";
        counts= counts-1 
        if (counts<=0) {
            btnstop.style.display ="none";
            counts = 0;
            rocket.src="./images/rocket3.gif";
            rocket.className="tookOff"
        } 
        time.innerText = counts
        ch = setTimeout(rebours, 1000)

        btnfire.setAttribute("disabled", true);
        btnfire.className='disabled';
 }

// document.style.backgroundImage="url('./images/')";


btnfire.addEventListener('click',rebours)


function stop(){
    window.clearTimeout(ch);}

btnstop.addEventListener('click',stop);

function zero(){
    stop()
    rocket.src="./images/rocket1.png";
    btnfire.setAttribute("disabled", false);
    rocket.classList.remove('tookOff');
    btnfire.classList.remove('disabled');
    counts=10;
    time.innerText = counts;

}


btnreset.addEventListener('click',zero)

function background(){
for (let i =0;i<150;i++){
    const para = document.createElement("div");//création div
    para.classList.add('star');//ajout class star
    
    let tab = ['big', 'normal', 'tiny'];
    para.classList.add(Math.random()*tab.length);//ajout d'une classe aléatoire (tiny normal ou big) avec Math.random
    para.style.left= Math.random()+px//création position x aléatoire Math.random style.lef
    para.style.top= Math.random()+px//création position y aléatoire Math.random style.top

    document.body.appendChild(para);
    }
}

background()

})




/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
