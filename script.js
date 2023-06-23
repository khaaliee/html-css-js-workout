console.log('Hello from Nerdbord!')
let box = document.querySelector(".box");
const colors = ["orange","blue","pink","yellow"];

let changeColor = () => {
  let currentColor = '';
  for (i=0; i<= colors.length; i++) {
    currentColor = colors[getRandomNumber()];
  }
  box.style.borderColor = currentColor;
}

let getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
}

setInterval(changeColor, 3000);
