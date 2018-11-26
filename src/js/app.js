var square = document.querySelector('.square');
var squareText = document.querySelector('.square__text');
var input = document.querySelector('.nav__input');
var pallete = document.querySelector('.pallete');
var collors = document.querySelectorAll('.pallete__color');
var degrees = 0;
var value;
var suqareRotation = 0;

window.onload = init;

function init() {
  for (var i = 0; i < collors.length; i++) {
    collors[i].style.backgroundColor = collors[i].dataset.color;
  }
  updateValue();

  // set event handlers
  input.addEventListener('keyup', updateValue);
  document.addEventListener('keyup', function (e) {
    updatePosition(e.keyCode);
  });

  document.querySelector('.nav').addEventListener('click', function (e) {
    if (e.target.matches('.btn--rotate')) {
      updatePosition(e.target.dataset.action);
    }
  });

  pallete.addEventListener('click', function (e) {
    if (e.target.dataset.color) {
      setColor(e.target);
    }
  });
}


function setColor(palleteEl) {
  var target = palleteEl;

  for (var i = 0; i < collors.length; i++) {
    collors[i].classList.remove('active');
  }
  target.classList.add('active');
  square.style.backgroundColor = target.dataset.color;

}


var updateValue = function () {
  if (input.value) {
    value = parseInt(input.value);
  } else {
    value = 0;
  }
}


// update the position of the square
function updatePosition(action) {
  if (action === 'increase' || action === 39) {
    degrees += value;
  }

  if (action === 'decrease' || action === 37) {
    degrees -= value;
  }

  suqareRotation = 'rotate(' + degrees + 'deg)';
  square.style.transform = suqareRotation;

  updateText(degrees); // update text inside square
}

function updateText(deg) {
  squareText.textContent = deg + ' deg';
}


