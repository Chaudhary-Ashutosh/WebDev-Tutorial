/* 
Printing on Console using Template Literals 
let a = 10;
let b = 5;
let output = "1.You have to pay " +(a+b)+" Rupees.";
console.log(output);
console.log("2. You have to pay",a+b,"Rupees.");
console.log(`3. You have to pay ${a+b} Rupees.`);

console.log(`a + b = ${a+b}`);
console.log(`a - b = ${a-b}`);
console.log(`a * b = ${a*b}`);
console.log(`a / b =${a/b}`);
console.log(`a % b = ${a%b}`);
console.log(`a ** b = ${a**b}`);
console.log(a);
console.log(`use & change a++ = ${++a}`);
console.log(`change & use ++a = ${a++}`);
console.log(a);

if else 
let age = 23;
if(age > 18){
    console.log("You are adult");
}
console.log(`code end here`);

let name = 'Aman';
if(name = "Aman"){
    console.log(`name matched`);
}
console.log(`code end here`);

let code = "#ad2";
if(code == "#ad2"){
    console.log(`Welcome ${code}`);
}
*/

/*
else if
let color ='yellow';
if(color==='red'){
    console.log(`Stop! Light color is ${color}.`);
}
else if(color==='yellow'){
    console.log(`Slow Down, Light color is ${color}.`);
}
else if(color==='green'){
    console.log(`Go, Light color is ${color}.`);
}

*/

/* 
let marks = 60;
if(marks>=80){
    console.log(`A +`);
}
else if(marks>=60){
    console.log(`A`)
}
else if(marks>=33){
    console.log(`B`);
}
else if(marks<33){
    console.log(`B`);
}
*/

let size ="S";
if(size ==="XL"){
    console.log(`Price is Rs. 250`);
}
else if(size ==="L"){
    console.log(`Price is Rs. 200`);
}
else if(size ==="M"){
    console.log(`Price is Rs. 100`);
}
else if(size ==="S"){
    console.log(`Price is Rs. 50`);
}
else {
    console.log(`Not listed`);
}

/* nested if else
let marks ="20";
if(marks >="33"){
    console.log("Pass");
    if(marks>=80){
        console.log("Grade is: O ");
    }
    else{
        console.log("Grade is: A")
    }
}
else{
    console.log("Better luck next time!")
}
*/

let str = "acd";
if(str[0]==="a"&& str.length>3){
    console.log("Good");
}
else{
    console.log("Not Good")
}

let color = "red";
switch(color){
    case "red":
        console.log("Stop! Light is red.");
        break;
    case "yellow":
        console.log("GO SLOW! Light is yellow.");
        break;
    case "Green":
        console.log("Go Light is green.");
        break;
    default:
        console.log("Light is broken.");
}

let day = 7;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}


// let firstName = prompt("Enter you First Name: ");
// let lastName = prompt("Enter your Last Name: ");
// console.log(`Welcome! ${firstName} ${lastName}`);
// alert("Welcome! "+ firstName +" "+ lastName);

//String Methods

let msg ="Ilovecodeing"
console.log(msg);
console.log("Uppercase: "+ msg.toUpperCase());
console.log("Lowercase: "+msg.toLowerCase());
console.log("slice(5): "+msg.slice(5));
console.log("slice(1,5): "+msg.slice(1,5)); // trim in b/w string: index(start,end+1)
console.log("slice(-2): "+msg.slice(-2)); //trim from last index of the string
console.log("replace('o','x'): "+msg.replace("o","x")); //first o will be replacced with x i.e ilxvecoding
console.log("replace('love','do' ): "+msg.replace("love","do"));
console.log("repeat(2)): "+msg.repeat(2));
console.log("indexOf('c')): "+msg.indexOf("c"));
console.log("includes('c')): "+msg.includes("c"));

//Array

let name = ["BMW","Audi","LandRover"];
name.push("Abc");
name.pop();


let start = ["January","July","March","August"];
start[0]="July";
start[1]="June";
console.log("vhh"+ start.indexOf("July"));
console.log("includes('c')): "+msg.includes("c"));

//concatenation  (merge 2 array) and reverse (changes origianl array)

let primary = ["red","blue","orange"];
let secondary = ["voilet","purple","green"];
let allcolors = primary.concat(secondary);
console.log("concatenated array: "+ allcolors);
primary.reverse();
console.log("reversed array: "+primary);

//Array methods
let colors =["red","blue","orange","voilet","purple","green"];
colors.splice(4); // purple,green deleted
console.log(colors); // red,blue,orange,voilet
colors.splice(0,1);// red deleted
console.log(colors); // blue,orange,voilet
colors.splice(0,1,"black","yellow") // blue deleted
console.log(colors); // black,yellow,orange,voilet
colors.splice(1,0,"pink") // pink will be added b/w black and yellow
console.log(colors); // black,pink,yellow,orange,voilet
colors.sort();
console.log(colors);

