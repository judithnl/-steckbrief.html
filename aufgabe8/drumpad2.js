window.addEventListener('load', function () {
    //audios
    var ton = [new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"),
        new Audio("./assets/F.mp3"), new Audio('./assets/G.mp3'), new Audio("./assets/hihat.mp3"),
        new Audio("./assets/kick.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3"),
        new Audio("./assets/snare.mp3")];
    var sound = [new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"),
        new Audio("./assets/F.mp3"), new Audio('./assets/G.mp3'), new Audio("./assets/hihat.mp3"),
        new Audio("./assets/kick.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3"),
        new Audio("./assets/snare.mp3")];
    //playfunktion
    function play2(ton2) {
        ton2.play();
    }
    ;
    var index = 0;
    var beatplaying = false;
    //soundboard
    document.querySelector(".b1").addEventListener("click", function () { play2(ton[4]); });
    document.querySelector(".b2").addEventListener("click", function () { play2(ton[5]); });
    document.querySelector(".b3").addEventListener("click", function () { play2(ton[8]); });
    document.querySelector(".p1").addEventListener("click", function () { play2(ton[0]); });
    document.querySelector(".p2").addEventListener("click", function () { play2(ton[1]); });
    document.querySelector(".p3").addEventListener("click", function () { play2(ton[2]); });
    document.querySelector(".p4").addEventListener("click", function () { play2(ton[3]); });
    document.querySelector(".g1").addEventListener("click", function () { play2(ton[6]); });
    document.querySelector(".g2").addEventListener("click", function () { play2(ton[7]); });
    //buttons
    document.querySelector("#play").addEventListener("click", function () {
        beatplaying = true;
        document.querySelector("#stop").classList.add("isHidden");
        document.querySelector("#play").classList.remove("isHidden");
        document.querySelector("#stop").addEventListener("click", function () {
            beatplaying = false;
            ton.length = 0;
            document.querySelector("#stop").classList.add("isHidden");
            document.querySelector("#play").classList.remove("isHidden");
        });
        if (beatplaying = true) {
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
        }
        else {
            beatplaying = false;
            ton.length = 0;
        }
    });
    document.querySelector("#delete").addEventListener("click", function () { sound.length = 0; });
    document.querySelector("#shuffle").addEventListener("click", function () {
        ton.length = 0;
        setInterval(function () {
            play2(sound[index]);
            index = Math.floor(Math.random() * 9);
        }, 500);
    });
});
//# sourceMappingURL=drumpad2.js.map