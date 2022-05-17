var input = document.getElementById("todo-input");
var addtodo = document.getElementById("add-button");


var todolist = localStorage.getItem("todolist");
localStorage.setItem("todolist",JSON.stringify([]))
 
function onClickAddButton() {
    if(input.value !== ""){
    var todo = input.value.trim();
    var li = document.createElement("li")
    li.style.textDecoration = "none";
    li.style.marginBottom = "10px";
    li.className = "list-group-item list-group-item-secondary";
    li.onclick = function () {
        if (li.style.textDecoration != "none") {
            li.style.textDecoration = "none";
            li.style.opacity = 1;
        } else {
            li.style.textDecoration = "line-through";
            li.style.opacity = 0.5;
        }
    }
    var delbutton = document.createElement("button");
    delbutton.className = "btn-close";
    delbutton.style.float = "right";
    delbutton.onclick = function () {
        document.getElementById("list").removeChild(li);
    }

    li.innerHTML = todo;
    li.appendChild(delbutton);
    document.getElementById("list").appendChild(li);

   var todos = {
       text:todo
   }
   var todolist = JSON.parse(localStorage.getItem("todolist"));
   todolist.push(todos);
   localStorage.setItem("todolist",JSON.stringify(todolist));

    input.value = "";
}else{
    alert("lütfen bir todo giriniz");
}
}

