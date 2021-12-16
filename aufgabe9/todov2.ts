window.addEventListener("load", function(){

let index:number=0;


//funktion add task
function hinzufügen(){
//variables
    const todo:HTMLDivElement=document.createElement("div");
    const listenelement:HTMLLIElement=document.createElement("li");
    const inputtodo:HTMLInputElement=document.createElement("input");
    const trashbutton:HTMLButtonElement=document.createElement("button");
    const done:HTMLButtonElement=document.createElement("button");
    const plus:HTMLButtonElement=document.createElement("button");
    const liste=document.querySelector("ul");

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
document.querySelector("h2").innerHTML=index+ " in total.";


}


//funktion abhaken und löschen
function checkdelete(){
    let click:Element=event.target as Element;

    if (click.classList[0]=="trash"){
        click.parentElement.remove();
        index--;
       document.querySelector("h2").innerHTML=index+" in total.";
    }

    if(click.classList[0]=="check"){
        click.classList.add("abgehakt");
    }

    
   
}

//funktionen callen
 document.querySelector(".fas fa-plus").addEventListener("click", function(){
            hinzufügen();
        })
document.querySelector(".liste").addEventListener("click",function(){
    checkdelete();
})

document.addEventListener("keydown", function(event:KeyboardEvent){
    if(event.keyCode==13){hinzufügen()}
})
})

