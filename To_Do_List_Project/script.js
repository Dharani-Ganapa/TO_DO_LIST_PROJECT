function addTask(){

let task = document.getElementById("task").value;

if(task === ""){
alert("Enter a task");
return;
}
let li = document.createElement("li");
li.textContent = task;

let delBtn = document.createElement("button");
delBtn.textContent = "Delete";

delBtn.onclick = function(){
li.remove();
};

li.appendChild(delBtn);

document.getElementById("list").appendChild(li);

document.getElementById("task").value = "";

}
