let start = document.getElementById('start')
let clearCell = document.getElementById("clearCell")
let clearBoard = document.getElementById("clearBoard")
let redButton = document.getElementById("red");
let blueButton = document.getElementById("blue");
let greenButton = document.getElementById("green");
let yellowButton = document.getElementById("yellow");
let violetButton = document.getElementById("violet");
let currentColor = document.getElementById("currentColor");
let colorButton = document.getElementsByClassName('colorButton')
let cell = document.getElementsByClassName("cell");
let button = document.getElementsByTagName('button')
let cellArray = Array.from(cell)

let colorStyle = currentColor.style.backgroundColor

/* ENABLE COLOR BUTTONS */

start.addEventListener('click', (e) => {
  for (num = 0; num < button.length; num++) {
    button[num].disabled = false;
  }
})

addEventListener('click', (e) => {
if (e.target.textContent.includes('14')){
  alert(`Ouch! Don't touch me there.`);
}
})


/* CHANGE CELL COLOR */
addEventListener('click', (e) => {
  if (e.target.className.includes('cell')) {
    e.target.style.backgroundColor = colorStyle;
  }
})

// /* CLEAR BOARD */
clearBoard.addEventListener('click', (e) => {
  cellArray.map(cell => {
    cell.style.backgroundColor = 'lightgrey'
  })
})
/* CLEAR BOARD ALTERNATE */
// addEventListener('click', (e) => {
//   if (e.target.textContent === 'Clear Board'){
//     console.log('clear board');
//     cellArray.map(cell =>{
//       cell.style.backgroundColor = 'lightgrey'
//     })
//   }
// })

// /* CLEAR CELL */
clearCell.addEventListener('click', (e) => {
  currentColor.textContent = "Clear Cell";
  colorStyle = 'Lightgrey'
  console.log(currentColor.textContent);
})



/* NOTES
Array.from will turn things into an array

Hey Dominic! Using the document.getElementsByClassName will allow you to get every cell at once, and then if you convert that into an array with Array.from you can loop over it to add your event listeners.  That way you don't need to target 64 divs individually and add event listeners.
*/




/* COLOR BUTTONS */
redButton.addEventListener("click", () => {
  currentColor.textContent = "Red";
  colorStyle = 'Red'
  console.log(currentColor.textContent);
});

blueButton.addEventListener("click", () => {
  currentColor.textContent = "Blue";
  colorStyle = 'Blue'
  console.log(currentColor.textContent);
});

greenButton.addEventListener("click", () => {
  currentColor.textContent = "Green";
  colorStyle = 'Green'
  console.log(currentColor.textContent);
});

yellowButton.addEventListener("click", () => {
  currentColor.textContent = "Yellow";
  colorStyle = 'Yellow'
  console.log(currentColor.textContent);
});

violetButton.addEventListener("click", () => {
  currentColor.textContent = "Violet";
  colorStyle = 'Violet'
  console.log(currentColor.textContent);
});
