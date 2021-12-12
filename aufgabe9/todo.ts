import { count, countReset } from "console";

window.addEventListener("load",function(){
let index:number=0;

let text=document.createElement("p");
let input:HTMLInputElement=document.querySelector("#input");
let add=document.querySelector("#add");
let trash=document.querySelector("#trash");

let done=document.createElement("div");
let haken=document.createElement("button");

let trashbutton=document.createElement("button");

//funktion zähler
function count(){
    document.querySelector("#gesamt").innerHTML=String(index);
}

//zähler
add.addEventListener("click", function(){
    index++
    count()


//eingabefeld
text.classList.add("text");
text.innerText=input.value;
trash.appendChild(text);

//done

done.setAttribute("class", "fas fa-circle");
trash.appendChild(done);

haken.setAttribute("class", "fas fa-check");
trash.appendChild(haken);

//löschen
trashbutton.addEventListener("click",function(){
    trash.removeChild(text);
    trash.removeChild(done);
    trash.removeChild(haken);
    trash.removeChild(trashbutton);

    index--;
    count();
})
//abhaken
haken.addEventListener("click",function(){
    if(haken.style.opacity !="100%"){
        haken.style.opacity="100%";
    }


})
})

});