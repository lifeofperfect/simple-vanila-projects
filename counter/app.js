const value = document.getElementById("value");

const btns = document.querySelectorAll(".btn");

let number = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let action = e.currentTarget.classList;
    if (action.contains("decrease")) {
      number--;
    } else if (action.contains("reset")) {
      number = 0;
    } else {
      number++;
    }
    if (number >= 1) {
      value.style.color = "Green";
    }
    if (number == 0) {
      value.style.color = "black";
    }
    if (number <= -1) {
      value.style.color = "red";
    }

    value.textContent = number;
  });
});

/*

decrease = document.querySelector(".decrease");
reset = document.querySelector(".reset");
increase = document.querySelector(".increase");

let number = 0;

increase.addEventListener("click", () => {
  number += 1;
  numColor();
  value.textContent = number;
});

reset.addEventListener("click", () => {
  number = 0;
  numColor();
  value.textContent = number;
});

decrease.addEventListener("click", () => {
  number -= 1;
  numColor();
  value.textContent = number;
});

function numColor() {
  if (number >= 1) {
    value.style.color = "green";
  }
  if (number == 0) {
    value.style.color = "black";
  }
  if (number <= -1) {
    value.style.color = "red";
  }
}
*/
