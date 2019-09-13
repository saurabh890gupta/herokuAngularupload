const express=require('express');
const app=express();
const path =require('path')
// var port=process.env.PORT || 5050;
app.use(express.static(path.join(__dirname + '/../dist/kkk/')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname +"/../dist/kkk/index.html"))
})
app.listen(process.env.PORT || 8200)