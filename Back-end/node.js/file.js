const fs = require("fs");

//Async... 
fs.writeFile("./text.txt", "Hello this is a text file. ", function (err) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Done");
  }
});

fs.appendFile("./text.txt", `\nThis is the new line ${Date.now()}`, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("appended");
  }
})

//Sync...
let data = fs.writeFileSync("./contact.txt", "Aman gargi : +91-9887467809");
console.log("Contact added");

setTimeout(() => {
  let result = fs.readFileSync("./contact.txt", "utf-8");
  console.log(result);
}, 900); 



//Async...
fs.readFile("./contact.txt","utf8",(err,result)=>{
  if(err){
    console.log(err);
  }else{
    console.log(result);
  }
})

//Sync...
fs.cpSync("./contact.txt","./copy.txt"); //copy a file to a new copy txt file
fs.unlinkSync("./copy.txt"); // delete a file
console.log(fs.statSync("./contact.txt")); // to check the status of the file with time date etc.
console.log(fs.statSync("./contact.txt").isFile()); // to check the status of the file

