 var ton:HTMLAudioElement[]=[new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"), 
new Audio("./assets/F.mp3"), new Audio('./assets/G.mp3'), new Audio("./assets/hihat.mp3"), 
new Audio("./assets/kick.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3"), 
new Audio("./assets/snare.mp3")]; 

//playfunktion
function play2(ton:HTMLAudioElement):void

{

ton.play();
}

var playsound:boolean=false;

//funktion playbutton
function playbutton(){
playsound=true;
document.querySelector("#play").setAttribute("class","fas fa-play");
}

//funktion stopbutton
function stopbutton(){
    playsound=false;
    document.querySelector("#stop").setAttribute("class","fas fa-stop")
}

//funktion deletebutton
function deletebutton(){
    playsound=false
    document.querySelector("#delete").setAttribute("class", "fas fa-trash-alt")
    ton=[]
}

//funktion shuffle
function shuffle(){
    
}


//soundboard
document.querySelector(".b1").addEventListener("click", function (): void { play2(ton[4]);  });
document.querySelector(".b2").addEventListener("click", function (): void { play2(ton[5]); });
document.querySelector(".b3").addEventListener("click", function (): void { play2(ton[8]);  });
document.querySelector(".p1").addEventListener("click", function (): void { play2(ton[0]);  });
document.querySelector(".p2").addEventListener("click", function (): void { play2(ton[1]);  });
document.querySelector(".p3").addEventListener("click", function (): void { play2(ton[2]); });
document.querySelector(".p4").addEventListener("click", function (): void { play2(ton[3]);  });
document.querySelector(".g1").addEventListener("click", function (): void { play2(ton[6]);  });
document.querySelector(".g2").addEventListener("click", function (): void { play2(ton[7]); });

//buttons
document.querySelector("#play").addEventListener("click", function (): void {playbutton(); });
document.querySelector("#delete").addEventListener("click", function (): void {deletebutton(); });
document.querySelector("#shuffle").addEventListener("click", function (): void {shuffle(); });

document.querySelector(".play").addEventListener("click", function(){
    setInterval(function(){
        ton[5].play();
    }, 300);
    setInterval(function(){
        ton[1].play();
    }, 600);
    setInterval(function(){
        ton[2].play();
    }, 630);
    setInterval(function(){
        ton[7].play();
    }, 6000);
});
 
