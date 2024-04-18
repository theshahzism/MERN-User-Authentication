import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";


const app = express();

app.use(cookieParser())
app.use(bodyParser.json({extended:true}))

app.get('/', function (req, res) {
    res.send('Hello World jee')
  })

app.post('/register',function(req,res){
  const {email,password}=req.body

})


app.listen(4000)