var screen = document.getElementById("screen");
var first = '';
var second = '';
var selectedOpr = " ";
var sonuc = '';


function onClickButton(element, x) {
  if (screen.value == 0) {
    screen.value = "";
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
  if (selectedOpr == " " || first == '') {
    first += element.value;
  } else if (selectedOpr != " " || first !== '') {
    second += element.value;
  }
  if(first ==''){
    first += element.value;
  }
}

function onClickClearButton() {
  screen.value = " ";
  first = "";
  selectedOpr = " ";
  second = '';

}

function onClickPositiveButton() {

}

function onClickSepelator(element, y) {
  switch (y) {
    case "+":
      selectedOpr = element.value;
      break;
    case "-":
      selectedOpr = element.value;
      break;
    case "*":
      selectedOpr = element.value;
      break;
    case "/":
      selectedOpr = element.value;
      break;
  }
  screen.value = " ";
}

function hesapla() {
  if (selectedOpr == "+") {
    sonuc = Number(first) + Number(second);
  }else if (selectedOpr == "-") {
    sonuc = Number(first) - Number(second);
  }else if (selectedOpr == "*") {
    sonuc = Number(first) * Number(second);
  }else if (selectedOpr == "/") {
    sonuc = Number(first) / Number(second);
  }

  screen.value = sonuc;
  console.log(first+second);
  console.log(first);

}