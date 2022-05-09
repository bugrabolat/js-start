var screen = document.getElementById("screen");
var first ='';
var second ='';
var selectedOpr ="";
var sonuc = '';


function onClickButton(element, x) {
  if(screen.value == 0){
    screen.value ="";
  }
  switch (x) {
    case '0':
      screen.value += element.value;
      break;
    case '1':
      screen.value += element.value;
      break;
    case '2':
      screen.value += element.value;
      break;
    case '3':
      screen.value += element.value;
      break;
    case '4':
      screen.value += element.value;
      break;
    case '5':
      screen.value += element.value;
      break;
    case '6':
      screen.value += element.value;
      break;
    case '7':
      screen.value += element.value;
      break;
    case '8':
      screen.value += element.value;
      break;
    case '9':
      screen.value += element.value;
      break;
  }
}
function onClickClearButton() {
  screen.value = 0;
}
function onClickPositiveButton() {
  if (screen.value) {
    screen.value
  }
}
function onClickSepelator(element,y) {
 switch (y) {
   case "+":
    selectedOpr += element.value;
     break;
     case "-":
      selectedOpr += element.value;
     break;
     case "*":
      selectedOpr += element.value;
     break;
     case "/":
      selectedOpr += element.value;
     break;
 }
 if(selectedOpr ==""){
   first += screen.value;
 }else if(selectedOpr !==''){
   second += screen.value;
 }
 console.log(first);
}
function hesapla(first,selectedOpr,second){
  if(selectedOpr=="+"){
    sonuc = first + second;
  }
  console.log(sonuc); 
  
}