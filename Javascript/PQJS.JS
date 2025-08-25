let para1 = document.createElement('p');
para1.innerText= "hii i am red";
para1.style.color = "red";
document.querySelector('body').append(para1);

let h3 = document.createElement("h3");
h3.innerText = "Hi i'm blue";
h3.style.color = "blue";
document.querySelector("body").append(h3);

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
h1.innerText="I'm in a div";
p.innerText="ME TOO";
document.querySelector("body").prepend(div);
div.style.border = "2px solid black";
div.style.background ="pink";
document.querySelector("div").append(h1);
document.querySelector("div").append(p);

//v -27
//q1
let input = document.createElement('input');
input.setAttribute("placeholder","username");
document.querySelector("body").append(input);
let btn1 = document.createElement("button");
btn1.innerText = "click me";
btn1.setAttribute('id','btn');
btn1.innerText = "click me";
document.querySelector('body').append(btn1);
document.querySelector("#btn").style.backgroundColor="blue";
document.querySelector("#btn").style.color="white";

let h1a = document.createElement('h1');
h1a.innerHTML ="<u>DOM Practice</u>";
h1a.style.color= "purple";
document.querySelector("body").append(h1a);

let parag = document.createElement('p');
document.querySelector("body").append(parag);
parag.innerHTML = "Apna Collage <b>Delta</b> Pratice";

let btn2 = document.querySelector(".btn");
console.dir(btn2);
function sayhellow(){
    alert("Hellow");
}

btn2.onclick = function (){
    console.log("Liked me")
};
btn2.onclick = sayhellow;
 
let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log("key "+ event.code );
    if(event.code == "ArrowUp" || event.code =="KeyW"){
        console.log("Move character forward");
    } else if(event.code == "ArrowDown" || event.code =="KeyS"){
        console.log ("move character Backward");
    } else if(event.code =="ArrowLeft" || event.code =="KeyA"){
        console.log("Move character Left")
    } else if(event.code == "ArrowRight" || event.code =="KeyD"){
        console.log("Move character Right");
    }
});

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Form submited")
    let finp = document.querySelector(".finp");
    console.dir(finp);
    console.log("value is:"+ finp.value);
    
});

let form1 = document.querySelector(".form1");
form1.addEventListener("submit", function(event){
    event.preventDefault();
    alert("Form submited" );
    //let inp1 = document.querySelector("#user");
    let inp1 = this.elements[0];
    console.log("Username: "+inp1.value);
    //let inp2 = document.querySelector("#pass");
    let inp2 = this.elements[1];
    console.log("password: "+ inp2.value);

    
});

let user1=document.querySelector("#user1");
    user1.addEventListener("change",function(){
        console.log("change event")
        console.log("final value: " +this.value);
    })
    user1.addEventListener("input",function(){
        console.log("Input event");
        console.log("final value: " +this.value);
    })
let input1=document.querySelector("#para");
let p2 = document.querySelector('.p1')
input1.addEventListener("input",function(){
    console.log(input1.value);
    p2.innerText = input1.value;
})