//constant 
const arr =[1,2,3];
arr.push(4); // 1,2,3,4
arr.pop(); // 1,2,3
//arr = [1,2,3,4]; // VM1261:4 Uncaught TypeError: Assignment to constant variable. at <anonymous>:212

let fruits = ["mango","apple","litchi","banana"];
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }
for(let i=fruits.length-1;i>=0;i--){
    console.log(i,fruits[i]);
}

let heros = [
    ["ajay","akshay","ranveer"],
    ["salman","sarukh","saif"]
];

for(let i=0;i<heros.length;i++){
    console.log("actors"+i)
    for(let j=0;j<heros[i].length;j++){
        console.log(j,heros[i][j]);
    }
}

let det = [["akshay",56],["aman",76],["sky",68]];
for(let i=0;i<det.length;i++){
    console.log(`students ${i+1}`);
    for(let j=0;j<det[i].length;j++){
        console.log(j,det[i][j]);
    }
}

//Object Literals
const post = {
    username: "@ashutosh",
    content: "This is my first post",
    likes: 150,
    repost: 3,
    tags: ["@ashu","@skills"]
};
console.log(post);
post.content; // to see the values
post["username"]; // to see the values

const student ={
    name:"Ashutosh",
    age: 21,
    marks:87,
    city:"Mumbai"
};
student.city = "Delhi"; // change key value
student.gender = "M"; //to add a property
student.height = "172cm"; //to add a property
console.log(student);
delete student.height; // to delete a property
console.log(student);


//nested object literals
const classInfo ={
    aman:{
        grade:"C",
        city:"Mumbai"
    },
    sahil:{
        grade:"B",
        city:"Pune"
    },
    saksham:{
        grade:"A",
        city:"Delhi"
    }
}

classInfo.saksham.city = "Muzaffarpur";

//Array of object
let info =[
    {
        name:"Ashutosh",
        age:20,
        marks:86
    },
    {
        name:"Aman",
        age:19, 
        marks:97   
    }
];
info[0].name; //to check the name of index 0
info[1].age =18; //to change the age of aman
info[1].gender="F"; //to add property to index 1

//generate random no b/w 1 to 10
let random = Math.random();
random = random *10; // step by step
random = Math.floor(random); //  it will generate b/w 0-9
random = random + 1; // now it will generate b/w 0-10
console.log(random);
let r = Math.floor(Math.random()*10) + 1; // in one line of code
console.log(r);

//generate random number b/w 20-25
let r1= Math.floor(Math.random()*5) +20;
console.log(r1);

//Function
function isAdult(){
    let age =19;
    if(age>=18){
        console.log("Is Adult");
    }
    else{
        console.log("Not Adult")
    }
}
isAdult();

function rollDice(){
    let r3= Math.floor(Math.random()*6) +1;
    console.log(r3);
}
rollDice();

//Function with arguments
function infoD(name,age){
    console.log(`${name}'s age is ${age}. `);
}
infoD("Aman",19)

function average(a,b,c){
    let avg = (a+b+c)/3
    console.log(avg);
}
average(1,3,3);

function table(n){
    for(let i=1;i<=10;i++){
        t = i*n;
        console.log(t);
    }
}
table(12);

function sum(n){
    let s =0;
    for(let i=1;i<=n;i++){
        s = s+i;
    }
    return s;
}
// console.log(sum(4));

let str1=["hi","hello","by"] //global scope 
function concat(str1){
    let result = ""; //function scope
    for(let i=0;i<str1.length;i++){
        result += str1[i];
    }
    return result;
}
concat(str1);

let greet = "hello";
function outergreet(){
    let greet = "namaste";
    console.log(greet);
    function innergreet(){
        console.log(greet);
    }
}
console.log(greet);
outergreet();

let calculate = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
}
calculate.add(3,4);

//this key word
let info1 = {
    name:"aman",
    age:21,
    eng:67,
    math:87,
    sci:94,
    getavg(){
        let avg =(this.eng+this.math+this.sci)/3;
        console.log(`${this.name} got avg marks ${avg}.`)
    }
};
info1.getavg();

//try catch
console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch(err){
    console.log("a does n't exist");
    console.log(err);
}

console.log("namaste");
console.log("namaste");
console.log("namaste");

//arrow fn
let sum1=(a,b) =>{
    console.log(a+b);
}
sum1(2,4);
//implicit return arrow fn 
let sum2=(a,b) =>(a+b);
sum2(2,5);

