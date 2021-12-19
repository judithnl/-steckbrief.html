declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle ToDo *, neues todo*, neue Aufgabe*, erstelle Aufgabe*"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neues ToDo wird erstellt: " + wildcard);
        }
    });
    
    function todoartyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    todoartyom();
    
});