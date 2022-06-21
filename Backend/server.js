const express = require('express')
const morgan = require('morgan')


//Creation of Rest object (to use the functionality of express)
const app = express()

//middlewares
//for adding the routing functions.
app.use(express.json())
app.use(morgan('dev'))

//route
app.get('/',()=>{
    resizeBy.send("<h1>Hello from Node</h1>");
})

app.listen(8080,()=>{
    console.log("Server Running on Port 8080");
})