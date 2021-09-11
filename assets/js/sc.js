let geoQuiz = document.getElementById("geo-quiz")
geoButton.addEventListener("click", geoGame)

function geoGame() {
    geoQuiz.classList.remove("hide")
    choiceButton.classList.add("hide") 
}


/*---- Geography Quiz*/


let oneTwo = document.getElementById("one-two")
let twoTwo = document.getElementById("two-two")
let threeTwo = document.getElementById("three-two")

oneTwo.addEventListener("click", myGeoAnswer)
twoTwo.addEventListener("click", myGeoWrongAnswer)
threeTwo.addEventListener("click", myGeoWrongAnswer)

function myGeoAnswer() {
    document.getElementById("one-two").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("two-two").style.backgroundColor = "red";
    document.getElementById("three-two").style.backgroundColor = "red";
}
function myGeoWrongAnswer() {
    document.getElementById("two-two").style.backgroundColor = "red";
    document.getElementById("three-two").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("one-two").style.backgroundColor = "green";
    }

let fourTwo = document.getElementById("four-two")
let fiveTwo = document.getElementById("five-two")
let sixTwo = document.getElementById("six-two")

fourOne.addEventListener("click", myGeoOneWrongAnswer)
fiveOne.addEventListener("click", myGeoOneWrongAnswer)
sixOne.addEventListener("click", myGeoOneAnswer) 

function myGeoOneAnswer() {
    document.getElementById("six-two").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("four-two").style.backgroundColor = "red";
    document.getElementById("five-two").style.backgroundColor = "red";
}
function myGeoOneWrongAnswer() {
    document.getElementById("four-two").style.backgroundColor = "red";
    document.getElementById("five-two").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("six-two").style.backgroundColor = "green"; {
    }
}

let sevenTwo = document.getElementById("seven-two")
let eightTwo = document.getElementById("eight-two")
let nineTwo = document.getElementById("nine-two")

sevenOne.addEventListener("click", myGeoTwoAnswer)
eightOne.addEventListener("click", myGeoTwoWrongAnswer)
nineOne.addEventListener("click", myGeoTwoWrongAnswer) 

function myGeoTwoAnswer() {
    document.getElementById("seven-two").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("eight-two").style.backgroundColor = "red";
    document.getElementById("nine-two").style.backgroundColor = "red";
}
function myGeoTwoWrongAnswer() {
    document.getElementById("eight-two").style.backgroundColor = "red";
    document.getElementById("nine-two").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("seven-two").style.backgroundColor = "green"; {
    }
}

let tenTwo = document.getElementById("ten-two")
let elevenTwo = document.getElementById("eleven-two")
let twelveTwo = document.getElementById("twelve-two")

tenOne.addEventListener("click", myGeoThreeWrongAnswer)
elevenOne.addEventListener("click", myGeoThreeWrongAnswer)
twelveOne.addEventListener("click", myGeoThreeAnswer) 

function myGeoThreeAnswer() {
    document.getElementById("twelve-two").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("ten-two").style.backgroundColor = "red";
    document.getElementById("eleven-two").style.backgroundColor = "red";
}
function myGeoThreeWrongAnswer() {
    document.getElementById("ten-two").style.backgroundColor = "red";
    document.getElementById("eleven-two").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("twelve-two").style.backgroundColor = "green"; {
    }
}

let thirteenTwo = document.getElementById("thirteen-two")
let fourteenTwo = document.getElementById("fourteen-two")
let fifteenTwo = document.getElementById("fifteen-two")

thirteenOne.addEventListener("click", myGeoFourAnswer)
fourteenOne.addEventListener("click", myGeoFourWrongAnswer)
fifteenOne.addEventListener("click", myGeoFourWrongAnswer) 

function myGeoFourAnswer() {
    document.getElementById("thirteen-two").style.backgroundColor = "green"; {
        alert("well done!")
    }
    document.getElementById("fifteen-two").style.backgroundColor = "red";
    document.getElementById("fourteen-two").style.backgroundColor = "red";
}
function myGeoFourWrongAnswer() {
    document.getElementById("fifteen-two").style.backgroundColor = "red";
    document.getElementById("fourteen-two").style.backgroundColor = "red"; {
        alert("Unlucky")
    }
    document.getElementById("thirteen-two").style.backgroundColor = "green"; {
    }
}