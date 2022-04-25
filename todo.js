var deletebutton = document.getElementById('deletebutton');
var addbutton = document.getElementById('addbutton');
var addtodo = document.getElementById('addtodo');
var todopage = document.getElementsByClassName('todo');


deletebutton.addEventListener('click',function(){
    
})

addbutton.addEventListener('click',function(){
    const newtodo = addtodo.value.trim();
    const olusturli = document.createElement("li");
    olusturli.className ="list-group-item list-group-item-secondary";
    const olusturbutton = document.createElement("button");
    olusturbutton.className = "btn-close";
    const olusturul = document.createElement("ul");
    olusturul.className = "list-group";

    document.getElementById("todobolumu").appendChild(olusturul);
    olusturul.appendChild(olusturli);
    olusturli.appendChild(olusturbutton).innerHTML = newtodo;

   
});
var todom = document.getElementById('todom');

todom.addEventListener('click',function(){
    if(todom.style.textDecoration == 'none'){
    todom.style.textDecoration = 'line-through';
    }else{
        todom.style.textDecoration = 'none';
    }
});
