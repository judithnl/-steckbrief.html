window.addEventListener("load", function () {
    var index = 0;
    //funktion add task
    function hinzufuegen() {
        //variables
        var todo = document.createElement("div");
        var listenelement = document.createElement("li");
        var inputtodo = document.querySelector("input");
        var trashbutton = document.createElement("button");
        var done = document.createElement("button");
        var plus = document.createElement("button");
        var liste = document.createElement("ul");
        //classlists
        todo.classList.add("todo");
        listenelement.classList.add("text");
        trashbutton.classList.add("trash");
        done.classList.add("fa-check");
        plus.classList.add("add");
        liste.classList.add("liste");
        inputtodo.classList.add("input");
        //appendchild
        liste.appendChild(listenelement);
        listenelement.appendChild(done);
        listenelement.appendChild(trashbutton);
        listenelement.innerHTML = inputtodo.value;
        inputtodo.value = "";
        trashbutton.setAttribute("class", "fas fa-trash-alt");
        done.setAttribute("class", "fa fa-check");
        document.querySelector(".liste").appendChild(liste);
        document.querySelector(".liste").appendChild(trashbutton);
        document.querySelector(".liste").appendChild(done);
        //intotal
        index++;
        document.querySelector("h2").innerHTML = index + " in total.";
        //checkdelete
        trashbutton.addEventListener("click", function () {
            liste.removeChild(listenelement);
            index--;
        });
        done.addEventListener("click", function () {
            if (done.style.opacity != "100%") {
                done.style.opacity = "100%";
            }
        });
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
});
//# sourceMappingURL=todov2.js.map