var ton:HTMLAudioElement[]=[new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"), 
new Audio("./assets/F.mp3"), new Audio('./assets/G.mp3'), new Audio("./assets/hihat.mp3"), 
new Audio("./assets/kick.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3"), 
new Audio("./assets/snare.mp3")];

window.addEventListener("load", function playSample(){
document.querySelector(".b1").addEventListener("click", function (){ton[4].play()});
document.querySelector(".b2").addEventListener("click", function (){ton[5].play()});
document.querySelector(".b3").addEventListener("click", function (){ton[8].play()});
document.querySelector(".p1").addEventListener("click", function (){ton[0].play()});
document.querySelector(".p2").addEventListener("click", function (){ton[1].play()});
document.querySelector(".p3").addEventListener("click", function (){ton[2].play()});
document.querySelector(".p4").addEventListener("click", function (){ton[3].play()});
document.querySelector(".g1").addEventListener("click", function (){ton[6].play()});
document.querySelector(".g2").addEventListener("click", function (){ton[7].play()});
 
}
);