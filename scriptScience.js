const questions = [
    {
        question: "What is the largest organ in the human body?",
        answers: [
            { text: "Liver", correct: false},
            { text: "Brain", correct: false},
            { text: "Skin", correct: true},
            { text: "Heart", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for the element gold?",
        answers: [
            { text: "Au", correct: true},
            { text: "Ag", correct: false},
            { text: "Fe", correct: false},
            { text: "Hg", correct: false},
        ]
    },
    {
        question: "What is the unit of measurement for electric current?",
        answers: [
            { text: "Volt", correct: false},
            { text: "Ampere", correct: true},
            { text: "Ohm", correct: false},
            { text: "Watt", correct: false},
        ]
    },
    {
        question: "What is the process by which plants convert sunlight into energy?",
        answers: [
            { text: "Photosynthesis", correct: true},
            { text: "Respiration", correct: false},
            { text: "Transpiration", correct: false},
            { text: "Germination", correct: false},
        ]
    },
    {
        question: "What is the smallest unit of matter?",
        answers: [
            { text: "Atom", correct: true},
            { text: "Molecule", correct: false},
            { text: "Cell", correct: false},
            { text: "Electron", correct: false},
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mercury", correct: false},
            { text: "Venus", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
        ]
    },
    {
        question: "What is the study of fossils called?",
        answers: [
            { text: "Paleontology", correct: true},
            { text: "Geology", correct: false},
            { text: "Archaeology", correct: false},
            { text: "Anthropology", correct: false},
        ]
    },
    {
        question: "Which scientist is known for the theory of general relativity?",
        answers: [
            { text: "Isaac Newton", correct: false},
            { text: "Albert Einstein", correct: true},
            { text: "Galileo Galilei", correct: false},
            { text: "Nikola Tesla", correct: false},
        ]
    },
    {
        question: "What is the process of a solid changing directly into a gas called?",
        answers: [
            { text: "Melting", correct: false},
            { text: "Evaporation", correct: false},
            { text: "Condensation", correct: false},
            { text: "Sublimation", correct: true},
        ]
    },
    {
        question: "What is the study of fossils called?",
        answers: [
            { text: "Paleontology", correct: true},
            { text: "Geology", correct: false},
            { text: "Archaeology", correct: false},
            { text: "Anthropology", correct: false},
        ]
    },
    {
        question: "Which scientist is known for the theory of general relativity?",
        answers: [
            { text: "Isaac Newton", correct: false},
            { text: "Albert Einstein", correct: true},
            { text: "Galileo Galilei", correct: false},
            { text: "Nikola Tesla", correct: false},
        ]
    },
    {
        question: "What is the process of a solid changing directly into a gas called?",
        answers: [
            { text: "Melting", correct: false},
            { text: "Evaporation", correct: false},
            { text: "Condensation", correct: false},
            { text: "Sublimation", correct: true},
        ]
    },
    {
        question: "What is the largest moon in our solar system?",
        answers: [
            { text: "Titan", correct: false},
            { text: "Ganymede", correct: true},
            { text: "Europa", correct: false},
            { text: "Callisto", correct: false},
        ]
    },
    {
        question: "What is the study of the Earth&#39;s atmosphere called?",
        answers: [
            { text: "Meteorology", correct: true},
            { text: "Geology", correct: false},
            { text: "Astronomy", correct: false},
            { text: "Oceanography", correct: false},
        ]
    },
    {
        question: "What is the SI unit of force?",
        answers: [
            { text: "Newton", correct: true},
            { text: "Joule", correct: false},
            { text: "Watt", correct: false},
            { text: "Pascal", correct: false},
        ]
    },
    {
        question: "What is the process of a liquid changing into a gas at the surface called?",
        answers: [
            { text: "Melting", correct: false},
            { text: "Evaporation", correct: true},
            { text: "Condensation", correct: false},
            { text: "Sublimation", correct: false},
        ]
    },
    {
        question: "What is the branch of science that studies the behavior of matter and energy?",
        answers: [
            { text: "Biology", correct: false},
            { text: "Chemistry", correct: false},
            { text: "Physics", correct: true},
            { text: "Geology", correct: false},
        ]
    },
    {
        question: "Which scientist discovered the laws of motion?",
        answers: [
            { text: "Isaac Newton", correct: false},
            { text: "Albert Einstein", correct: true},
            { text: "Galileo Galilei", correct: false},
            { text: "Nikola Tesla", correct: false},
        ]
    },
    {
        question: "What is the study of the Earth&#39;s physical structure and substance called?",
        answers: [
            { text: "Geology", correct: true},
            { text: "Meteorology", correct: false},
            { text: "Astronomy", correct: false},
            { text: "Biology", correct: false},
        ]
    },
    {
        question: "What is the SI unit of electric current?",
        answers: [
            { text: "Ampere", correct: true},
            { text: "Volt", correct: false},
            { text: "Ohm", correct: false},
            { text: "Watt", correct: false},
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
    questionElement.innerHTML = `${userName}, your Science quiz scored ${score} out of ${questions.
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