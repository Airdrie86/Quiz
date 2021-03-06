let startButton = document.getElementById("start-btn");
let choiceButton = document.getElementById("choice-box")
let sportButton = document.getElementById("sport");
let geoButton = document.getElementById("geography");
let generalKnowledgeButton = document.getElementById("general-knowledge");
let sportQuiz = document.getElementById("sport-quiz");
let welcome = document.getElementById("welcome");

/*---- open Home Page*/
startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    welcome.classList.add("hide");
    choiceButton.classList.remove("hide");
}
/*----Opens Sport Quiz*/
sportButton.addEventListener("click", sportGame);

function sportGame() {
    sportQuiz.classList.remove("hide");
    choiceButton.classList.add("hide"); 
}

/*---- Sport Quiz*/
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");

one.addEventListener("click", myAnswer);
two.addEventListener("click", myWrongAnswer);
three.addEventListener("click", myWrongAnswer);

function myAnswer() {
    document.getElementById("one").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("two").style.backgroundColor = "red";
    document.getElementById("three").style.backgroundColor = "red";
}
function myWrongAnswer() {
    document.getElementById("two").style.backgroundColor = "red";
    document.getElementById("three").style.backgroundColor = "red"; {
        alert("Unlucky! 2003 Was The Right Answer!");
    }
    document.getElementById("one").style.backgroundColor = "green"; {
    }
}

let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");

four.addEventListener("click", myOneWrongAnswer);
five.addEventListener("click", myOneWrongAnswer);
six.addEventListener("click", myOneAnswer);

function myOneAnswer() {
    document.getElementById("six").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("four").style.backgroundColor = "red";
    document.getElementById("five").style.backgroundColor = "red";
}
function myOneWrongAnswer() {
    document.getElementById("four").style.backgroundColor = "red";
    document.getElementById("five").style.backgroundColor = "red"; {
        alert("Unlucky! Augusta Was The Right Answer!");
    }
    document.getElementById("six").style.backgroundColor = "green"; {
    }
}

let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");

seven.addEventListener("click", myTwoWrongAnswer);
eight.addEventListener("click", myTwoAnswer);
nine.addEventListener("click", myTwoWrongAnswer); 

function myTwoAnswer() {
    document.getElementById("eight").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("seven").style.backgroundColor = "red";
    document.getElementById("nine").style.backgroundColor = "red";
}
function myTwoWrongAnswer() {
    document.getElementById("seven").style.backgroundColor = "red";
    document.getElementById("nine").style.backgroundColor = "red"; {
        alert("Unlucky! 9.58 Was The Right Answer!");
    }
    document.getElementById("eight").style.backgroundColor = "green"; {
    }
}

let ten = document.getElementById("ten");
let eleven = document.getElementById("eleven");
let twelve = document.getElementById("twelve");

ten.addEventListener("click", myThreeWrongAnswer);
eleven.addEventListener("click", myThreeAnswer);
twelve.addEventListener("click", myThreeWrongAnswer);

function myThreeAnswer() {
    document.getElementById("eleven").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("ten").style.backgroundColor = "red";
    document.getElementById("twelve").style.backgroundColor = "red";
}
function myThreeWrongAnswer() {
    document.getElementById("ten").style.backgroundColor = "red";
    document.getElementById("twelve").style.backgroundColor = "red"; {
        alert("Unlucky! South Africa Was The Right Answer!");
    }
    document.getElementById("eleven").style.backgroundColor = "green"; {
    }
}

let thirteen = document.getElementById("thirteen");
let fourteen = document.getElementById("fourteen");
let fifteen = document.getElementById("fifteen");

thirteen.addEventListener("click", myfourWrongAnswer);
fourteen.addEventListener("click", myfourWrongAnswer);
fifteen.addEventListener("click", myfourAnswer); 

function myfourAnswer() {
    document.getElementById("fifteen").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
        alert("FInished? Click on the Home Icon To Start Over Or Click On the Commet Icon To Leave Some Feedback!");
    }
    document.getElementById("thirteen").style.backgroundColor = "red";
    document.getElementById("fourteen").style.backgroundColor = "red";
}
function myfourWrongAnswer() {
    document.getElementById("thirteen").style.backgroundColor = "red";
    document.getElementById("fourteen").style.backgroundColor = "red"; {
        alert("Unlucky! Surrey Was The Right Answer!");
        alert("FInished? Click on the Home Icon To Start Over Or Click On the Commet Icon To Leave Some Feedback!");
    }
    document.getElementById("fifteen").style.backgroundColor = "green"; {
    }
}






/*----Opens General Knowledge Quiz*/
let generalQuiz = document.getElementById("general-quiz");
generalKnowledgeButton.addEventListener("click", generalKnowledgeGame);

function generalKnowledgeGame() {
    generalQuiz.classList.remove("hide");
    choiceButton.classList.add("hide");
}

/*---- General Knowledge Quiz*/


let oneOne = document.getElementById("one-one");
let twoOne = document.getElementById("two-one");
let threeOne = document.getElementById("three-one");

