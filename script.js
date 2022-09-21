var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length > 0 
}

 function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
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

input.addEventListener("keypress", addEventAfterKeypress);

button.addEventListener("click", addEventAfterClick); 
