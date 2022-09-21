var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
    input.value.length > 0 
}

button.addEventListener("click", function(){
    // console.log("click is working");
    if(input.value.length > 0 ){    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
  
});

input.addEventListener("keypress", function(event){
    // console.log(event.keyCode);

    if(input.value.length > 0 &&  event.which === 13){    
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
  
});