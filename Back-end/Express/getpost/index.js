const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const comments = [
    {
    username: 'Aman',
    Comment: 'I am from Buxer'
    },
    {
    username: 'Basir',
    Comment: 'I am from Hyderabad'
    },
    {
    username: 'Chandan',
    Comment: 'I am from Patna'
    },
    {
    username: 'Dablu',
    Comment: 'I am from Banglore'
    },
]    

app.get("/tacos", (req, res) => {
    res.send("GET/ tacos")
});

//to read comments 
app.get("/comments",(req, res)=>{
    res.render('comments/index', {comments});
})

app.get("/comments/new",(req, res)=>{
    res.render('comments/new');
})

//add new comment in comments
app.post("/comments", (req, res)=>{
    const {username,Comment} =req.body;
    comments.push({username,Comment})
    res.redirect('/comments');
})

app.post("/tacos", (req, res) => {
    const { Item, qty } = req.body;
    res.send(`OK, here are your ${qty} ${Item} tacos.`);
})

app.listen(PORT, () => {
    console.log(`Server Started at port no :${PORT}`);
})