oneOne.addEventListener("click", myGenAnswer);
twoOne.addEventListener("click", myGenWrongAnswer);
threeOne.addEventListener("click", myGenWrongAnswer);

function myGenAnswer() {
    document.getElementById("one-one").style.backgroundColor = "green"; {
        alert("Good Job! Try The Next Question");
    }
    document.getElementById("two-one").style.backgroundColor = "red";
    document.getElementById("three-one").style.backgroundColor = "red";
}
function myGenWrongAnswer() {
    document.getElementById("two-one").style.backgroundColor = "red";
    document.getElementById("three-one").style.backgroundColor = "red"; {
        alert("Better Luck Next Time! 1997 Was The Right Answer!");
    }
    document.getElementById("one-one").style.backgroundColor = "green";
    }


let fourOne = document.getElementById("four-one");
let fiveOne = document.getElementById("five-one");
let sixOne = document.getElementById("six-one");

fourOne.addEventListener("click", myGenOneAnswer);
fiveOne.addEventListener("click", myGenOneWrongAnswer);
sixOne.addEventListener("click", myGenOneWrongAnswer); 

function myGenOneAnswer() {
    document.getElementById("four-one").style.backgroundColor = "green"; {
        alert("Good Job! Try The Next Question");
    }
    document.getElementById("five-one").style.backgroundColor = "red";
    document.getElementById("six-one").style.backgroundColor = "red";
}
function myGenOneWrongAnswer() {
    document.getElementById("five-one").style.backgroundColor = "red";
    document.getElementById("six-one").style.backgroundColor = "red"; {
        alert("Better Luck Next Time! Mercury Was The Right Answer! ");
    }
    document.getElementById("four-one").style.backgroundColor = "green"; {
    }
}


let sevenOne = document.getElementById("seven-one");
let eightOne = document.getElementById("eight-one");
let nineOne = document.getElementById("nine-one");

sevenOne.addEventListener("click", myGenTwoAnswer);
eightOne.addEventListener("click", myGenTwoWrongAnswer);
nineOne.addEventListener("click", myGenTwoWrongAnswer); 

function myGenTwoAnswer() {
    document.getElementById("seven-one").style.backgroundColor = "green"; {
        alert("Good Job! Try The Next Question");
    }
    document.getElementById("eight-one").style.backgroundColor = "red";
    document.getElementById("nine-one").style.backgroundColor = "red";
}
function myGenTwoWrongAnswer() {
    document.getElementById("eight-one").style.backgroundColor = "red";
    document.getElementById("nine-one").style.backgroundColor = "red"; {
        alert("Better Luck Next Time! Olivia Was The Right Answer!");
    }
    document.getElementById("seven-one").style.backgroundColor = "green"; {
    }
}

let tenOne = document.getElementById("ten-one");
let elevenOne = document.getElementById("eleven-one");
let twelveOne = document.getElementById("twelve-one");

tenOne.addEventListener("click", myGenThreeWrongAnswer);
elevenOne.addEventListener("click", myGenThreeWrongAnswer);
twelveOne.addEventListener("click", myGenThreeAnswer);

function myGenThreeAnswer() {
    document.getElementById("twelve-one").style.backgroundColor = "green"; {
        alert("Good Job! Try The Next Question");
    }
    document.getElementById("ten-one").style.backgroundColor = "red";
    document.getElementById("eleven-one").style.backgroundColor = "red";
}
function myGenThreeWrongAnswer() {
    document.getElementById("ten-one").style.backgroundColor = "red";
    document.getElementById("eleven-one").style.backgroundColor = "red"; {
        alert("Better Luck Next Time! Four Was The Right Answer!");
    }
    document.getElementById("twelve-one").style.backgroundColor = "green"; {
    }
}

let thirteenOne = document.getElementById("thirteen-one");
let fourteenOne = document.getElementById("fourteen-one");
let fifteenOne = document.getElementById("fifteen-one");

thirteenOne.addEventListener("click", myGenFourWrongAnswer);
fourteenOne.addEventListener("click", myGenFourWrongAnswer);
fifteenOne.addEventListener("click", myGenFourAnswer); 

function myGenFourAnswer() {
    document.getElementById("fifteen-one").style.backgroundColor = "green"; {
        alert("Good Job! Try The Next Question");
        alert("FInished? Click on the Home Icon To Start Over Or Click On the Commet Icon To Leave Some Feedback!");
    }
    document.getElementById("thirteen-one").style.backgroundColor = "red";
    document.getElementById("fourteen-one").style.backgroundColor = "red";
}
function myGenFourWrongAnswer() {
    document.getElementById("thirteen-one").style.backgroundColor = "red";
    document.getElementById("fourteen-one").style.backgroundColor = "red"; {
        alert("Better Luck Next Time! Helium Was The Right Answer!");
        alert("FInished? Click on the Home Icon To Start Over Or Click On the Commet Icon To Leave Some Feedback!");
    }
    document.getElementById("fifteen-one").style.backgroundColor = "green"; {
    }
}





/*----Opens Geography Quiz*/


let geoQuiz = document.getElementById("geo-quiz");
geoButton.addEventListener("click", geoGame);

