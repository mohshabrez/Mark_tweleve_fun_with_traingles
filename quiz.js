const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");

const outputE2 = document.querySelector("#output");

const correctAnswers = ["90°" , "right angle", "Two sides are equal", "EquiAngular", "Acute Traingle"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()){
        if (value === correctAnswers[index]){
            score = score+1;
        }
        index = index + 1;
    }
    outputE2.innerText = "You did  " + score + "  Correct answers and score is  " + score;
}
submitAnswerBtn.addEventListener("click", calculateScore);

