var scanner = require("readline-sync");
console.log("Welcome to Ankur's Quiz");
let playerName = scanner.question("What is your name: ");
console.log("Welcome " + playerName);
let score = 0;
let highScores = 
[
    {
        name : "Ankur",
        score: 5
    },
    {
        name : "Sam",
        score: 0
    },
];
let questionOne = 
{
    question: "What is my favorite programming language: ",
    answer1: "1. Java",
    answer2: "2. JavaScript",
    answer3: "3. Python",
    answer4: "4. C",
    answer: "Java"
};
let questionTwo = 
{
    question: "Who is my best friend: ",
    answer1: "1. Priya",
    answer2: "2. Akshay",
    answer3: "3. Aditya",
    answer4: "4. Other",
    answer: "Priya"
};
let questionThree = 
{
    question: "Which is my dream IT company: ",
    answer1: "1. Google",
    answer2: "2. Yahoo",
    answer3: "3. Microsoft",
    answer4: "4. TCS",
    answer: "Google"
};
let questionFour = 
{
    question: "Which is my favorite sport: ",
    answer1: "1. Cricket",
    answer2: "2. Chess",
    answer3: "3. Basketball",
    answer4: "4. Table Tennis",
    answer: "Cricket"
};
//Creating an array of questions
let questionBank = [questionOne, questionTwo, questionThree, questionFour];
for (let i = 0; i < questionBank.length; i++)
{
    let questionToAsk = questionBank[i].question;
    console.log(questionToAsk);
    console.log(questionBank[i].answer1);
    console.log(questionBank[i].answer2);
    console.log(questionBank[i].answer3);
    console.log(questionBank[i].answer4);
    let answerEnteredByUser = scanner.question("Enter your answer in words: ");
    let answerOfTheQuestion = questionBank[i].answer;

    if(checkUserAnswer(answerOfTheQuestion, answerEnteredByUser) == true)
    {
        score++;
        console.log("Woh Correct Answer");
    }
    else
    {
        console.log("OOps Incorrect Answer");
    }
}
console.log("Score is: " + score);
if(score >= highScores[1].score)
{
    console.log("Congrats You are a High Scorer: ");
    highScores[1].name = playerName;
    highScores[1].score = score;
}

function checkUserAnswer(correctAnswer, answerEnteredByTheUser)
{
    let a1 = correctAnswer.toLowerCase();
    let a2 = answerEnteredByTheUser.toLowerCase();

    if(a1.localeCompare(a2) == 0)
    {
        return true;
    }
    return false;
}