window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle ToDo *, neues todo*, neue Aufgabe*, erstelle Aufgabe*"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neues ToDo wird erstellt: " + wildcard);
        }
    });
    function todoartyom() {
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
    todoartyom();
});
//# sourceMappingURL=artyom.js.map