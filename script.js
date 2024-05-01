const greenButton = document.getElementById('yesButton');
const redButton = document.getElementById('noButton');
let Clickcount = 0;

const text = [
  "Are you sure?",
  "I'll give you second chance",
  "Better think wise !",
  "Dont rush your decision ! please.",
  "This is the last chance !!"
];

redButton.addEventListener('click' , () => {
  if(Clickcount < text.length)
  {
    redButton.textContent = text[Clickcount];
  }
  Clickcount++;
  if(Clickcount === 5)
  {
    redButton.remove();
    greenButton.textContent = "Yes i do 🥰";
  }
  else
  {
    const currentsize = window.getComputedStyle(greenButton).
    getPropertyValue('font-size');
    const Newsize = parseFloat(currentsize) * 1.5;
    greenButton.style.fontSize = Newsize + "px";
  }
});

greenButton.addEventListener('click' , () => {
  greenButton.innerHTML = "Nak telsu ra oppukuntav ani 😍";
  redButton.remove();
  greenButton.style.fontSize = "3rem";
});