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
 