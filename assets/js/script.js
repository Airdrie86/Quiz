let startButton = document.getElementById("start-btn");
let choiceButton = document.getElementById("choice-box")
let sportButton = document.getElementById("sport");
let geographyButton = document.getElementById("geography");
let generalKnowledgeButton = document.getElementById("general-knowledge");
let questionBox = document.getElementById("question-box");
let welcome = document.getElementById("welcome");
let questions = document.getElementById("questions")


startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    welcome.classList.add("hide")
    choiceButton.classList.remove("hide")
}

sportButton.addEventListener("click", sportGame)

function sportGame() {
    questionBox.classList.remove("hide")
    choiceButton.classList.add("hide") 
}

let answerOne = document.getElementById("answer-one")

answerOne.addEventListener('click', this.OnEvent.bind("btn"));

function checkSportAnswer() {
    if(answerOne.innerText === "2003") {
        alert("ksjdf")
    }
}
    
