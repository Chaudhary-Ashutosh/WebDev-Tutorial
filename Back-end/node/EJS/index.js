const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/',(req , res) => {
    res.render('home')
});

app.get('/r/:subreddit',(req, res)=>{
    const {subreddit} = req.params;
    res.render('random', {subreddit});
})

app.get('/rand',(req, res) =>{
    const num = Math.floor(Math.random() *10 +1);
    res.render('random', {rand:num})
})

app.get("/fruits",(req, res)=>{
    const fruits = ['Apple','Banana','Ornage','PineApple']
    res.render("fruits", {fruits});
})

app.listen(3000, ()=>{
    console.log("Server Started at port number 3000.")
});