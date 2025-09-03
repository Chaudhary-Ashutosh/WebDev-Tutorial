document.getElementById("picture");
console.dir(document.getElementsByClassName("img"));
document.getElementsByClassName("img")[0];

let smallImg = document.getElementsByClassName("img");
//to print the src of an img
for(let i=0;i<smallImg.length;i++){
    console.dir(smallImg[i]);
    console.dir(smallImg[i].src);
}

//to change the source of an image
// for(let i=0;i<smallImg.length;i++){
//     smallImg[i].src = "./dog.jpg"
//     console.log(`valoe of ${[i]} is changed`);
// }

document.getElementsByTagName("img");
document.querySelector("img");// show the first img tag
console.dir(document.querySelector("div"));
console.dir(document.querySelectorAll("img"));
console.dir(document.querySelector(".imgcollections"));
console.dir(document.querySelector("#picture"));
console.dir(document.querySelector("div img"));

let para = document.querySelector("p"); // first p selected
console.log(para);
console.dir(para);

console.log(para.innerText);// shows the visible content
console.log(para.innerHTML);// shows the markup such bs bold italic etc
console.log(para.textContent);// shows the visible including hidden content

para.innerText = "Hii this is a picture ";
para.innerHTML = "Hii this is a <b>picture</b> ";
console.log(para.innerText);// here all will show the same hii this is a picture bcz we have changed the innertext usnig JS.
console.log(para.innerHTML);
console.log(para.textContent); 
console.log(" here all will show the same 'hii this is a picture' bcz we have changed the innertext usnig JS.")

let heading = document.querySelector("h1");
console.log("heading                      " + heading.innerText);
heading.innerHTML = `<u>${heading.innerText}</u>`

let img1 = document.querySelector("img");
console.log(img1);
console.log(img1.getAttribute("class")); // img
console.log(img1.setAttribute("class","image")); 
console.log(img1.setAttribute("id","image1")); 
console.log(img1.getAttribute("class"));// image { bcz class name has been changed using set attribute from img to image}

let imgheading = document.querySelectorAll("h3");
console.log(imgheading);

//heading.style.color = "red";
//heading.style.backgroundColor = "black";

let links = document.querySelectorAll('.box a');
for(let i=0;i<links.length;i++){
    links[i].style.color = "green";
}

heading.classList.add('green'); //heading in green colour
heading.classList.contains("green"); // true
//heading.classList.remove('green'); // remove green color
heading.classList.contains("underline"); // false
heading.classList.toggle("underline") // it will add underline if not added or it will remove if previously added. ans give true.
heading.parentElement; //body 

let imgcoll = document.querySelector('.box')
imgcoll.children; //h3 img p
imgcoll.childElementCount; //3
img1.previousElementSibling; //h3
img1.nextElementSibling; //p

document.createElement('p');
let newpara = document.createElement('p');
let body = document.querySelector('body');
body.appendChild(newpara); // appends in child element
newpara.innerText= "Hi i am the new paraghraph.";
newpara.append(" This is new p append"); // append in the same element in the last
newpara.prepend("I am prepend. <br> ") // prepend add in the same element in the first

let btn = document.createElement('button');
btn.innerHTML = "NEW BUTTON"
let p = document.querySelector('p');
p.insertAdjacentElement('afterbegin',btn); 
