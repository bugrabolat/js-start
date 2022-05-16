var input = document.getElementById("todo-input");
var addtodo = document.getElementById("add-button");

var todos = JSON.parse(localStorage.getItem("todos"));


function onClickAddButton() {
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

    li.innerHTML = input.value.trim();
    li.appendChild(delbutton);
    document.getElementById("list").appendChild(li);


    todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

    input.value = "";
}

