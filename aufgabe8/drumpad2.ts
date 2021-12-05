var ton:HTMLAudioElement[]=[new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"), 
new Audio("./assets/F.mp3"), new Audio('./assets/G.mp3'), new Audio("./assets/hihat.mp3"), 
new Audio("./assets/kick.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3"), 
new Audio("./assets/snare.mp3")];

document.querySelector(".b1").addEventListener("click", function (): void { playSample(ton[4]);  });
document.querySelector(".b2").addEventListener("click", function (): void { playSample(ton[5]); });
document.querySelector(".b3").addEventListener("click", function (): void { playSample(ton[8]);  });
document.querySelector(".p1").addEventListener("click", function (): void { playSample(ton[0]);  });
document.querySelector(".p2").addEventListener("click", function (): void { playSample(ton[1]);  });
document.querySelector(".p3").addEventListener("click", function (): void { playSample(ton[2]); });
document.querySelector(".p4").addEventListener("click", function (): void { playSample(ton[3]);  });
document.querySelector(".g1").addEventListener("click", function (): void { playSample(ton[6]);  });
document.querySelector(".g2").addEventListener("click", function (): void { playSample(ton[7]); });

document.querySelector("#play").addEventListener("click", function (): void {playBeat(); });
document.querySelector("#delete").addEventListener("click", function (): void {deleteall(); });
document.querySelector("#shuffle").addEventListener("click", function (): void {random(); });

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
 
var key: number = 0;
var beat: HTMLAudioElement = new Audio();

var play: HTMLElement = document.querySelector("#play");

function playSample(AudioFile): void {
var sound: HTMLAudioElement = new Audio(AudioFile);
sound.play();
}




function playBeat(): void {
  if (play.getAttribute("class") == "fas fa-stop") {
      play.setAttribute("class", "fas fa-play");
      
  }
  else {
      play.setAttribute("class", "fas fa-stop");
  
      if (play.getAttribute("class") == "fas fa-play") {ton.push(); }
  }
}

function randomnum(max: number): number {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

function random(): void {
    
    for (var i: number = 0; i <= ton.length; i++) {
      
        
    }
}

function deleteall(): void {
  ton.length = 0;
}


      




