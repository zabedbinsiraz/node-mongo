const express = require('express');

const app = express();

const users =['Kolmi','Sormi','Bormi','Molmi','Solmi','Hosmi']

app.get('/',(req, res)=>{
    res.send('You are starting your first node operation here')
})

app.get('/flower',(req,res)=>{
    const flower = {
        name:'rose',
        price:50
    }
    res.send(flower)
})

app.get('/flower/belly',(req,res)=>{
    res.send({name:'Belly',quantity:3});
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const name = users[id]
    res.send({id,name})
    console.log(req.query.port);
   
})
app.listen(3001, ()=> {
    console.log("I am showing from port 3001");
})