var arrowLeft = document.querySelector('.control-slider--left');
var arrowRight = document.querySelector('.control-slider--right');
var sliderBack = document.querySelector('.slider--back');
var sliderFront = document.querySelector('.slider--front');
var wrapperBack = document.querySelector('.img-wrapper--back');
var wrapperFront = document.querySelector('.img-wrapper--front');
var backCounter = 2;
var frontCounter = 1;

var increaseCounter = function () {
  backCounter ++;
  frontCounter ++;
  backCounter = (backCounter > 3) ? 1 : backCounter;
  frontCounter = (frontCounter > 3) ? 1 : frontCounter;
};

var decreaseCounter = function () {
  backCounter --;
  frontCounter --;
  backCounter = (backCounter < 1) ? 3 : backCounter;
  frontCounter = (frontCounter < 1) ? 3 : frontCounter;
};

var animate = function (element, coefficient1, coefficient2) {
  var start = performance.now();

  requestAnimationFrame (function animate (time) {
    var timeFraction = (time - start) / 500;
    if (timeFraction > 1) {
      timeFraction = 1;
      sliderFront.src = 'img/slide-' + frontCounter + '.jpg';
      sliderBack.src = 'img/slide-' + backCounter + '.jpg';
    }

    var progress = Math.pow(timeFraction, 3);
    element.style.left = coefficient1 + progress * coefficient2 + '%';

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

arrowLeft.addEventListener('click', function () {
  increaseCounter();
  animate(sliderFront);
});

arrowRight.addEventListener('click', function () {
  decreaseCounter();
  animate(sliderFront, 0, 100);
  animate(sliderFront, -100, 100);
});



