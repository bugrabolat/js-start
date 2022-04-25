var deletebutton = document.getElementById('deletebutton');
var addbutton = document.getElementById('addbutton');
var addtodo = document.getElementById('addtodo');
var li = document.querySelectorAll('li');
var todopage = document.getElementsByClassName('todo');


deletebutton.addEventListener('click',function(){
    
})

addbutton.addEventListener('click',function(){
    const newtodo = addtodo.value.trim();
    todoekle(newtodo);
   
})
var todom = document.querySelector('li');

todom.addEventListener('click',function(){
    if(todom.style.textDecoration == 'none'){
    todom.style.textDecoration = 'line-through';
    }else{
        todom.style.textDecoration = 'none';
    }
})

function todoekle(newtodo){
    const olusturli = document.createElement("li");
    olusturli.className ="list-group-item list-group-item-secondary";
    const olusturbutton = document.createElement("button");
    olusturbutton.className = "btn-close";
    const text = document.createTextNode(newtodo);

};
