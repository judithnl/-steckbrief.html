
window.addEventListener("load",function(){
let index:number=0;

let text=document.createElement("p");
let input:HTMLInputElement=document.querySelector("#input");
let add=document.querySelector("#add");




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
    add.appendChild(notdone);
    notdone.classList.add("far", "fa-circle");
   

    notdone.addEventListener("click", function () {
        notdone.classList.add("#");
        done.classList.remove("#");
    });
   
    var done = document.createElement("cb");
   add.appendChild(done);
    done.classList.add("far", "fa-check-circle", "#");
   

    done.addEventListener("click", function () {
        done.classList.add("#");
        done.classList.remove("#");
    });
});
});

