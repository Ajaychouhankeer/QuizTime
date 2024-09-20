const questions = [
    {
        question: "Which of the following is a synonym for 'exquisite'?",
        answers: [
            { text: "Beautiful", correct: true},
            { text: "Ugly", correct: false},
            { text: "Mediocre", correct: false},
            { text: "Average", correct: false},
        ]
    },
    {
        question: "What is the correct spelling of the word meaning &quot;to make a mistake&quot;?",
        answers: [
            { text: "Mistake", correct: true},
            { text: "Mistake", correct: false},
            { text: "Mistak", correct: false},
            { text: "Mistek", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of an adverb?",
        answers: [
            { text: "Quickly", correct: true},
            { text: "Cat", correct: false},
            { text: "Table", correct: false},
            { text: "Happy", correct: false},
        ]
    },
    {
        question: "Which of the following is a type of figurative language that uses exaggeration for emphasis?",
        answers: [
            { text: "Simile", correct: false},
            { text: "Metaphor", correct: false},
            { text: "Hyperbole", correct: true},
            { text: "Personification", correct: false},
        ]
    },
    {
        question: "What is the plural form of the word &quot;child&quot;?",
        answers: [
            { text: "Childs", correct: false},
            { text: "Childs", correct: false},
            { text: "Childs", correct: true},
            { text: "Child&#39;s", correct: false},
        ]
    },
    {
        question: "Which of the following is a preposition?",
        answers: [
            { text: "Run", correct: false},
            { text: "With", correct: true},
            { text: "Jump", correct: false},
            { text: "Sing", correct: false},
        ]
    },
    {
        question: "What is the correct past tense of the verb &quot;go&quot;?",
        answers: [
            { text: "Goed", correct: false},
            { text: "Gone", correct: false},
            { text: "Went", correct: true},
            { text: "Go", correct: false},
        ]
    },
    {
        question: "Which of the following is a synonym for &quot;happy&quot;?",
        answers: [
            { text: "Sad", correct: false},
            { text: "Angry", correct: false},
            { text: "Joyful", correct: true},
            { text: "Frustrated", correct: false},
        ]
    },
    {
        question: "What is the opposite of the word &quot;big&quot;?",
        answers: [
            { text: "Small", correct: true},
            { text: "Tall", correct: false},
            { text: "Huge", correct: false},
            { text: "Giant", correct: false},
        ]
    },
    {
        question: "Which of the following is a conjunction?",
        answers: [
            { text: "Dog", correct: false},
            { text: "And", correct: true},
            { text: "Blue", correct: false},
            { text: "Run", correct: false},
        ]
    },
    {
        question: "What is the correct spelling of the word meaning &quot;to express gratitude&quot;?",
        answers: [
            { text: "Thankful", correct: false},
            { text: "Greatful", correct: false},
            { text: "Grateful", correct: true},
            { text: "Gratful", correct: false},
        ]
    },
    {
        question: "Which of the following is a synonym for &quot;brave&quot;?",
        answers: [
            { text: "Cowardly", correct: false},
            { text: "Fearful", correct: false},
            { text: "Courageous", correct: true},
            { text: "Timid", correct: false},
        ]
    },
    {
        question: "What is the plural form of the word &quot;ox&quot;?",
        answers: [
            { text: "Oxes", correct: false},
            { text: "Oxen", correct: true},
            { text: "Oxs", correct: false},
            { text: "Ox&#39;s", correct: false},
        ]
    },
    {
        question: "Which of the following is a type of sentence that expresses a command or request?",
        answers: [
            { text: "Declarative", correct: false},
            { text: "Interrogative", correct: false},
            { text: "Imperative", correct: true},
            { text: "Exclamatory", correct: false},
        ]
    },
    {
        question: "What is the opposite of the word &quot;hot&quot;?",
        answers: [
            { text: "Cold", correct: true},
            { text: "Warm", correct: false},
            { text: "Boiling", correct: false},
            { text: "Scorching", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of a conjunction?",
        answers: [
            { text: "Book", correct: false},
            { text: "But", correct: true},
            { text: "Sleep", correct: false},
            { text: "Laugh", correct: false},
        ]
    },
    {
        question: "What is the correct comparative form of the adjective &quot;good&quot;?",
        answers: [
            { text: "Gooder", correct: false},
            { text: "Goodest", correct: false},
            { text: "Better", correct: true},
            { text: "Best", correct: false},
        ]
    },
    {
        question: "Which of the following is a synonym for &quot;sad&quot;?",
        answers: [
            { text: "Happy", correct: false},
            { text: "Angry", correct: false},
            { text: "Depressed", correct: true},
            { text: "Excited", correct: false},
        ]
    },
    {
        question: "What is the opposite of the word &quot;fast&quot;?",
        answers: [
            { text: "Slow", correct: true},
            { text: "Quick", correct: false},
            { text: "Rapid", correct: false},
            { text: "Speedy", correct: false},
        ]
    },
    {
        question: "Which of the following is a type of sentence that expresses strong emotion or surprise?",
        answers: [
            { text: "Declarative", correct: false},
            { text: "Interrogative", correct: false},
            { text: "Imperative", correct: false},
            { text: "Exclamatory", correct: true},
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
    questionElement.innerHTML = `${userName}, your English quiz scored ${score} out of ${questions.
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