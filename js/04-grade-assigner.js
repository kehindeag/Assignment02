console.log("Hello World!!!!");

//The “Grade Assigner” Application
//Usage: Use else if statements
let yourScore = parseInt(prompt("Please enter your score"));
let lowScore = parseInt(1);
let highScore = parseInt(100);

if (yourScore > lowScore && yourScore < highScore) {
  if (yourScore >= 90) {
    console.log("You receieved an A");
  } else if (yourScore >= 80) {
    console.log("You received a B");
  } else if (yourScore >= 70) {
    console.log("You received a C");
  } else if (yourScore >= 60) {
    console.log("You received a D");
  } else if (yourScore < 60) {
    console.log("You received an F");
  }
} else {
  console.log("Enter only number between 1 and 100");
}
