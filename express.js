const express = require ('express');
const app = express();

const port =  3000 ;

app.get('/',(req,res)=>{
    
    res.send('hello worls');
});

 app.listen(port,()=>{
     console.log(` express web app avaible at localhost:${port} `);
 });

