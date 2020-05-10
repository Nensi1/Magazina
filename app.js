// const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const dbManager = require("./utils/dbconn"); 
const loggerMiddleware = require('morgan');
const helmet = require('helmet');
const app = express();

console.log("USER:",process.env.POSTGRES_USER);

//db connection
dbManager.authenticate()
.then(function() {
  console.log('Connection has been established successfully.');
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});


app.use(loggerMiddleware('dev'));
app.use( bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));     //  to support URL-encoded extended body with rich data in it


//PREVENT CORS errors (postman doesn't cover them) - overriding secure mechanisms of browsers; append these headers to any response:
// app.get('/', function (req, res,next) {  
//   res.header("Access—Control—Allow—Origin",'http://localhost:3000'); // clients you wish to allow to connect
//   res.header(
//     "Access—Control—Allow—Headers",  // Request headers you wish to allow
//     "Origin, X—Requested—With, Content—Type, Accept, Authorization"
//     );
//     if(req.method ==="OPTIONS"){ //browser sends options first for put/post requests
//       res.header("Access—Control—Allow—Methods", "PUT, POST, PATCH, DELETE, GET")  // Request methods you wish to allow
//       return res.status(200).json({}); //adding CORS headers is an answer, so it doesn't need to go to routers
//     } 
//     next(); //other routes can take over
// });


//------------------- ROUTES --------------------------//
const userRoutes= require('./api/routes/users');
app.use('/users', userRoutes);
app.use(helmet());


//---error middleware--//
app.use((req,res,next)=>{
  const error= new Error('Not found');
  error.status= 404;
  next(error); //forwards the error request
})

app.use((error, req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error: {
      message:error.message
    }
  }); 
})

module.exports = app;

//docker-compose exec app sh

