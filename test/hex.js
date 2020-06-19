btn = document.getElementById("click");
color = document.querySelector(".color");

hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", () => {
  let value = "#";
  for (let i = 0; i < 6; i++) {
    value += hex[randomVal()];
  }
  color.textContent = value;
  document.body.style.backgroundColor = value;
});

function randomVal() {
  return Math.floor(Math.random() * hex.length);
}
