const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerEl = document.getElementById("startTime")
const quizText = document.getElementById("quizText")
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', function start() {
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;
    timer = setInterval(function() {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
})

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
}

function startGame(){
    startButton.classList.add('hide')
    quizText.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    

}

function showQuestion(question){
    questionElement.innerText = question.question
question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
        
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }   else {
        element.classList.add('wrong')
    }

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

}

const questions = [
    {
      question: "Which of the following is NOT a commonly used data type?",
      answers: [
         { text: 'boolean', correct: false}, 
         { text: 'numbers', correct: false}, 
         { text: 'strings', correct: false}, 
         { text: 'containers', correct: true}, 
      ] 
    },
    {
      question: "Which of the following numbers identifies the first index in an array?",
      answers: [
         { text: '0', correct: true}, 
         { text: '1', correct: false}, 
         { text: '2', correct: false}, 
         { text: '3', correct: false}, 
      ] 
    },
    {
      question: "How do you link a javascript file in HTML?",
      answers: [
         { text: 'src', correct: true}, 
         { text: 'href', correct: false}, 
         { text: 'index', correct: false}, 
         { text: 'UTF-8', correct: false}, 
      ] 
    },
    {
      question: "Which language is most commonly used to style HTML webpages?",
      answers: [
         { text: 'CSS', correct: true}, 
         { text: 'C#', correct: false}, 
         { text: 'Python', correct: false}, 
         { text: 'C++', correct: false}, 
      ] 
    },
    {
      question: "Which of the following best describes a way of simplifying programming language before starting to code?",
      answers: [
         { text: 'Pseudo-code', correct: true}, 
         { text: 'wire framing', correct: false}, 
         { text: 'debugging', correct: false}, 
         { text: 'code refactoring', correct: false}, 
      ] 
    }
]

