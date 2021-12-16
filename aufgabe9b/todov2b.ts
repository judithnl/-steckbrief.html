

window.addEventListener("load", function(){


const input:HTMLInputElement=document.querySelector("input");
const liste:HTMLUListElement=document.querySelector("ul");
const listenelement:HTMLLIElement=document.querySelector("li");
const done:HTMLDivElement=document.createElement("div");
const kreis:HTMLButtonElement=document.createElement("button");
const trashbutton:HTMLButtonElement=document.createElement("button");
const plus:HTMLButtonElement=document.createElement("button");

let index:number=0;

input.classList.add("input");
liste.classList.add("liste");
listenelement.classList.add("listenelement");
done.classList.add("done");
kreis.classList.add("kreis");
trashbutton.classList.add("trashbutton");
plus.setAttribute("class","fas fa-plus");

//funktion count
function count(){
document.querySelector(".count").innerHTML= String(index);
}

//function add
function add(){
    index ++;
    count();

    liste.innerHTML=input.value;

    liste.appendChild(kreis);
    liste.appendChild(done);
    liste.appendChild(trashbutton);

    kreis.setAttribute("class","fas fa-check");
    trashbutton.setAttribute("class", "fa fa trash-o");

    listenelement.appendChild(liste);

    input.value="";

    trashbutton.addEventListener("click",function(){
       listenelement.removeChild(liste); 
       index--;
       count();

    })

    done.addEventListener("click",function(){
        if(done.style.opacity !="100%"){
            done.style.opacity="100%";
        }
    })

    document.addEventListener("keydown",function(event:KeyboardEvent){
        if(event.keyCode==13){
            add();
        }
    })

}

plus.addEventListener("click", function(){
    add();
})

})