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

interval = setInterval(creator, 50000);
var i = 0;

function randomizer() {
  //var randomQuestionPicker = Math.floor(Math.random() * questions.length);
  console.log(randomQuestionPicker);
  question = questions[randomQuestionPicker];
  questions.splice(randomQuestionPicker, 1);
  console.log(this.question);

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
    console.log("value:", value);
    newBtn.setAttribute("class", "cta");
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
function removeAnswers() {
  while (ac.firstChild) {
    ac.removeChild(ac.firstChild);
  }
}
//var keys = Object.keys([objectHere])
//sample val: ["a", "b", "c", "d"]
function creator() {
  removeQuestion();
  setQuestion();
  removeAnswers();
  addAnswers();

  i++;
}
creator();
