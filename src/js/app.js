var square = document.querySelector('.square');
var squareText = document.querySelector('.square__text');
var degrees = 0;
var suqareRotation = 0;

// attach event listener 
document.querySelector('.nav').addEventListener('click', function (e) {

  if (e.target.matches('.btn--rotate')) {

    var squareAction = e.target.dataset.action;
    console.log(squareAction);

    updatePosition(squareAction);
  }

});


// update the position of the square
function updatePosition(action) {
  if (action === 'increase') {
    degrees += 5;
  }

  if (action === 'decrease') {
    degrees -= 5;
  }

  suqareRotation = 'rotate(' + degrees + 'deg)';
  square.style.transform = suqareRotation;

  updateText(degrees); // update text inside square
}

function updateText(deg) {
  squareText.textContent = deg + ' deg';
}


