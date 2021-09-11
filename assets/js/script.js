

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
two.addEventListener("click", myWrongAnswer)
three.addEventListener("click", myWrongAnswer)

function myAnswer() {
    document.getElementById("one").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("two").style.backgroundColor = "red";
    document.getElementById("three").style.backgroundColor = "red";
}
function myWrongAnswer() {
    document.getElementById("two").style.backgroundColor = "red";
    document.getElementById("three").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("one").style.backgroundColor = "green"; {
    }
}

four.addEventListener("click", myOneWrongAnswer)
five.addEventListener("click", myOneWrongAnswer)
six.addEventListener("click", myOneAnswer) 

function myOneAnswer() {
    document.getElementById("six").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("four").style.backgroundColor = "red";
    document.getElementById("five").style.backgroundColor = "red";
}
function myOneWrongAnswer() {
    document.getElementById("four").style.backgroundColor = "red";
    document.getElementById("five").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("six").style.backgroundColor = "green"; {
    }
}
seven.addEventListener("click", myTwoWrongAnswer)
eight.addEventListener("click", myTwoAnswer)
nine.addEventListener("click", myTwoWrongAnswer) 

function myTwoAnswer() {
    document.getElementById("eight").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("seven").style.backgroundColor = "red";
    document.getElementById("nine").style.backgroundColor = "red";
}
function myTwoWrongAnswer() {
    document.getElementById("seven").style.backgroundColor = "red";
    document.getElementById("nine").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("eight").style.backgroundColor = "green"; {
    }
}

ten.addEventListener("click", myThreeWrongAnswer)
eleven.addEventListener("click", myThreeAnswer)
twelve.addEventListener("click", myThreeWrongAnswer) 

function myThreeAnswer() {
    document.getElementById("eleven").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("ten").style.backgroundColor = "red";
    document.getElementById("twelve").style.backgroundColor = "red";
}
function myThreeWrongAnswer() {
    document.getElementById("ten").style.backgroundColor = "red";
    document.getElementById("twelve").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("eleven").style.backgroundColor = "green"; {
    }
}

thirteen.addEventListener("click", myfourWrongAnswer)
fourteen.addEventListener("click", myfourWrongAnswer)
fifteen.addEventListener("click", myfourAnswer) 

function myfourAnswer() {
    document.getElementById("fifteen").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("thirteen").style.backgroundColor = "red";
    document.getElementById("fourteen").style.backgroundColor = "red";
}
function myfourWrongAnswer() {
    document.getElementById("thirteen").style.backgroundColor = "red";
    document.getElementById("fourteen").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("fifteen").style.backgroundColor = "green"; {
    }
}