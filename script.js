var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");



// adding delete buttons to each list item

// for(let i = 0; i < ul.children.length; i++){
//     var delBtn = document.createElement("button");
//     delBtn.classList.add("delBtn");
//     delBtn.appendChild(document.createTextNode("del"));
//     ul.children[i].appendChild(delBtn);

// }

function createListElement(){
    var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.classList.add("delClass");
	delButton.innerHTML='Del';
 }
 function inputLength(){
    return input.value.length > 0 
}

function addEventAfterClick(){
    if(inputLength() > 0 ){    
        createListElement();
         }
}

function addEventAfterKeypress(){
    if(inputLength() > 0 &&  event.which === 13){    
        createListElement();
       
     }

}


function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	doneTask(element);
	deleteListElement(element);
}



  
ul.addEventListener("click", handleUlClick);

input.addEventListener("keypress", addEventAfterKeypress);

button.addEventListener("click", addEventAfterClick); 
