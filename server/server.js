const express =require('express')
 const app = express()

 app.get("/api", (req , res) => { 
    res.json({"users": ["userOne","userTwo","userThree","5555","saima"]})
 }) 


 app.listen(5000, ()=> {console.log("server started on port 5000")})