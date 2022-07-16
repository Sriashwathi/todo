const express = require('express'); //importing express and cors
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();//wil create a object called 'express' and assign it to app varibale
const connection = require('./db');
app.use(cors());
app.use(bodyParser.json())

app.get ('/tasks',(req,res)=>{   //1st task for getting all task that the user has submitted for the day.
    res.send("list of all task") //send a resonse  

})
app.post('/addtask',(req,res)=>{
    const ADD_QUERY=`insert into todotaskmanager.tasks(task) values('${req.body.task}')`
    connection.query(ADD_QUERY,(err)=>{
        if(err) console.log(err)
        else res.send('task has been added')
    })
})
app.get('/deletetask',(req,res)=>{
    res.send("You can delete the task")
})
app.listen(4000,()=>(    //1st arguemnt as port no ,2nd arg as call back 
    console.log("running on port 4000")
))   

//then go to package.jsox and mention start command and file name