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