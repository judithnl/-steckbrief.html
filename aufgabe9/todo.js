window.addEventListener("load", function () {
    var index = 0;
    var text = document.createElement("li");
    var input = document.createElement("input");
    var add = document.querySelector("#add");
    add.addEventListener("click", function () {
        input.innerHTML = input.value;
        add.appendChild(text);
        input.value = "";
        index = index + 1;
        document.querySelector("h2").innerHTML = index + " in total";
        var trash = document.createElement("l");
        add.appendChild(trash);
        trash.classList.add("far", "fa-trash-alt");
        trash.addEventListener("click", function () {
            input.classList.add("#");
            index = index - 1;
            document.querySelector("h2").innerHTML = index + " in total";
        });
        var notdone = document.createElement("cb");
        text.appendChild(notdone);
        notdone.classList.add("far", "fa-circle");
        notdone.addEventListener("click", function () {
            notdone.classList.add("#");
            done.classList.remove("#");
        });
        var done = document.createElement("cb");
        text.appendChild(done);
        text.classList.add("far", "fa-check-circle", "#");
        done.addEventListener("click", function () {
            done.classList.add("#");
            done.classList.remove("#");
        });
    });
});
//# sourceMappingURL=todo.js.map