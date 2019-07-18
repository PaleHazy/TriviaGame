var question1 = "Where is the Eiffel Tower located?";
var question2 = "How many fingers does one hand have?";
var question3 = "What is the meaning of life?";
var questions = [question1, question2, question3];
var answers = [
  { a: "Italy", b: "France", c: "Germany", d: "United States" },
  { a: "five", b: "two", c: "one", d: "none" }
];
// can set all right naswers to a : ... and then while appending set them to random
var interval;
var qc = document.getElementById("questionContainer");
var ac = document.getElementById("answersContainer");
var timer = 10;
var i = 0;
var bClick;

function randomizer() {
  //var randomQuestionPicker = Math.floor(Math.random() * questions.length);
  console.log(randomQuestionPicker);
  question = questions[randomQuestionPicker];
  questions.splice(randomQuestionPicker, 1);

  return question;
}
function removeQuestion() {
  qc.innerHTML = "";
}
function setQuestion() {
  qc.innerHTML = questions[i];
  console.log(this.question);
}
function addAnswers() {
  var answersObj = answers[i];
  for (var j in answersObj) {
    var answrCont = document.createElement("div");
    answrCont.setAttribute("class", "miniAnswerContainer");
    var newBtn = document.createElement("button");
    var newTxt = document.createElement("div");
    var value = answersObj[j];
    newBtn.classList.add("cta", j);

    newTxt.setAttribute("class", "buttonText");
    newTxt.innerHTML = value;
    newBtn.innerHTML = j;
    answrCont.appendChild(newBtn);
    answrCont.appendChild(newTxt);
    ac.appendChild(answrCont);
    console.log("j:", j);

    //build html element per answer
    // append the html with new element
  }
}
var buttonStart = document.getElementById("start");
buttonStart.addEventListener("click", start);
function start() {
  interval = setInterval(startGame, 1000);
  creator();
  buttonStart.parentNode.removeChild(buttonStart);
}

function rightAnswer() {
  clearInterval(interval);
  var mainContainer = document.getElementById("mainContainer");
  var divWrong = document.createElement("div");
  divWrong.innerHTML = "WrongAnswer";
  while (mainContainer.children.length > 0) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  mainContainer.appendChild(divWrong);
}
function removeAnswers() {
  while (ac.firstChild) {
    ac.removeChild(ac.firstChild);
  }
}
function startGame() {
  timer--;
  document.getElementById("timeContainer").innerHTML = timer + " Seconds Left!";
  if (timer === 0) {
    timer = 10;
    creator();
  }
}
function clickCreator() {
  for (z = 0; z < selector.length; z++) {
    selector[z].firstChild.addEventListener("click", rightAnswer);
  }
}

//var keys = Object.keys([objectHere])
//sample val: ["a", "b", "c", "d"]
var selector = document.getElementById("answersContainer").children;
function creator() {
  removeQuestion();
  setQuestion();
  removeAnswers();
  addAnswers();
  clickCreator();
  i++;
}

//everytime pending response for question add a
// key image as the outer background

// everytime answer is called and you are on right wrong screen
// add the inner container bg picture as a key picture relevant to the answer

//array (machine gun magazine)
//loop splicing at index 0 until the length of the array is equal to zero
//is a machine gun loop
