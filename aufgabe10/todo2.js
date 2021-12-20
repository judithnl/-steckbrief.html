window.addEventListener("load", function () {
    //variables
    var index = 0;
    var open = 0;
    var erledigt = 0;
    var listenelement = document.createElement("li");
    var inputtodo = document.querySelector("input");
    var trashbutton = document.createElement("button");
    var done = document.createElement("button");
    var plus = document.createElement("button");
    var liste = document.createElement("ul");
    var viereck = document.createElement("button");
    //funktion add task
    function hinzufuegen() {
        //classlists
        listenelement.classList.add("text");
        trashbutton.classList.add("trash");
        done.classList.add("fa-check");
        plus.classList.add("add");
        liste.classList.add("liste");
        inputtodo.classList.add("input");
        viereck.classList.add("viereck");
        //appendchild
        liste.appendChild(listenelement);
        listenelement.appendChild(done);
        listenelement.appendChild(trashbutton);
        listenelement.appendChild(viereck);
        listenelement.innerHTML = inputtodo.value;
        inputtodo.value = "";
        trashbutton.setAttribute("class", "fas fa-trash-alt");
        done.setAttribute("class", "fa fa-check");
        viereck.setAttribute("class", "far fa-square");
        document.querySelector(".liste").appendChild(liste);
        document.querySelector(".liste").appendChild(trashbutton);
        document.querySelector(".liste").appendChild(done);
        document.querySelector(".liste").appendChild(viereck);
        //intotal
        index++;
        open++;
        document.querySelector("h2").innerHTML = index + " in total.";
        document.querySelector(".open").innerHTML = open + " still open.";
        document.querySelector(".erledigt").innerHTML = erledigt + " already done.";
        //checkdelete
        trashbutton.addEventListener("click", function () {
            liste.removeChild(listenelement);
            trashbutton.style.opacity = "0%";
            viereck.style.opacity = "0%";
            done.style.opacity = "0%";
            index--;
            open--;
            document.querySelector("h2").innerHTML = index + " in total.";
        });
        viereck.addEventListener("click", function () {
            if (done.style.opacity != "100%") {
                done.style.opacity = "100%";
                open--;
                erledigt++;
            }
        });
        /*viereck.addEventListener("click", function(){
            if(done.style.opacity="100%"){
                done.style.opacity="0%";
            }
        })*/
    }
    //funktionen callen
    document.querySelector(".fas").addEventListener("click", function () {
        hinzufuegen();
    });
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            hinzufuegen();
        }
    });
    //artyom erstellen
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle ToDo *"],
        smart: true,
        action: function (i, wildcard) {
            var neueAufgabe = document.createElement("li");
            neueAufgabe.innerHTML = wildcard;
            liste.appendChild(neueAufgabe);
            document.querySelector("input").value = "";
            var haken = document.createElement("div");
            var txt = document.createTextNode("");
            haken.appendChild(txt);
            neueAufgabe.appendChild(haken);
            haken.classList.add("check");
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }
            // abhaken
            var abhaken = document.getElementsByClassName("check");
            for (i = 0; i < abhaken.length; i++) {
                abhaken[i].onclick = function () {
                    var div = this.parentElement;
                    div.className = "checked";
                };
            }
            //add trash
            var txt2 = document.createTextNode("\u00D7");
            trashbutton.className = "trashbutton";
            trashbutton.appendChild(txt2);
            neueAufgabe.appendChild(trashbutton);
            trashbutton.classList.add("delete");
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }
            //trashbutton
            var loeschen = document.getElementsByClassName("delete");
            for (i = 0; i < loeschen.length; i++) {
                loeschen[i].onclick = function () {
                    var div = this.parentElement;
                    div.style.display = "none";
                };
            }
        }
    });
    //artyom funktion
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    //funktion callen
    startContinuousArtyom();
});
//# sourceMappingURL=todo2.js.map