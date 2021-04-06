const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5500
require('dotenv').config()


app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qkzne.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const restaurentCollection = client.db(`${process.env.DB_NAME}`).collection("foods");
     console.log("database connected" ,uri);

     app.post('/addfood', (req, res) => {
        const foodData = req.body;
        restaurentCollection.insertOne(foodData) 
        console.log(foodData);
    })
    
        
    app.get('/breakfastfoods', (req, res) => {
        restaurentCollection.find({foodCat : "breakfast"})
           .toArray((err, foods) => {
               res.send(foods)
           })
          
    }) 
    app.get('/lunchfoods', (req, res) => {
        restaurentCollection.find({ foodCat  :  "lunch" })
           .toArray((err, foods) => {
               res.send(foods)
           })
          
    }) 
        
    app.get('/dinnerfoods', (req, res) => {
        restaurentCollection.find({ foodCat : "dinner" })
           .toArray((err, foods) => {
               res.send(foods)
           })
          
    }) 









});

 






app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})