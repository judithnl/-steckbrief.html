window.addEventListener("load", function () {
    var index = 0;
    //funktion add task
    function hinzufügen() {
        //variables
        var todo = document.createElement("div");
        var listenelement = document.createElement("li");
        var inputtodo = document.createElement("input");
        var trashbutton = document.createElement("button");
        var done = document.createElement("button");
        var plus = document.createElement("button");
        var liste = document.querySelector("ul");
        //classlists
        todo.classList.add("todo");
        listenelement.classList.add("text");
        trashbutton.classList.add("trash");
        done.classList.add("check");
        plus.classList.add("fas fa-plus");
        liste.classList.add("liste");
        //appendchild
        inputtodo.appendChild(liste);
        liste.appendChild(listenelement);
        listenelement.appendChild(done);
        listenelement.appendChild(trashbutton);
        listenelement.appendChild(done);
        listenelement.innerHTML = inputtodo.value;
        document.querySelector(".liste").appendChild(liste);
        //intotal
        index++;
        document.querySelector("h2").innerHTML = index + " in total.";
    }
    //funktion abhaken und löschen
    function checkdelete() {
        var click = event.target;
        if (click.classList[0] == "trash") {
            click.parentElement.remove();
            index--;
            document.querySelector("h2").innerHTML = index + " in total.";
        }
        if (click.classList[0] == "check") {
            click.classList.add("abgehakt");
        }
    }
    //funktionen callen
    document.querySelector(".fas fa-plus").addEventListener("click", function () {
        hinzufügen();
    });
    document.querySelector(".liste").addEventListener("click", function () {
        checkdelete();
    });
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            hinzufügen();
        }
    });
});
//# sourceMappingURL=todov2.js.map