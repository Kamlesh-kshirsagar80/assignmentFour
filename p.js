var express=require("express");
const app=express();
app.get('/',function(req,res){

	res.send("<h1>Hello World</h1>");
});

app.listen(8000,()=>{
	console.log("running at port  8000");

});
