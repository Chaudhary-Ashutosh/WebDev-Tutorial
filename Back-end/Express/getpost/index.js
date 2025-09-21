const express = require("express");
const app = express();
const path = require("path");
const {v4:uuid} = require("uuid");
const methodOverride = require("method-override");

const PORT = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

let comments = [
    {
    id:uuid(),
    username: 'Aman',
    Comment: 'I am from Buxer'
    },
    {
    id:uuid(),
    username: 'Basir',
    Comment: 'I am from Hyderabad'
    },
    {
    id:uuid(),
    username: 'Chandan',
    Comment: 'I am from Patna'
    },
    {
    id:uuid(),
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

//to update a comment
app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params;
    const newCommentText = req.body.comment; // lowercase
    const foundComment = comments.find(c => c.id === id);
    foundComment.Comment = newCommentText;
    res.redirect("/comments")
})

// to read Comment with id
app.get("/comments/:id",(req,res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})
 
// to edit Comment
app.get("/comments/:id/edit",(req, res) =>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})

//add new Comment in comments
app.post("/comments", (req, res)=>{
    const {username,Comment} =req.body;
    comments.push({username,Comment, id:uuid() })
    res.redirect('/comments');
})

//to delete Comment
app.delete("/comments/:id",(req, res)=>{
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments")
})

app.post("/tacos", (req, res) => {
    const { Item, qty } = req.body;
    res.send(`OK, here are your ${qty} ${Item} tacos.`);
})

app.listen(PORT, () => {
    console.log(`Server Started at port no :${PORT}`);
})