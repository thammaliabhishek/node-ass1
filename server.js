const http = require("http");

const data={
    name:'Abhishek',
    batch:'EA12',
    ROLE:'FULL-STACK DEVELOPER'
}
const user=JSON.stringify(data)


const server=http.createServer( (req,res) => {

    res.write("<h1>Hi welcome To Node Js</h1>");
   
    res.write(user);
    res.end();
    
        
   
})

server.listen(8000,()=>{
    console.log("hi")
});

