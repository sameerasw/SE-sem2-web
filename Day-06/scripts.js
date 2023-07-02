var score = 0;

let x = Maths.floor(Maths.random()*101);
let y = Maths.floor(Maths.random()*101);
//select a random operator from the list
let operators = ["+","-","*"];
let operator = operators[Maths.floor(Maths.random()*operators.length)];

validateAnswer("question1",prompt(x + operator + y + " = ..."), "feedback1", eval(x + operator + y), "answer1",x + operator + y + " = ...");

// validateAnswer("question1",prompt("5 + 2 = ..."), "feedback1", 7, "answer1","5 + 2 = ...");
validateAnswer("question2",prompt("5 - 2 = ..."), "feedback2", 3, "answer2","5 - 2 = ...");
validateAnswer("question3",prompt("5 * 2 = ..."), "feedback3", 10, "answer3","5 * 2 = ...");
validateAnswer("question4",prompt("5 / 2 = ..."), "feedback4", 2.5, "answer4","5 / 2 = ...");
validateAnswer("question5",prompt("5 % 2 = ..."), "feedback5", 1, "answer5","5 % 2 = ...");
validateAnswer("question6",prompt("5 ** 2 = ..."), "feedback6", 25, "answer6","5 ** 2 = ...");
validateAnswer("question7",prompt("5 + 2 * 3 = ..."), "feedback7", 11, "answer7","5 + 2 * 3 = ...");
validateAnswer("question8",prompt("(5 + 2) * 3 = ..."), "feedback8", 21, "answer8","(5 + 2) * 3 = ...");
validateAnswer("question9",prompt("5 + 2 * 3 - 4 = ..."), "feedback9", 9, "answer9","5 + 2 * 3 - 4 = ...");
validateAnswer("question10",prompt("(5 + 2) * (3 - 4) = ..."), "feedback10", -7, "answer10","(5 + 2) * (3 - 4) = ...");

document.getElementById("score").innerHTML = "Total score is :" + score/10 * 100 + "%";

//validating the answer
function validateAnswer(element,answerInput,feedback,answer,answerId,question) {
    document.getElementById(element).innerHTML = question;
    if (answerInput == answer) {
        document.getElementById(answerId).innerHTML = answerInput;
        document.getElementById(feedback).innerHTML = "&checkmark; Correct Answer";
        document.getElementById(feedback).classList.add("correct");
        score++;
    } else {
        document.getElementById(answerId).innerHTML = answerInput;
        document.getElementById(feedback).innerHTML = "&cross; Wrong Answer";
        document.getElementById(feedback).classList.add("incorrect");
    }
}