let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul")


btn.addEventListener("click", function(){
    console.log(inp.value);
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    
   
    item.append(delbtn);
    ul.appendChild(item);
    inp.value = "";
})
ul.addEventListener("click", function(event){
    console.log(event.target.nodeName);
    if(event.target.nodeName== "BUTTON"){
        let listitem =event.target.parentElement;
        listitem.remove();
        console.log("delete");
    }
   
});
