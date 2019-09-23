var arrowLeft = document.querySelector('.control-slider--left');
var arrowRight = document.querySelector('.control-slider--right');
var sliderBack = document.querySelector('.slider--back');
var sliderFront = document.querySelector('.slider--front');
var backCounter = 2;
var frontCounter = 1;

var increaseCounter = function () {
  backCounter ++;
  frontCounter ++;
  backCounter = (backCounter > 3) ? 1 : backCounter;
  frontCounter = (frontCounter > 3) ? 1 : frontCounter;
};

var decreaseCounter = function (counter) {
  backCounter --;
  frontCounter --;
  backCounter = (backCounter < 1) ? 3 : backCounter;
  frontCounter = (frontCounter < 1) ? 3 : frontCounter;
};

arrowLeft.addEventListener('click', function () {
  increaseCounter();
  sliderFront.src = 'img/slide-' + frontCounter + '.jpg';
  sliderBack.src = 'img/slide-' + backCounter + '.jpg';
});

arrowRight.addEventListener('click', function () {
  decreaseCounter();
  sliderFront.src = 'img/slide-' + frontCounter + '.jpg';
  sliderBack.src = 'img/slide-' + backCounter + '.jpg';
});
