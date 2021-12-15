window.addEventListener("load", function () {
    var index = 0;
    //funktion add task
    function hinzufügen() {
        //variables
        var todo = document.createElement("div");
        var text = document.createElement("li");
        var trashbutton = document.createElement("button");
        var done = document.createElement("button");
        var plus = document.createElement("button");
        //classlists
        todo.classList.add("todo");
        text.classList.add("text");
        trashbutton.classList.add("trash");
        done.classList.add("check");
        plus.classList.add("fas fa-plus");
        //appendchild
        plus.appendChild(todo);
        todo.appendChild(text);
        todo.appendChild(trashbutton);
        todo.appendChild(done);
        document.querySelector(".liste").appendChild(todo);
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
            click.classList.supports("checked");
        }
    }
    //funktionen callen
    document.querySelector(".add").addEventListener("click", function () {
        hinzufügen();
    });
    document.querySelector(".liste").addEventListener("click", function () {
        checkdelete();
    });
});
//# sourceMappingURL=todov2.js.map