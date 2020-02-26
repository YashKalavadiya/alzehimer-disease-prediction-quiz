
var q = document.getElementsByTagName("h1");
var o1 = document.getElementById("op1")
var o2 = document.getElementById("op2");
var l = document.getElementsByTagName("label");
function next(){
	q[0].innerHTML = "changed"
	l[0].innerHTML = "hello1"
	l[1].innerHTML = "hello2"
}

const f = require('fs')

fs.readFile("hello.txt",(err,data)=>{
	if(err){
		throw err
	}
	console.log(data.toString())
})