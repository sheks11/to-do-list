const inputBox = document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Please add a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //adding cross mark
        let span= document.createElement("span");
        span.innerHTML="\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    // A common use of the classList property is to toggle the use of a class. For
    // instance, we might want an element to not be visible until some user action
    // triggers its visibility, which can be done simply using the toggle() function.
  
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");//if there is a li tag with a class name "checked" then remove it, if not make the class name as checked
        saveData();
    }
    else if(e.target.tagName==="SPAN"){ //tagName is alwasys in ippercase
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();