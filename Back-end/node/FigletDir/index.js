const figlet = require("figlet");
const color = require("colors"); // color package is required.
const input = process.argv[2]; // user input: node index.js Ashutosh
figlet(input,function(err, data){
    if(err) {
        console.log("Something Went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.red); //we can choose any color instead of red 
});