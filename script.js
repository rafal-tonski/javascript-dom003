const btn = document.querySelector("button");

let number = 1;

const addElement = btn.addEventListener("click", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.textContent = number;
  if (number % 5 == 0) {
    div.classList.add("circle");
  }
  number++;
});
