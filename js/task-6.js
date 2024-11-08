function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesCont = document.querySelector("#boxes");

createBtn.style.backgroundColor = "#4e75ff";
destroyBtn.style.backgroundColor = "#ff4e4e";

createBtn.addEventListener("click", createMarkup);
destroyBtn.addEventListener("click", destroyMarkup);



function createMarkup() {
  if (+inputEl.value < 1 || +inputEl.value >= 100) {
    return;
  }

  createBoxes(+inputEl.value)
}

function createBoxes(amount) {
  boxesCont.innerHTML = "";

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.height = `${size}px`;
    box.style.width = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);

    size += 10;
  }

  boxesCont.append(...boxes);
}

function destroyMarkup() {
  boxesCont.innerHTML = "";
  inputEl.value = "";
}