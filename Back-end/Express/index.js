const express = require("express");

const app = express();

//console.dir(app);

// .use is a  Middleware functions are functions that run between the request and the response.
// app.use((req, res)=>{
//     console.log(`We Got A New Request!!`);
//     //res.send("<h1>This is my web page</h1>");  can't send both res.send().
//     res.send("Hello, We Got Your Request !! This Is The Response.") // .res.send() used to send a response back to the client.
// });

app.get("/",(req, res)=>{
    console.log("Home Page");
    res.send("WELCOME TO THE HOME PAGE");
});

app.get('/r/:subreddit',(req,res)=>{ //http://localhost:3000/r/golf
    // console.log(req.params);
    // res.send("This is a SUBREDDIT.");
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit </h1>`)
});

app.get('/r/:subreddit/:postID',(req,res)=>{ //http://localhost:3000/r/baklava/23
    const {subreddit,postID} = req.params;
    res.send(`<h1>Viewing the Post Id ${postID} for ${subreddit} subreddit </h1>`)
});

app.get("/about", (req, res) =>{
    console.log("About Page");
    res.send("You are in About Page.")
});

app.post("/about", (req, res) =>{
    console.log("Post : About Page");
    res.send("Post Rqst to About Page. You are in About Page.")
});

app.get("/contact", (req, res) =>{
    console.log("Contact Page");
    res.send("You are in Contact Page.")
});

app.get("/search",(req, res)=>{ //http://localhost:3000/search?q=cat
    const { q } = req.query;
    //console.log(req.query);
    if(!q){
        res.send("NOTHING FOUND IF NOTHING SEARCHED.") //http://localhost:3000/search
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get(/.*/,(req, res)=>{ // * is a wildcard route that matches any path not matched by earlier routes. ex- /aman
    console.log("Wrong Path");
    res.status(404).send(`I Don't know about that path`);
});

// .listen is a method used to bind and start the HTTP server so it can listen for incoming requests on a specified port.
app.listen(3000,() =>{
    console.log("Server Started At Port No: 3000");
});