const figlet = require("figlet");
const color = require("colors"); // color package is required.

figlet("Ashutosh Kumar",function(err, data){
    if(err) {
        console.log("Something Went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.red); //we can choose any color instead of red 
});