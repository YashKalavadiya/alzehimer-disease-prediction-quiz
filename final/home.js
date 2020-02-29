// var o1 = document.createElement('input')

// o1.setAttribute('type','input')

// var o2 = document.createElement('input')

// o2.setAttribute('type','input')

localStorage.setItem("t1","Memory Test")

localStorage.setItem("t1q1","Do you repeat Statements and Questions over and over?")

localStorage.setItem("t1q2","Do you Forget conversations, appointments or events, and not remember them later?")

localStorage.setItem("t1q3","Do you ever put possessions or often put them in illogical locations ?")

localStorage.setItem("t1q4","Do you get lost in familier places?")

localStorage.setItem("t1q5","Do you ever forget names of family members and everday object?")

localStorage.setItem("t1q6","Do you Have any kind of trouble finding the right words to identify objects, express thoughts or take part in conversations?")

localStorage.setItem("t2","Thinking and Reasoning")

localStorage.setItem("t2q1","Any Difficulty in Thinking & Concentrating?")

localStorage.setItem("t2q2","Any difficulty in dealing with numbers?")

localStorage.setItem("t2q3","Do you have Any problem in Multitasking?")

localStorage.setItem("t3","Making judgments and decisions")

localStorage.setItem("t3q1","Is your ability to make reasonable decisions and judgments in everyday situations declined?")

localStorage.setItem("t4","Planning and performing familiar tasks")

localStorage.setItem("t4q1","forget how to perform basic tasks such as dressing and bathing.")

localStorage.setItem("t5","Changes in personality and behavior")

localStorage.setItem("t5q1","Are you in Depression?");

localStorage.setItem("t5q2","Do you have Apathy?")

localStorage.setItem("t5q3","Do you become aggressive and irretetated of small things?")


var q = document.getElementsByTagName('h3')

var t1 = 1

var t2 = 1

var per = 0.0

var chk = document.getElementById('Que_Ans')

var rb = document.getElementsByTagName('label');			


function next(){		
	var y = document.getElementById("rb1")
	var n = document.getElementById("rb2")
	if(t1 == 1){	
			document.getElementById("rb1").style.display = "block";
			document.getElementById("rb2").style.display = "block";
			rb[0].style.display = "block";
			rb[1].style.display = "block";
			document.getElementById("nxt").innerHTML = "Next";
			q[0].innerHTML = localStorage.getItem("t1")
			if(t2 == 1){
				q[1].innerHTML = localStorage.getItem("t1q1")				
			}
			else if(t2 == 2){
				if(y.checked){
					per += 3.5
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t1q2")				
			}
			else if(t2 == 3){
				if(y.checked){
					per += 6.5;
				}
				y.checked = false;
				n.checked = false;
				q[1].innerHTML = localStorage.getItem("t1q3")
			}
			else if(t2 == 4){
				if(y.checked){
					per += 6
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t1q4")
			}
			else if(t2 == 5){
				if(y.checked){
					per += 9.5;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t1q5")
			}
			else{
				if(y.checked){
					per += 10.5;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t1q6")
				t1++
				t2 = 0
			}
			t2++			
		}		
	else if(t1 == 2){			
			q[0].innerHTML = localStorage.getItem("t2")
			if(t2 == 1){
				if(y.checked){
					per += 4;
				}
				y.checked = false
				n.checked = false
				
				q[1].innerHTML = localStorage.getItem("t2q1")
			}
			else if(t2 == 2){
				if(y.checked){
					per += 5.5;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t2q2")
			}
			else{
				if(y.checked){
					per += 9.5;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t2q3")
				t1++
				t2 = 0
			}
			t2++
		}		
	else if(t1 == 3){
			q[0].innerHTML = localStorage.getItem("t3")
			if(t2 == 1){
				if(y.checked){
					per += 5;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t3q1")
				t1++
			}
			t2 = 0
			t2++
		}
	else if(t1 == 4){
			q[0].innerHTML = localStorage.getItem("t4");
			if(t2 == 1){
				if(y.checked){
					per += 5;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTMl = localStorage.getItem("t4q1")
				t2 = 0
				t1++
			}
			t2++
		}
	else if(t1 == 5){
			q[0].innerHTML = localStorage.getItem("t5")
			if(t2 == 1){
				if(y.checked){
					per += 20;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t5q1")
			}
			else if(t2 == 2){
				if(y.checked){
					per += 8;
				}
				y.checked = false
				n.checked = false
				q[1].innerHTML = localStorage.getItem("t5q2")
			}
			else if(t2 == 3){
				if(y.checked){
					per += 4;
				}
				n.checked = false
				y.checked = false
				q[1].innerHTML = localStorage.getItem("t5q3")
			}
			else{
				if(y.checked){
					per += 3;
				}
				document.getElementById("rb1").style.display = "none";
				document.getElementById("rb2").style.display = "none";
				
				rb[0].style.display = "none";
				rb[1].style.display = "none";
				t2 = 0
				window.open("front.html")
				localStorage.setItem("per",per);
			}
			t2++
		}
		console.log(per)		
	}



	function op(){
		var prog = document.getElementById("prog");		
		var n = per.toString();
		var res = n.concat("%");
		prog.style.width = res;
	}


