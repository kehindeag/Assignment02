console.log("Hello World");

//The “Coin Flip” Game
//Usage: Use nested conditional statements
let coinFlip;

let randomNum = Math.round(Math.random() * 10);

coinFlip = randomNum;

let certainNum = 5;
//alert(coinFlip);

let choice = prompt("select Heads or Tails");

if (coinFlip < certainNum) {
  if (choice == "Heads") {
    alert(`The flip was heads and you chose heads...you win!  ${randomNum}`);
  } else if (choice == "Tails") {
    alert(`The flip was heads but you chose tails...you lose! ${randomNum}`);
  }
} else if (coinFlip > certainNum) {
  if (choice == "Heads") {
    alert(`The flip was tails but you chose heads...you lose! ${randomNum}`);
  } else if (choice == "Tails") {
    alert(`The flip was tails and you chose tails...you win! ${randomNum}`);
  }
}
