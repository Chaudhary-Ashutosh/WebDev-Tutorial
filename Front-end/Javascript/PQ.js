let num = 100;
if(num%2==0){
    console.log("Good");
}
else{
    console.log("Bad");
}

/*let userName = prompt("Enter User Name: ");
let age = prompt("Enter your age: ");
alert(`${userName} is ${age} years old`); */

let quater = 4;
switch(quater){
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default :
        console.log("Wrong!");
    
}
 
let str = "abcdef";
if(str[0]=="a" || str[0]==="A" && str.length > 5){
    console.log("Golden");
}
else{
    console.log("Not")
}

let a = 6;
let b = 9;
let c = 2;
if(a > b && a > c){
    console.log(a);
}
else if(b>c && b>a){
    console.log(b);
}
else if(c>a && c>b){
    console.log(c)
    }
 
else{
    console.log("invalid.")
}

let msg= "help!"
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);

let name ="apnacollage";
console.log(name.slice(4).replace("l","t"));

// let start = ["January","July","March","August"];
// start[0]="July";
// start[1]="June";
// console.log(start);


// console.log(start.indexOf("june"));

let start = ["January","July","March","August"];
// start.splice(0,1);              //january deleted
// start.splice(1,0,"June") or    // june added in b/w july and march   
start.splice(0,2,"July","June")
console.log(start);

let language = ["c","c++","html","javascript","python","java","c#","sql"];
// language.reverse(); or we can do method chaning
console.log(language.reverse().indexOf("javascript"));

let array1 = [["X",null,"O"],
              [null,"X",null],
              ["O",null,"X"]];
console.log(array1);
array1[0][1]="O";
console.log(array1);

let n=[7,9,0,-2];
n.splice(3);
console.log(n);

let n1=[7,9,0,-2];
n1.splice(0,1);
console.log(n1);

let arr2=[1,2,3,4,5,6,2,3];
let num2 =2;
for(let i=0;i<arr2.length;i++){
    if(num2 == arr2[i]){
        arr2.splice(i,1)
    }
}
console.log(arr2);

let num1= 287152;
let count = 0;

while(num1>0){
    num1 = Math.floor(num1/10);
    count++;
}
console.log(count);

num1 = 287152;
let sum = 0;
while(num1>0){
    digit = num1 % 10;
    sum += digit;
    num1 = Math.floor(num1/10);
}
console.log(sum);

let n3 = 5;
let fact = 1;
for(let i=1;i<=n3;i++){
    fact = fact * i;
}
console.log(fact);

let num3 = [2,5,10,4,2,7,1,9];
let largest = 0;
for(let i=0;i<num3.length;i++){
    if(largest < num3[i]){
        largest = num3[i];
    }
}
console.log(largest);

//v-23 q1
let dice = Math.floor(Math.random()*6) + 1;
console.log(dice);
//q2
const car = {
    name:"S-cross zeta Maruti Suzuki",
    model:2013,
    color:"grey"
};
console.log(car);
//q3
const person ={
    name:"Ashutosh",
    age:22,
    city:"Banglore"
};
console.log(person);
person.city ="New York";
person.country ="US";
console.log(person);

//v-26
//q1
let arr3 = [1,2,3,4,5];
arr3.forEach((el)=>el*el);
let sum3 = arr3.reduce((rel,el)=> rel+el);
