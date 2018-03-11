var square = document.querySelector('.square');
var pix = 0;
var stopid;
var start;

function step(){
  pix = pix +1;
  square.style.left = pix + 'px';
  window.requestAnimationFrame(step);
};
step();
