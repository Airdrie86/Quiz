

let startButton = document.getElementById("start-btn");
let choiceButton = document.getElementById("choice-box")
let sportButton = document.getElementById("sport");
let geographyButton = document.getElementById("geography");
let generalKnowledgeButton = document.getElementById("general-knowledge");
let sportQuiz = document.getElementById("sport-quiz")
let welcome = document.getElementById("welcome");

/*---- open Home Page*/
startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    welcome.classList.add("hide")
    choiceButton.classList.remove("hide")
}
/*----Opens General Knowledge Quiz*/
sportButton.addEventListener("click", sportGame)

function sportGame() {
    sportQuiz.classList.remove("hide")
    choiceButton.classList.add("hide") 
}

/*---- Sport Quiz*/
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






/*----Opens General Knowledge Quiz*/
let generalQuiz = document.getElementById("general-quiz")
generalKnowledgeButton.addEventListener("click", generalKnowledgeGame)

function generalKnowledgeGame() {
    generalQuiz.classList.remove("hide")
    choiceButton.classList.add("hide") 
}

/*---- General Knowledge Quiz*/


let oneOne = document.getElementById("one-one")
let twoOne = document.getElementById("two-one")
let threeOne = document.getElementById("three-one")

oneOne.addEventListener("click", myGenAnswer)
twoOne.addEventListener("click", myGenWrongAnswer)
threeOne.addEventListener("click", myGenWrongAnswer)

function myGenAnswer() {
    document.getElementById("one-one").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("two-one").style.backgroundColor = "red";
    document.getElementById("three-one").style.backgroundColor = "red";
}
function myGenWrongAnswer() {
    document.getElementById("two-one").style.backgroundColor = "red";
    document.getElementById("three-one").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("one-one").style.backgroundColor = "green";
    }

let fourOne = document.getElementById("four-one")
let fiveOne = document.getElementById("five-one")
let sixOne = document.getElementById("six-one")

fourOne.addEventListener("click", myGenOneAnswer)
fiveOne.addEventListener("click", myGenOneWrongAnswer)
sixOne.addEventListener("click", myGenWrongAnswer) 

function myGenOneAnswer() {
    document.getElementById("four-one").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("six-one").style.backgroundColor = "red";
    document.getElementById("five-one").style.backgroundColor = "red";
}
function myGenOneWrongAnswer() {
    document.getElementById("six-one").style.backgroundColor = "red";
    document.getElementById("five-one").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("four-one").style.backgroundColor = "green"; {
    }
}

let sevenOne = document.getElementById("seven-one")
let eightOne = document.getElementById("eight-one")
let nineOne = document.getElementById("nine-one")

sevenOne.addEventListener("click", myGenTwoAnswer)
eightOne.addEventListener("click", myGenTwoWrongAnswer)
nineOne.addEventListener("click", myGenTwoWrongAnswer) 

function myGenTwoAnswer() {
    document.getElementById("eight-one").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("seven-one").style.backgroundColor = "red";
    document.getElementById("nine-one").style.backgroundColor = "red";
}
function myGenTwoWrongAnswer() {
    document.getElementById("seven-one").style.backgroundColor = "red";
    document.getElementById("nine-one").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("eight-one").style.backgroundColor = "green"; {
    }
}

ten-one.addEventListener("click", myGenThreeWrongAnswer)
eleven-one.addEventListener("click", myGenThreeAnswer)
twelve-one.addEventListener("click", myGenThreeWrongAnswer) 

function myGenThreeAnswer() {
    document.getElementById("eleven-one").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("ten-one").style.backgroundColor = "red";
    document.getElementById("twelve-one").style.backgroundColor = "red";
}
function myGenThreeWrongAnswer() {
    document.getElementById("ten-one").style.backgroundColor = "red";
    document.getElementById("twelve-one").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("eleven-one").style.backgroundColor = "green"; {
    }
}

thirteen-one.addEventListener("click", myfourWrongAnswer)
fourteen-one.addEventListener("click", myfourWrongAnswer)
fifteen-one.addEventListener("click", myfourAnswer) 

function myGenfourAnswer() {
    document.getElementById("fifteen-one").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("thirteen-one").style.backgroundColor = "red";
    document.getElementById("fourteen-one").style.backgroundColor = "red";
}
function myGenfourWrongAnswer() {
    document.getElementById("thirteen-one").style.backgroundColor = "red";
    document.getElementById("fourteen-one").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("fifteen-one").style.backgroundColor = "green"; {
    }
}