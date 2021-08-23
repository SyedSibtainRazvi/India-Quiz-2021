var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

// Welcome //

var userName = readlineSync.question(chalk.yellow("What is your name? "));

console.log("WELCOME TO INDIA QUIZ 2021 " + userName + " ");
console.log(chalk.green("Please select the correct option number and hit Enter button"));

// Game Function//

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right!"));
    score = score + 1;
    console.log(score);
  } else {
    console.log(chalk.redBright("Wrong!"));
  }
  console.log("________________________________________________");
}

// Array of questions //

var questions = [{
  question: "What is Capital of India? -> 1)Mumbai 2)Delhi 3)Karnataka ",
  answer: "2"
}, {
  question: "Which is the longest river of Inda? -> 1)Ganga 2)Yamuna 3)Indus ",
  answer: "3"
}, {
  question: "Which is the Biggest State of India? -> 1)Andhra Pradesh 2)Rajasthan 3)Odisha ",
  answer: "2"
}, {
  question: "Which is the Smallest State of India? -> 1)Goa 2)Sikkim 3)Tripura  ",
  answer: "1"
}, {
  question: "How many States are there in India? -> 1)29 2)28 3)27 ",
  answer: "2"
}, {
  question: "How many UT's are there in India? -> 1)8 2)7 3)9 ",
  answer: "1"
}, {
  question: "Which is the National animal of India? -> 1)Elephant 2)Lion 3)Tiger",
  answer: "3"
}, {
  question: "Which is the Highest peak in India? -> 1)Nun Kun 2)Kanchenjunga 3)Kedarnath",
  answer: "2"
}, {
  question: "National flower of India? -> 1)Tulip 2)Rose 3)Lotus",
  answer: "3"
}, {
  question: "Which is the Longest Beach in India? -> 1) Marina Beach 2)Juhu Beach 3)Calangute Beach",
  answer: "1"
}];

// Loop //

for (var i = 0; i < questions.length; i++) {
  var activeQuestion = questions[i];
  play(activeQuestion.question, activeQuestion.answer)
}

// High scores //

var highScores = [{
  Name: "Sibtain",
  Score: "10"
},{
  Name : "Sid",
  Score : "10"
}];

console.log(chalk.black.bgYellow
("Thank you for playing the Quiz! Your score: " + score + "  "));
if (score >= 10) {
  console.log(chalk.black.bgWhiteBright("Hurray!!!, you have the new high score, send me the screenshot and I will update the score"))
} else {
  console.log(chalk.black.bgWhiteBright("Beat the high score and send me the screenshot "));
}
console.log(chalk.black.bgGreen("People with  the highest score are named below "));
console.log(highScores[0]);
console.log(highScores[1]);

