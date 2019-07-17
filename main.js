var question1 = 'Where is the Eiffel Tower located?';
var question2 = 'How many fingers does one hand have?';
var question3 = 'What is the meaning of life?';
var questions = [question1, question2, question3];
var answers = [
  { a: 'italy', b: 'france', c: 'germany', d: 'us' },
  { a: 'france' }
];
var interval;

interval = setInterval(creator, 5000);
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
  document.getElementById('questionContainer').innerHTML = '';
}
function setQuestion() {
  document.getElementById('questionContainer').innerHTML = questions[i];
  console.log(this.question);
}
function questionAnswers() {
  var answersObj = answers[i];
  for (var j in answersObj) {
    //build html element per answer
    // append the html with new element


}
  document.getElementById('answersContainer').innerHTML = ;
  
  // if (this.question === question1) {
  //   var arrayofAnswers1 = ['France'];
  // }
}
//var keys = Object.keys([objectHere])
//sample val: ["a", "b", "c", "d"] 
function creator() {
  removeQuestion();
  setQuestion();
  questionAnswers();
}
creator();
