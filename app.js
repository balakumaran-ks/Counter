// console.log("Hello");

//declaration
let count = 0;
const result = document.getElementById("res");
const increaseBtn = document.getElementById("inc");
const decreaseBtn = document.getElementById("dec");
const resetBtn = document.getElementById("reset");

//increase
function increase() {
  count = count + 1;
  result.innerText = `Count : ${count}`;
}

//decrease
function decrease() {
  if (count > 0) {
    count = count - 1;
  }
  result.innerText = `Count : ${count}`;
}

//reset the count
function reset() {
  count = 0;
  result.innerText = `Count : ${count}`;
}

//adding event
increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
