const figlet = require("figlet");

figlet("Ashutosh Kumar",function(err, data){
    if(err) {
        console.log("Something Went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});