/* 
//set timeout
console.log("hii there");
setTimeout(() =>{
    console.log("my website") //setTimeout(fn,timeout)
},4000)
console.log("welcome to")

//setinterval
console.log("hii there");
let id1 =setTimeout(() =>{
    console.log("my website") //setTimeout(fn,timeout)
},4000)
let id2= setInterval(()=>{
    console.log("created by Ashutosh") //clearInterval(id2) to stop the interval
},9000)
console.log("welcome to")

let id = setInterval(()=>{
    console.log("hello World")
},2000)

setTimeout(()=>{
    clearInterval(id);
    console.log("clearInterval ran")
},10000) */

//Array Methods
//1.for each method
let num3=[1,2,3,4,5];
num3.forEach((el)=>{
    console.log(el);
});
num3.forEach(function(el){
    console.log(el);
});
//2.map
let double = num3.map(function(el){
    return el*2;
});

let square = num3.map((el)=>{
    return el*el;
});

let cgpa = info.map((el)=>{
    return el.marks/10;
})
//3.filter
let ans = num3.filter((el)=>{
    return el%2!==0;
})
//4.every same as AND 
num3.every((el)=> el>11); //true
//5.some same as or
num3.every((el)=> el>11); 
//6.reduce
num3.reduce((result,el)=>(result+el)); //15
let max = num3.reduce((max,el)=>{
    if(el>max){
     return el;  
    }
    else{
        return max;
    }
});
console.log(max); //5

let min = num3.reduce((min,el)=>{
    if(el<min){
     return el;  
    }
    else{
        return min;
    }
});
console.log(min); //1

let num4 = [10,20,30,40];
num4.every((el)=> el%10==0); //true
num4.filter((el)=> el%10==0); //10 20 30 40


//spread
Math.min(...num4); //10

console.log(..."apnacollage"); // a p n a c o l l a g e
console.log("apnacollage"); //apnacollage

let odd = [1,3,5,7];
let even =[2,4,6,8,10];
console.log(...even,...odd);

//destructure
let names = ["Amit","Ansh","Priya"];
let [first, second, third] = names;


let student1 = {
    name:"Daksh",
    age:21,
    username:"ahcb@12"

}
let {username, age , city="Mumbai"} =student1; //age 21
let {username:user, age:secret} =student1; //secret 21

// let btns = document.querySelectorAll('.btn');
// console.dir(btns);
// function hello(){
//     console.log("hellow");
// };
// function mouse(){
//   console.log("Hovered");
// }

// for(let btn of btns){
//   // btn.onmouseenter = function (){
//   //   console.log("Hovered");
//   //};
//   //btn.onclick = hello;

//   btn.addEventListener("click",hello);
//   btn.addEventListener("click",function(){
//      console.log(this.innertext)});// Click me
//   btn.addEventListener("dblclick",
//     function(){
//       console.log("you double clicked");
//     }
//   );
   
// }

let btn = document.querySelector("button");
btn.addEventListener("click",function(){
  let h3 = document.querySelector('h3');
  let randomcolor = getRandomColor();
  h3.innerText=randomcolor;

  let div = document.querySelector("div");
  div.style.background = randomcolor;
  console.log("color updated");

  
});
let div1 = document.querySelector("div");
div1.addEventListener("click",function(){
  console.log("mouse inside the box/div.")}
);
function getRandomColor(){
let red = Math.floor(Math.random()*255);
let green = Math.floor(Math.random()*255);
let blue = Math.floor(Math.random()*255);
let color =`rgb(${red},  ${green}, ${blue})`;
return color;
}

let input = document.querySelector("input");
input.addEventListener("keydown",function(event){
  // console.log(event);
  console.log(event.key);
  console.log(event.code); 
})
// input.addEventListener("keydown", function(){
//   console.log("key was pressed")}
// )
// input.addEventListener("keyup", function(){
//   console.log("key was released")}
// )


let div2 = document.querySelector(".divul");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div2.addEventListener("click",function(){
    console.log("div was clicked");
})
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
})
for(li of lis){
li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("li was clicked");
})}

//callstack
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two() + one();
    console.log(ans);
}

//callhell: loops inside loop
//promise
function saveToDb(data){
    return new Promise((resolve,reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if(internetSpeed > 4){
            resolve("sucsess: data was saved");
        }
        else{
            reject("failure: week connnection");
        }
    });
}
saveToDb("hello")
    .then((result) => {
        console.log("data1 saved. ",result);
        return saveToDb("world") // Handle successful resolution
    })
    .then((result2)=>{
        console.log("data2 saved.",result2);
        return saveToDb("I'm Back");
    })
    .then((result3)=>{
        console.log("data3 saved. ",result3);
    })
    .catch((error) => {
        console.error("Promise rejected:",error); // Handle the rejected promise
    });