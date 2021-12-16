window.addEventListener("load", function () {
    var input = document.querySelector("input");
    var liste = document.querySelector("ul");
    var listenelement = document.querySelector("li");
    var done = document.createElement("div");
    var kreis = document.createElement("button");
    var trashbutton = document.createElement("button");
    var plus = document.createElement("button");
    var index = 0;
    input.classList.add("input");
    liste.classList.add("liste");
    listenelement.classList.add("listenelement");
    done.classList.add("done");
    kreis.classList.add("kreis");
    trashbutton.classList.add("trashbutton");
    plus.setAttribute("class", "fas fa-plus");
    //funktion count
    function count() {
        document.querySelector(".count").innerHTML = String(index);
    }
    //function add
    function add() {
        index++;
        count();
        liste.innerHTML = input.value;
        liste.appendChild(kreis);
        liste.appendChild(done);
        liste.appendChild(trashbutton);
        kreis.setAttribute("class", "fas fa-check");
        trashbutton.setAttribute("class", "fa fa trash-o");
        listenelement.appendChild(liste);
        input.value = "";
        trashbutton.addEventListener("click", function () {
            listenelement.removeChild(liste);
            index--;
            count();
        });
        done.addEventListener("click", function () {
            if (done.style.opacity != "100%") {
                done.style.opacity = "100%";
            }
        });
        document.addEventListener("keydown", function (event) {
            if (event.keyCode == 13) {
                add();
            }
        });
    }
    plus.addEventListener("click", function () {
        add();
    });
});
//# sourceMappingURL=todov2b.js.map