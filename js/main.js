
var display = 0;


var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var input = document.getElementById("input");
var displayvalue = document.getElementById("displayvalue");
plus.onclick = function () {
  var inputValue = input.value;
  display =  display + parseInt
  (inputValue);
  displayvalue.innerHTML = display;
  addColor();
}
minus.onclick = function () {
  var inputValue = input.value;
  display =  display - parseInt
  (inputValue);
  displayvalue.innerHTML = display;
  addColor();
}


function addColor() {
  if (parseInt(displayvalue.innerHTML) > 0) {
    document.getElementById("displayvalue").style.color = 'black';
  }
  else {
    document.getElementById("displayvalue").style.color = 'red';
  }
}
