// const express = require("express");
import express  from 'express'
import { searchController, usernameController } from './controller.js';
const app = express();

const PORT = 3000;

//http://localhost:3000/
app.get('/',(req, res) =>{
    res.send("Hello Express hii");
})

//http://localhost:3000/user/aman
app.get('/user/:username',usernameController)

app.get('/things/:name/:id',express.json(),(req,res)=>{
    const {name, id} = req.params;
    res.json({
        id,
        name
    })
})

app.post("/user",express.json(),(req,res)=>{
    const {name , email }= req.body;
    res.json({
        message: `user ${name} with email ${email} created sucessfully`
    })
})

//http://localhost:3000/user/user123
app.put("/user/:id", express.json(),(req, res)=>{
    const userId = req.params.id;
    const {name, email} = req.body;
    res.json({
        message :`User ${userId} updated to ${name}, ${email}`
    })
})

app.delete("/user/:id",  express.json(),(req,res)=>{
    const userId = req.params.id;
    res.json({
        message:`User with ID ${userId} deleted successfully`
    })
})

//http://localhost:3000/search?keyword=Apple
app.get('/search',searchController)
app.listen(PORT,()=>{
    console.log(`Server Started at https://localhost:${PORT}`)
})
