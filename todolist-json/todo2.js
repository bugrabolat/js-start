var input = document.getElementById("todo-input");
var addtodo = document.getElementById("add-button");

var todoList = localStorage.getItem("todoList");

if (todoList !== null && todoList !== "") {
    todoList = JSON.parse(todoList);
    todoList.forEach(el => {
        console.log(el);
        var li = document.createElement("li");
        li.style.textDecoration = "none";
        li.style.marginBottom = "10px";
        li.className = "list-group-item list-group-item-secondary";
        if (el.status) {
            li.style.textDecoration = "line-through";
                li.style.opacity = 0.5;
        }
        else{
            li.style.textDecoration = "none";
                li.style.opacity = 1;
        }
        li.onclick = function () {
            if (li.style.textDecoration != "none") {
                li.style.textDecoration = "none";
                li.style.opacity = 1;
                el.status = false;
                saveTodoList();
            } else {
                li.style.textDecoration = "line-through";
                li.style.opacity = 0.5;
                el.status = true;
                saveTodoList();
            }   
        }
        var delbutton = document.createElement("button");
        delbutton.className = "btn-close";
        delbutton.style.float = "right";
        delbutton.onclick = function () {
            document.getElementById("list").removeChild(li);
            removeTodoItem(el.id);
        }

        li.innerHTML = el.text;
        li.appendChild(delbutton);
        document.getElementById("list").appendChild(li);
    });
    console.log("if içi");
} else{
    todoList = [];
    console.log("else içi");
}

console.log(todoList);

function onClickAddButton() {
    if (input.value !== "") {
        todoList.push({
            id: todoList.length,
            text: "",
            status: false
        });

        var el = todoList[todoList.length - 1];

        var todo = input.value.trim();
        var li = document.createElement("li");
        li.style.textDecoration = "none";
        li.style.marginBottom = "10px";
        li.className = "list-group-item list-group-item-secondary";
        li.onclick = function () {
            if (li.style.textDecoration != "none") {
                li.style.textDecoration = "none";
                li.style.opacity = 1;
                el.status = false;
                saveTodoList();
            } else {
                li.style.textDecoration = "line-through";
                li.style.opacity = 0.5;
                el.status = true;
                saveTodoList();
            }
        }
        var delbutton = document.createElement("button");
        delbutton.className = "btn-close";
        delbutton.style.float = "right";
        delbutton.onclick = function () {
            document.getElementById("list").removeChild(li);
            removeTodoItem(el.id);
        }

        li.innerHTML = todo;
        el.text = todo;
        li.appendChild(delbutton);
        document.getElementById("list").appendChild(li);

        

        saveTodoList();

        console.log(todoList);

        input.value = "";
        input.focus();
    } else {
        alert("lütfen bir todo giriniz");
    }
}

function saveTodoList(){
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function removeTodoItem(id) {
    var index = todoList.findIndex(function (el) {
        return el.id === id;
    });
    todoList.splice(index, 1);
}