var bottomTwo = document.querySelector('.bottom-two');
var bottomThree = document.querySelector('.bottom-three');
var bottomFour = document.querySelector('.bottom-four');

  var i = 70;

function scrolerTwo() {
  var bottomOne = document.querySelector('.bottom-slider');

  var x = 0.2;
  var swch;
  var inter = setInterval(function() {
    if (i < 30) {
      bottomTwo.style.zIndex = 1;
      bottomThree.style.zIndex = 0;
      bottomFour.style.zIndex = 0;
      x = -x;
      swch = 1;
    }
    i -= x;
    if (swch == 1 && i >= 70) {
      clearInterval(inter);
      swch = 0;
    }
    bottomOne.style.top = i + 'vh';
  }, 1);
};

function scrolerThree() {
  var bottomOne = document.querySelector('.bottom-slider');

  var x = 0.2;
  var swch;
  var inter = setInterval(function() {
    if (i < 30) {
      bottomTwo.style.zIndex = 0;
      bottomThree.style.zIndex = 1;
      bottomFour.style.zIndex = 0;
      x = -x;
      swch = 1;
    }
    i -= x;
    if (swch == 1 && i >= 70) {
      clearInterval(inter);
      swch = 0;
    }
    bottomOne.style.top = i + 'vh';
  }, 1);
};

function scrolerFour() {
  var bottomOne = document.querySelector('.bottom-slider');

  var x = 0.2;
  var swch;
  var inter = setInterval(function() {
    if (i < 30) {
      bottomTwo.style.zIndex = 0;
      bottomThree.style.zIndex = 0;
      bottomFour.style.zIndex = 1;
      x = -x;
      swch = 1;
    }
    i -= x;
    if (swch == 1 && i >= 70) {
      clearInterval(inter);
      swch = 0;
    }
    bottomOne.style.top = i + 'vh';
  }, 1);
};
