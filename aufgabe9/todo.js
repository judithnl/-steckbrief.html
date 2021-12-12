"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
window.addEventListener("load", function () {
    var index = 0;
    var text = document.createElement("p");
    var input = document.querySelector("#input");
    var add = document.querySelector("#add");
    var trash = document.querySelector("#trash");
    var done = document.createElement("div");
    var haken = document.createElement("button");
    var trashbutton = document.createElement("button");
    //funktion zähler
    function count() {
        document.querySelector("#gesamt").innerHTML = String(index);
    }
    //zähler
    add.addEventListener("click", function () {
        index++;
        count();
        //eingabefeld
        text.classList.add("text");
        text.innerText = input.value;
        trash.appendChild(text);
        //done
        done.setAttribute("class", "fas fa-circle");
        trash.appendChild(done);
        haken.setAttribute("class", "fas fa-check");
        trash.appendChild(haken);
        //löschen
        trashbutton.addEventListener("click", function () {
            trash.removeChild(text);
            trash.removeChild(done);
            trash.removeChild(haken);
            trash.removeChild(trashbutton);
            index--;
            count();
        });
        //abhaken
        haken.addEventListener("click", function () {
            if (haken.style.opacity != "100%") {
                haken.style.opacity = "100%";
            }
        });
    });
});
//# sourceMappingURL=todo.js.map