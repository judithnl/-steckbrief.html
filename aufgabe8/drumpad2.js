var ton = [new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"),
    new Audio("./assets/F.mp3"), new Audio('./assets/G.mp3'), new Audio("./assets/hihat.mp3"),
    new Audio("./assets/kick.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3"),
    new Audio("./assets/snare.mp3")];
ton: HTMLAudioElement;
function play2(AudioFile) {
    var ton = new Audio(AudioFile);
    ton.play();
}
;
var play = document.querySelector("#play");
document.querySelector(".b1").addEventListener("click", function () { play2(ton[4]); });
document.querySelector(".b2").addEventListener("click", function () { play2(ton[5]); });
document.querySelector(".b3").addEventListener("click", function () { play2(ton[8]); });
document.querySelector(".p1").addEventListener("click", function () { play2(ton[0]); });
document.querySelector(".p2").addEventListener("click", function () { play2(ton[1]); });
document.querySelector(".p3").addEventListener("click", function () { play2(ton[2]); });
document.querySelector(".p4").addEventListener("click", function () { play2(ton[3]); });
document.querySelector(".g1").addEventListener("click", function () { play2(ton[6]); });
document.querySelector(".g2").addEventListener("click", function () { play2(ton[7]); });
document.querySelector("#play").addEventListener("click", function () { playBeat(); });
document.querySelector("#delete").addEventListener("click", function () { deleteall(); });
document.querySelector("#shuffle").addEventListener("click", function () { random(); });
document.querySelector(".play").addEventListener("click", function () {
    setInterval(function () {
        ton[5].play();
    }, 300);
    setInterval(function () {
        ton[1].play();
    }, 600);
    setInterval(function () {
        ton[2].play();
    }, 630);
    setInterval(function () {
        ton[7].play();
    }, 6000);
});
var key = 0;
var beat = new Audio();
function playBeat() {
    if (play.getAttribute("class") == "fas fa-stop") {
        play.setAttribute("class", "fas fa-play");
    }
    else {
        play.setAttribute("class", "fas fa-stop");
        if (play.getAttribute("class") == "fas fa-play") {
            ton.push();
        }
    }
}
function randomnum(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}
function random() {
    for (var i = 0; i <= ton.length; i++) {
    }
}
function deleteall() {
    ton.length = 0;
}
//# sourceMappingURL=drumpad2.js.map