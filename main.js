var question1 = 'Where is the Eiffel Tower located?';
var question2 = 'How many fingers does one hand have?';
var question3 = 'What is the meaning of life?';
var questions = [question1, question2, question3];
var rightScore = 0;
var wrongScore = 0;
var answerExplanation = [
  'The EiffelTower is located in Paris, France. <br> It is 324 metres tall (including antennas) and weighs 10,100 tonnes',
  'The finger count on a typical hand for a human specimen is set to the "digit" 5',
  "It is Mount Everest (even though it hadn't been discovered, it still existed!) Mt. Everest is is Earth's highest mountain above sea level at 29,029′"
];
var p = 0;
var pictures = [
  'https://www.architectsjournal.co.uk/pictures/1240x826/8/0/4/3052804_Eiffel-Tower.jpg',
  'https://media.istockphoto.com/photos/man-hand-picture-id490508272?k=6&m=490508272&s=612x612&w=0&h=Q4BhUUdRR8E4jD65vshcgzpha1eKwSa_G5Uu2lpV-pk=',
  'https://coresites-cdn.factorymedia.com/mpora_new/wp-content/uploads/2019/04/Mount-Everest-Facts.jpg',
  ''
];

//
var answers = [
  { a: 'Italy', b: 'France', c: 'Germany', d: 'United States' },
  { a: 'eight', b: 'five', c: 'one', d: 'two' },
  {
    a: 'Mount Kilimanjaro',
    b: 'Mount Everest',
    c: 'the Rockies',
    d: 'The Alps'
  }
];
// can set all right naswers to a : ... and then while appending set them to random
var interval;
var qc = document.getElementById('questionContainer');
var ac = document.getElementById('answersContainer');
var timer = 10;
var i = 0;
var bClick;
var buttonStart = document.getElementById('start');
buttonStart.addEventListener('click', start);
var nextButton;

function emptyDiv(container) {
  while (container.children.length > 0) {
    container.removeChild(container.firstChild);
  }
}

function randomizer() {
  //var randomQuestionPicker = Math.floor(Math.random() * questions.length);
  console.log(randomQuestionPicker);
  question = questions[randomQuestionPicker];
  questions.splice(randomQuestionPicker, 1);

  return question;
}

function removeQuestion() {
  var qc = document.getElementById('questionContainer');
  qc.innerHTML = '';
}

