

let startButton = document.getElementById("start-btn");
let choiceButton = document.getElementById("choice-box")
let sportButton = document.getElementById("sport");
let geographyButton = document.getElementById("geography");
let generalKnowledgeButton = document.getElementById("general-knowledge");
let sportQuiz = document.getElementById("sport-quiz")
let welcome = document.getElementById("welcome");


startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    welcome.classList.add("hide")
    choiceButton.classList.remove("hide")
}

sportButton.addEventListener("click", sportGame)

function sportGame() {
    sportQuiz.classList.remove("hide")
    choiceButton.classList.add("hide") 
}

let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")

one.addEventListener("click", myAnswer)
two.addEventListener("click", myAnswer)
three.addEventListener("click", myAnswer)

function myAnswer() {
    let correctAnswer = one

    if(correctAnswer) {
        document.one.style.backgroundColor = "green";
    }

    
}