function geoGame() {
    geoQuiz.classList.remove("hide");
    choiceButton.classList.add("hide");
    
}


/*---- Geography Quiz*/


let geoOne = document.getElementById("geo-one");
let geoTwo = document.getElementById("geo-two");
let geoThree = document.getElementById("geo-three");

geoOne.addEventListener("click", myGeoAnswer);
geoTwo.addEventListener("click", myGeoWrongAnswer);
geoThree.addEventListener("click", myGeoWrongAnswer);

function myGeoAnswer() {
    document.getElementById("geo-one").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("geo-two").style.backgroundColor = "red";
    document.getElementById("geo-three").style.backgroundColor = "red";
}
function myGeoWrongAnswer() {
    document.getElementById("geo-two").style.backgroundColor = "red";
    document.getElementById("geo-three").style.backgroundColor = "red"; {
        alert("Not This Time! Ben Nevis Was The Correct Answer");
    }
    document.getElementById("geo-one").style.backgroundColor = "green";
    }

let geoFour = document.getElementById("geo-four");
let geoFive = document.getElementById("geo-five");
let geoSix= document.getElementById("geo-six");

geoFour.addEventListener("click", myGeoOneWrongAnswer);
geoFive.addEventListener("click", myGeoOneWrongAnswer);
geoSix.addEventListener("click", myGeoOneAnswer);

function myGeoOneAnswer() {
    document.getElementById("geo-six").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("geo-four").style.backgroundColor = "red";
    document.getElementById("geo-five").style.backgroundColor = "red";
}
function myGeoOneWrongAnswer() {
    document.getElementById("geo-four").style.backgroundColor = "red";
    document.getElementById("geo-five").style.backgroundColor = "red"; {
        alert("Not This Time! Lima Was The Correct Answer");
    }
    document.getElementById("geo-six").style.backgroundColor = "green"; {
    }
}

let geoSeven = document.getElementById("geo-seven");
let geoEight = document.getElementById("geo-eight");
let geoNine = document.getElementById("geo-nine");

geoSeven.addEventListener("click", myGeoTwoAnswer);
geoEight.addEventListener("click", myGeoTwoWrongAnswer);
geoNine.addEventListener("click", myGeoTwoWrongAnswer); 

function myGeoTwoAnswer() {
    document.getElementById("geo-seven").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("geo-eight").style.backgroundColor = "red";
    document.getElementById("geo-nine").style.backgroundColor = "red";
}
function myGeoTwoWrongAnswer() {
    document.getElementById("geo-eight").style.backgroundColor = "red";
    document.getElementById("geo-nine").style.backgroundColor = "red"; {
        alert("Not This Time! Six Was The Correct Answer");
    }
    document.getElementById("geo-seven").style.backgroundColor = "green"; {
    }
}

let geoTen = document.getElementById("geo-ten");
let geoEleven = document.getElementById("geo-eleven");
let geoTwelve = document.getElementById("geo-twelve");

geoTen.addEventListener("click", myGeoThreeWrongAnswer);
geoEleven.addEventListener("click", myGeoThreeWrongAnswer);
geoTwelve.addEventListener("click", myGeoThreeAnswer);

function myGeoThreeAnswer() {
    document.getElementById("geo-twelve").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
    }
    document.getElementById("geo-ten").style.backgroundColor = "red";
    document.getElementById("geo-eleven").style.backgroundColor = "red";
}
function myGeoThreeWrongAnswer() {
    document.getElementById("geo-ten").style.backgroundColor = "red";
    document.getElementById("geo-eleven").style.backgroundColor = "red"; {
        alert("Not This Time! Krona Was The Correct Answer");
    }
    document.getElementById("geo-twelve").style.backgroundColor = "green"; {
    }
}

let geoThirteen = document.getElementById("geo-thirteen");
let geoFourteen = document.getElementById("geo-fourteen");
let geoFifteen = document.getElementById("geo-fifteen");

geoThirteen.addEventListener("click", myGeoFourWrongAnswer);
geoFourteen.addEventListener("click", myGeoFourAnswer);
geoFifteen.addEventListener("click", myGeoFourWrongAnswer); 

function myGeoFourAnswer() {
    document.getElementById("geo-fourteen").style.backgroundColor = "green"; {
        alert("Well Done! Go To The Next Question!");
        alert("FInished? Click on the Home Icon To Start Over Or Click On the Commet Icon To Leave Some Feedback!");
    }
    document.getElementById("geo-thirteen").style.backgroundColor = "red";
    document.getElementById("geo-fifteen").style.backgroundColor = "red";
}
function myGeoFourWrongAnswer() {
    document.getElementById("geo-thirteen").style.backgroundColor = "red";
    document.getElementById("geo-fifteen").style.backgroundColor = "red"; {
        alert("Not This Time! Glasgow Was The Correct Answer");
        alert("FInished? Click on the Home Icon To Start Over Or Click On the Commet Icon To Leave Some Feedback!");
    }
    document.getElementById("geo-fourteen").style.backgroundColor = "green"; {
    }
}






