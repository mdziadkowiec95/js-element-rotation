var square = document.querySelector('.square');
var squareText = document.querySelector('.square__text');
var input = document.querySelector('.nav__input');
var degrees = 0;
var value;
var suqareRotation = 0;

window.onload = init;

function init() {
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
}

var updateValue = function () {
  value = parseInt(input.value);
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