function setQuestion() {
  var qc = document.getElementById('questionContainer');
  qc.innerHTML = questions[i];
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function addAnswers() {
  var ac = document.getElementById('answersContainer');

  var answersObj = answers[i];
  var arrayShuffled = [];
  // var miniCounter = 0;
  // var letters = ['a', 'b', 'c', 'd'];
  for (var j in answersObj) {
    var answrCont = document.createElement('div');
    answrCont.setAttribute('class', 'miniAnswerContainer');
    var newBtn = document.createElement('button');
    var newTxt = document.createElement('div');
    var value = answersObj[j];
    arrayShuffled.push(value);
    // if (j === 'b') {

    // }
    newBtn.classList.add('cta', j);
    newTxt.setAttribute('class', 'buttonText');
    newTxt.innerHTML = value; // set this to a different key of the same array randomly and uniquely
    newBtn.innerHTML = j;
    // miniCounter++;
    answrCont.appendChild(newBtn);
    answrCont.appendChild(newTxt);
    ac.appendChild(answrCont);
    console.log('j:', j);
    if (j === 'b') {
      document
        .getElementsByClassName(j)[0]
        .addEventListener('click', rightAnswer);
    } else {
      document
        .getElementsByClassName(j)[0]
        .addEventListener('click', wrongAnswer);
    }
  }
  shuffle(arrayShuffled);
  console.log('arrayShuffled:', arrayShuffled);
  // for (var i = 0; i < arrayShuffled.length; i++) {}

  // for (var i = 0; i < arrayShuffled.length; i++) {}
}

function start() {
  timer = 10;
  interval = setInterval(startGame, 1000);
  creator();

  if (document.getElementById('start')) {
    buttonStart.parentNode.removeChild(buttonStart);
  }
}

function nextButtonF() {
  var mainContainer = document.getElementById('mainContainer');
  emptyDiv(mainContainer);
  var tc = document.createElement('div');
  var qc = document.createElement('div');
  var ac = document.createElement('div');
  qc.id = 'questionContainer';
  ac.id = 'answersContainer';
  tc.id = 'timeContainer';
  mainContainer.appendChild(tc);
  mainContainer.appendChild(qc);
  mainContainer.appendChild(ac);

  start();
}

function createNextButton() {
  nextButton = document.createElement('button');
  nextButton.classList.add('nextButton');
  nextButton.innerHTML = 'NEXT';
  nextButton.addEventListener('click', nextButtonF);
}

function removeAnswers() {
  var ac = document.getElementById('answersContainer');
  while (ac.firstChild) {
    ac.removeChild(ac.firstChild);
  }
}

function startGame() {
  timer--;
  document.getElementById('timeContainer').innerHTML = timer + ' Seconds Left!';
  if (timer === 0) {
    wrongAnswer();
  }
}

//var keys = Object.keys([objectHere])
//sample val: ["a", "b", "c", "d"]
function creator() {
  // if () {
  //   // document.createElement('div')
  //   // document.getElementById('questionContainer');
  //   console.log('oiiiiiiii boiiii');
  // }
  removeQuestion();
  setQuestion();
  removeAnswers();
  addAnswers();

  i++;
}

//everytime pending response for question add a
// key image as the outer background

// everytime answer is called and you are on right wrong screen
// add the inner container bg picture as a key picture relevant to the answer

//array (machine gun magazine)
//loop splicing at index 0 until the length of the array is equal to zero
//is a machine gun loop

function wrongAnswer() {
  clearInterval(interval);
  var mainContainer = document.getElementById('mainContainer');
  var div = document.createElement('div');
  div.classList.add('wrongAnswerResponded');
  var wrongBannerText = document.createElement('div');
  var wrongBanner = document.createElement('div');
  wrongBannerText.classList.add('wrongBannerText');
  wrongBanner.classList.add('wrongBanner');
  var wrongExplanantion = document.createElement('div');
  var wrongExplanantionText = document.createElement('div');
  wrongExplanantion.classList.add('wrongExplanation');
  wrongExplanantionText.classList.add('wrongExplanationText');
  wrongBannerText.innerHTML = 'WrongAnswer';
  wrongExplanantionText.innerHTML = answerExplanation[p];

  emptyDiv(mainContainer);
  mainContainer.appendChild(div);
  div.appendChild(wrongBanner);
  wrongBanner.appendChild(wrongBannerText);
  div.appendChild(wrongExplanantion);
  wrongExplanantion.appendChild(wrongExplanantionText);
  div.style = `background: url(${
    pictures[p]
  }) no-repeat center center fixed; background-size: cover;`;
  p++;

  createNextButton();
  div.appendChild(nextButton);
}
function rightAnswer() {
  clearInterval(interval);
  var mainContainer = document.getElementById('mainContainer');
  var div = document.createElement('div');
  div.classList.add('wrongAnswerResponded');
  var wrongBannerText = document.createElement('div');
  var wrongBanner = document.createElement('div');
  wrongBannerText.classList.add('wrongBannerText');
  wrongBanner.classList.add('wrongBanner');
  var wrongExplanantion = document.createElement('div');
  var wrongExplanantionText = document.createElement('div');
  wrongExplanantion.classList.add('wrongExplanation');
  wrongExplanantionText.classList.add('wrongExplanationText');
  wrongBannerText.innerHTML = 'Right Answer!';
  wrongExplanantionText.innerHTML = answerExplanation[p];

  emptyDiv(mainContainer);
  mainContainer.appendChild(div);
  div.appendChild(wrongBanner);
  wrongBanner.appendChild(wrongBannerText);
  div.appendChild(wrongExplanantion);
  wrongExplanantion.appendChild(wrongExplanantionText);
  div.style = `background: url(${
    pictures[p]
  }) no-repeat center center fixed; background-size: cover;`;
  p++;

  createNextButton();
  div.appendChild(nextButton);
}
