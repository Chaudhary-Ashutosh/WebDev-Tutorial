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