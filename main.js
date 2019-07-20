var question1 = 'Where is the Eiffel Tower located?';
var question2 = 'How many fingers does one hand have?';
var question3 =
  'Before Mount Everest was discovered, what was the highest mountain in the world?';
var question4 = '';
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
var correctAnswerLocator;

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

  for (var j in answersObj) {
    var answrCont = document.createElement('div');
    answrCont.setAttribute('class', 'miniAnswerContainer');
    var newBtn = document.createElement('button');
    var value = answersObj[j];
    arrayShuffled.push(value);
    newBtn.classList.add('cta', j);
    newBtn.innerHTML = j;
    answrCont.appendChild(newBtn);
    ac.appendChild(answrCont);
    console.log('j:', j);
  }

  shuffle(arrayShuffled);
  console.log('arrayShuffled:', arrayShuffled);
  correctAnswerLocator = answers[i].b;
  var optionsArray = ['a', 'b', 'c', 'd'];
  for (var counter1 = 0; counter1 < arrayShuffled.length; counter1++) {
    var ac = document.getElementById('answersContainer');
    var newTxt = document.createElement('div');
    newTxt.classList.add('buttonText');
    newTxt.innerHTML = arrayShuffled[counter1];
    ac.children[counter1].append(newTxt);

    if (arrayShuffled[counter1] === correctAnswerLocator) {
      // google: assertions, separation of concepts
      document
        .getElementsByClassName(optionsArray[counter1])[0]
        .addEventListener('click', rightAnswer);
    } else {
      document
        .getElementsByClassName(optionsArray[counter1])[0]
        .addEventListener('click', wrongAnswer);
    }
  }
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

function rightWrongMiddle() {
  var middleDiv = document.createElement('div');
  middleDiv.classList.add('middleDiv');
  var referenceNode = document.getElementsByClassName('wrongExplanation')[0];
  var containerNode = document.getElementsByClassName(
    'wrongAnswerResponded'
  )[0];
  console.log('containerNode:', containerNode);
  console.log('referenceNode:', referenceNode);
  containerNode.insertBefore(middleDiv, referenceNode);
  raw();
  // var wrongBannerText = document.getElementsByClassName('wrongBanner')[0];
  // console.log('wrongBannerText:', wrongBannerText);
  //   if (wrongBannerText.innerText === 'Right Answer!') {
  //     console.log('ayyee buoi');
  //     raw();
  //   } else {
  //     console.log('no buoi');
  //     war();
  //   }
}
function raw() {
  var x = 0;

  var middleDiv = document.getElementsByClassName('middleDiv')[0];

  var wrongBannerText = document.getElementsByClassName('wrongBanner')[0];
  while (x != rightScore + wrongScore) {
    if (wrongBannerText.innerText === 'Right Answer!') {
      var boxCreator = document.createElement('div');
      boxCreator.classList.add('miniBoxCorrect');
      middleDiv.append(boxCreator);
      x++;
    } else {
      var boxCreator = document.createElement('div');
      boxCreator.classList.add('miniBoxWrong');
      middleDiv.append(boxCreator);
      x++;
    }
  }
}

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
  wrongScore++;
  createNextButton();
  div.appendChild(nextButton);
  rightWrongMiddle();
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
  rightScore++;
  createNextButton();
  div.appendChild(nextButton);
  rightWrongMiddle();
}
