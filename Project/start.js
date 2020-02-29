var o1 = document.createElement('input')
o1.setAttribute('type','input')
var o2 = document.createElement('input')
o2.setAttribute('type','input')
localStorage.setItem("t1","Alzheimer Test")
localStorage.setItem("t1q1","Do you repeat Statements and Questions over and over?")
localStorage.setItem("t1q2","Do you Forget conversations, appointments or events, and not remember them later?")
localStorage.setItem("t1q3","Do you ever put possessions or often put them in illogical locations ?")
localStorage.setItem("t1q4","Do you get lost in familier places?")
localStorage.setItem("t1q5","Do you ever forget names of family members and everday object?")
localStorage.setItem("t1q6","Do you Have any kind of trouble finding the right words to identify objects, express thoughts or take part in conversations?")
var q = document.getElementsByTagName('h3')

var t1 = 1
var t2 = 1
function next(){		
	if(t1 == 1){	
			q[0].innerHTML = localStorage.getItem("t1")
			if(t2 == 1){
				q[1].innerHTML = localStorage.getItem("t1q1")
			}
			else if(t2 == 2){
				q[1].innerHTML = localStorage.getItem("t1q2")
			}
			else if(t2 == 3){
				q[1].innerHTML = localStorage.getItem("t1q3")
			}
			else if(t2 == 4){
				q[1].innerHTML = localStorage.getItem("t1q4")
			}
			else if(t2 == 5){
				q[1].innerHTML = localStorage.getItem("t1q5")
			}
			else{
				q[1].innerHTML = localStorage.getItem("t1q6")
				t1++
			}
			t2++
		}
	}
