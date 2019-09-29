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

var animate = function (slider, coefficient1, coefficient2) {
  var start = performance.now();

  requestAnimationFrame (function animate (time) {
    var timeFraction = (time - start) / 500;
    var progress = Math.pow(timeFraction, 2);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else if (timeFraction > 1) {
      timeFraction = 1;
    }

    slider.style.left = (progress - coefficient1) * coefficient2 + '%';
  });
};

var changePhoto = function (coefficient) {
  animate(sliderFront, 0, coefficient);
  setTimeout(function () {
    sliderFront.src = 'img/slide-' + frontCounter + '.jpg';
    animate(sliderBack, 0, coefficient);
    animate(sliderFront, 1, coefficient);

    setTimeout(function () {
      sliderFront.style.left = 0 + '%';
      sliderBack.style.left = -coefficient + '%';
      sliderBack.src = 'img/slide-' + backCounter + '.jpg';
      animate(sliderBack, 1, coefficient);
    }, 600);
  }, 600);

  setTimeout(function () {
    sliderBack.style.left = 0 + '%';
  },1750);

}

arrowLeft.addEventListener('click', function () {
  increaseCounter();
  changePhoto(-100);
});

arrowRight.addEventListener('click', function () {
  decreaseCounter();
  changePhoto(100);
});
