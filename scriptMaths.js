const questions = [
    {
        question: "A vendor has 7865 storybooks and 1267 comic books. He wants to pack all of them in 6 boxes. How many books can be arranged in each box?",
        answers: [
            { text: "1521", correct: false},
            { text: "1522", correct: true},
            { text: "1523", correct: false},
            { text: "1524", correct: false},
        ]
    },
    {
        question: "Find the number of zeroes in 10*20*30*.......*1000?",
        answers: [
            { text: "100", correct: false},
            { text: "124", correct: true},
            { text: "120", correct: false},
            { text: "150", correct: false},
        ]
    },
    {
        question: "40% persons read newspaper X and 50% person read newspaper Y. 10% persons read both newspapers. How many persons do not read any of the newspapers?",
        answers: [
            { text: "15%", correct: false},
            { text: "25%", correct: false},
            { text: "20%", correct: true},
            { text: "30%", correct: false},
        ]
    },
    {
        question: "Find the square root of the perfact square made by multiplying 4050 with a least positive integer?",
        answers: [
            { text: "80", correct: false},
            { text: "90", correct: true},
            { text: "85", correct: false},
            { text: "95", correct: false},
        ]
    },
    {
        question: "The sum of three consecutive multiples of 5 is 285. Find the largest number?",
        answers: [
            { text: "75", correct: false},
            { text: "100", correct: true},
            { text: "120", correct: false},
            { text: "90", correct: false},
        ]
    },
    {
        question: "20 + 12 = ?",
        answers: [
            { text: "32", correct: true},
            { text: "36", correct: false},
            { text: "42", correct: false},
            { text: "66", correct: false},
        ]
    },
    {
        question: "Mannu multiplies a number by 2 instead of dividind the number by 2. Resultant number is what percentage of the correct value?",
        answers: [
            { text: "200%", correct: false},
            { text: "300%", correct: false},
            { text: "50%", correct: false},
            { text: "400%", correct: true},
        ]
    },
    {
        question: "A monkey climbs a 12 meters hight slippert pillar. In his first minute, he climbs 2 meters and in the next minute, he slips one meter down. In this way, how much time will he take to reach the top of the pillar?",
        answers: [
            { text: "10 minutes", correct: false},
            { text: "21 minutes", correct: true},
            { text: "12 minutes", correct: false},
            { text: "11 minutes", correct: false},
        ]
    },
    {
        question: "In a class of 100 students, 50 students passed in mathematics and 70 passed in English, 5 students failed in both Mathematics an English. How many Students passed in both the subjects?",
        answers: [
            { text: "50", correct: false},
            { text: "40", correct: false},
            { text: "35", correct: false},
            { text: "25", correct: true},
        ]
    },
    {
        question: "What is the square root of 64?",
        answers: [
            { text: "4", correct: false},
            { text: "8", correct: true},
            { text: "16", correct: false},
            { text: "32", correct: false},
        ]
    },
    {
        question: "The sum of two numbers is 90. If one of them exceed the other by 16, find boht the numbers?",
        answers: [
            { text: "50, 40", correct: false},
            { text: "53, 37", correct: true},
            { text: "64, 48", correct: false},
            { text: "43, 47", correct: false},
        ]
    },
    {
        question: "What is the value of π (pi) approximately?",
        answers: [
            { text: "2.718", correct: false},
            { text: "3.618", correct: false},
            { text: "3.142", correct: true},
            { text: "4.236", correct: false},
        ]
    },
    {
        question: "What is the sum of angles in a triangle?",
        answers: [
            { text: "90 degrees", correct: false},
            { text: "180 degrees", correct: true},
            { text: "270 degrees", correct: false},
            { text: "360 degrees", correct: false},
        ]
    },
    {
        question: "What is the formula for the area of a circle?",
        answers: [
            { text: "A = πr", correct: false},
            { text: "A = 2πr", correct: false},
            { text: "A = πr^2", correct: true},
            { text: "A = 2πr^2", correct: false},
        ]
    },
    {
        question: "What is the value of 2 + 2 × 2?",
        answers: [
            { text: "4", correct: false},
            { text: "6", correct: false},
            { text: "8", correct: true},
            { text: "10", correct: false},
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
        ]
    },
    {
        question: "What is the formula for the volume of a sphere?",
        answers: [
            { text: "V = 4/3πr", correct: false},
            { text: "V = 4/3πr^2", correct: false},
            { text: "V = πr^3", correct: true},
            { text: "V = 2πr^3", correct: false},
        ]
    },
    {
        question: "What is the value of 5! (factorial of 5)?",
        answers: [
            { text: "5", correct: false},
            { text: "10", correct: false},
            { text: "20", correct: false},
            { text: "120", correct: true},
        ]
    },
    {
        question: "What is the slope-intercept form of a linear equation?",
        answers: [
            { text: "y = mx + b", correct: true},
            { text: "y = ax^2 + bx + c", correct: false},
            { text: "y = a/x + b", correct: false},
            { text: "y = a^2 + bx + c", correct: false},
        ]
    },
    {
        question: "What is the value of sin(90 degrees)?",
        answers: [
            { text: "0", correct: false},
            { text: "1", correct: true},
            { text: "-1", correct: false},
            { text: "Undefined", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const submitFormElement = document.getElementById("submitForm");
const submitBtnElement = document.getElementById("submitBtn");
const inputScoreElement = document.getElementById("inputScore");
const inputUserElement = document.getElementById("inputUser");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
     resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButton.appendChild(button);
       if(answer.correct){
           button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", selectAnswer);
    });
}
startQuiz();
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore(){
    resetState();
    questionElement.innerHTML = '';
    submitFormElement.classList.remove('d-none');
    inputUserElement.value='';
    inputScoreElement.value=score;    
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

submitBtnElement.addEventListener("click", ()=>{
    resetState();
    
    userName = inputUserElement.value;
    if(!userName.length > 0){
        inputUserElement.classList.add("is-invalid")

    }else {

   
    submitFormElement.classList.add('d-none');
    questionElement.innerHTML = `${userName}, your Maths quiz scored ${score} out of ${questions.
        length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
    }

});

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});