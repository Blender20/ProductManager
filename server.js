const express = require("express");// import express so we can use express features
const app = express(); //create our app variable which is an instance of express
const cors = require("cors");// import CORS- cross origin resource sharing.
const port = 8000;//declaring a port for the backend api to run in (localhost:8000)

// NEED THIS TO HANDLE POST REQUESTS!! HAVE THESE TWO LINES BEFORE ROUTES
app.use(express.json());//lets our app convert form into json
app.use(express.urlencoded({extended:true})); 
//Lets our app parse form information

//enable cors so that we can share resources back and forth between the backend and front-end
app.use(cors());

//import path for mongoose
require("./server/config/mongoose.config");
    



//routes here MAKE SURE ROUTES IMPORTS IS BELOW ALL THE APP. USE COMMANDS ABOVE THIS!!!!
require("./server/routes/ProductManager.routes")(app);






// THIS LINE NEEDS TO BE AT THE BOTTOM OF THE FILE
app.listen(port, ()=>console.log(`Listening on port ${port}`));