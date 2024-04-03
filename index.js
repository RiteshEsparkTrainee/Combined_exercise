var express = require("express")
const mainRoute = require("./routes/mainRoute.js")
var app = express()
var bodyParser = require("body-parser")
var path = require("path")


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname +"/public")));
app.use(bodyParser.urlencoded({ extended: true }))
require('dotenv').config()
let PORT = process.env.PORT


const cookieParser = require("cookie-parser");

app.use(cookieParser());


app.use('/dashboard',mainRoute)


try{

app.listen(PORT,()=>{
console.log('server is listening at port ',PORT);
})
}
catch(err)
{
    console.log("Something went wrong", err)
}

