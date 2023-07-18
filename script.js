let input = document.getElementById('result');

function addToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function deleteLast() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  let result = eval(input.value);
  input.value = result;
}
