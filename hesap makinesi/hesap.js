var screen = document.getElementById("screen");
var first = '';
var second = '';
var selectedOpr = " ";
var sonuc = '';
var step = false;

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
    case '.':
      screen.value += element.value;
      break;
  }
  if (selectedOpr == " ") {
    first += element.value;
  } else if (selectedOpr !== " " && first !== '') {
    second += element.value
  }
}

function onClickClearButton() {
  screen.value = "";
  first = '';
  selectedOpr = " ";
  second = '';
  sonuc = '';

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
    case "%":
      selectedOpr = element.value;
      break;
  }

  screen.value += element.value;

}
function onClickPositiveButton() {
  if (Number(first) > 0 && selectedOpr == " ") {
    first = -Math.abs(Number(first));
    screen.value = first;
  } else if (Number(first) < 0 && selectedOpr == " ") {
    first = Math.abs(Number(first));
    screen.value = first;
  };
  if (Number(second) > 0 && selectedOpr !== " ") {
    second = -Math.abs(Number(second));
    screen.value = second;
  } else if (Number(second) < 0 && selectedOpr !== " ") {
    second = Math.abs(Number(second));
    screen.value = second;
  }
}
function yuzde() {
  screen.value = Number(first) / 100;
}
function hesapla() {
  if (selectedOpr == "+") {
    sonuc = Number(first) + Number(second);
  } else if (selectedOpr == "-") {
    sonuc = Number(first) - Number(second);
  } else if (selectedOpr == "*") {
    sonuc = Number(first) * Number(second);
  } else if (selectedOpr == "/") {
    sonuc = Number(first) / Number(second);
  };


  first = sonuc


  screen.value = sonuc;


  second = '';
}