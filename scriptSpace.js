const questions = [
    {
        question: "Which planet is known as the &quot;Red Planet&quot;?",
        answers: [
            { text: "Mars", correct: true},
            { text: "Venus", correct: false},
            { text: "Jupiter", correct: false},
            { text: "Saturn", correct: false},
        ]
    },
    {
        question: "What is the name of the largest moon in our solar system?",
        answers: [
            { text: "Titan", correct: false},
            { text: "Europa", correct: false},
            { text: "Ganymede", correct: true},
            { text: "Enceladus", correct: false},
        ]
    },
    {
        question: "Which star is closest to Earth?",
        answers: [
            { text: "Alpha Centauri", correct: false},
            { text: "Sirius", correct: false},
            { text: "Proxima Centauri", correct: true},
            { text: "Betelgeuse", correct: false},
        ]
    },
    {
        question: "What is the name of the galaxy that contains our solar system?",
        answers: [
            { text: "Milky Way", correct: true},
            { text: "Andromeda", correct: false},
            { text: "Triangulum", correct: false},
            { text: "Sombrero", correct: false},
        ]
    },
    {
        question: "What is the process by which a star dies and explodes?",
        answers: [
            { text: "Supernova", correct: true},
            { text: "Black hole", correct: false},
            { text: "Nebula", correct: false},
            { text: "Red giant", correct: false},
        ]
    },
    {
        question: "What is the name of the largest planet in our solar system?",
        answers: [
            { text: "Mercury", correct: false},
            { text: "Venus", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
        ]
    },
    {
        question: "Which planet has the most moons?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Neptune", correct: false},
        ]
    },
    {
        question: "What is the name of the first human-made satellite to orbit Earth?",
        answers: [
            { text: "Sputnik 1", correct: true},
            { text: "Hubble Space Telescope", correct: false},
            { text: "Voyager 1", correct: false},
            { text: "International Space Station", correct: false},
        ]
    },
    {
        question: "What is the phenomenon where light from a star is bent by the gravity of a massive object?",
        answers: [
            { text: "Black hole", correct: true},
            { text: "Supernova", correct: false},
            { text: "Nebula", correct: false},
            { text: "Gravitational lensing", correct: false},
        ]
    },
    {
        question: "What is the name of the mission that landed humans on the moon for the first time?",
        answers: [
            { text: "Gemini 7", correct: false},
            { text: "Voyager 2", correct: false},
            { text: "Mars Pathfinder", correct: false},
            { text: "Apollo 11", correct: true},
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
        question: "Which planet has the most rings?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: false},
            { text: "Saturn", correct: true},
        ]
    },
    {
        question: "What is the name of the brightest star in the night sky?",
        answers: [
            { text: "Alpha Centauri", correct: false},
            { text: "Sirius", correct: true},
            { text: "Proxima Centauri", correct: false},
            { text: "Betelgeuse", correct: false},
        ]
    },
    {
        question: "What is the name of the first American woman to travel to space?",
        answers: [
            { text: "Sally Ride", correct: true},
            { text: "Valentina Tereshkova", correct: false},
            { text: "Mae Jemison", correct: false},
            { text: "Peggy Whitson", correct: false},
        ]
    },
    {
        question: "What is the name of the first spacecraft to land on Mars?",
        answers: [
            { text: "Mars Pathfinder", correct: false},
            { text: "Viking 1", correct: true},
            { text: "Curiosity", correct: false},
            { text: "Opportunity", correct: false},
        ]
    },
    {
        question: "Which planet is known for its beautiful rings?",
        answers: [
            { text: "Mars", correct: false},
            { text: "Venus", correct: false},
            { text: "Jupiter", correct: false},
            { text: "Saturn", correct: true},
        ]
    },
    {
        question: "What is the name of the largest volcano in our solar system, located on Mars?",
        answers: [
            { text: "Mount Everest", correct: false},
            { text: "Olympus Mons", correct: true},
            { text: "Mount Kilimanjaro", correct: false},
            { text: "Mount Fuji", correct: false},
        ]
    },
    {
        question: "What is the name of the first space shuttle to be launched into space?",
        answers: [
            { text: "Challenger", correct: false},
            { text: "Atlantis", correct: false},
            { text: "Columbia", correct: true},
            { text: "Discovery", correct: false},
        ]
    },
    {
        question: "Which planet is known for its prominent red spot, a giant storm?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Neptune", correct: false},
        ]
    },
    {
        question: "What is the name of the mission that sent the first human to walk on the moon?",
        answers: [
            { text: "Apollo 11", correct: true},
            { text: "Gemini 7", correct: false},
            { text: "Voyager 2", correct: false},
            { text: "Mars Pathfinder", correct: false},
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
    questionElement.innerHTML = `${userName}, your Space quiz scored ${score} out of ${questions.
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