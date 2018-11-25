var square = document.querySelector('.square');
var degrees = 0;
var suqareRotation = 0;


document.addEventListener('click', function (e) {

  if (e.target.matches('.btn--rotate')) {

    var squareAction = e.target.dataset.action;
    console.log(squareAction);

    updatePosition(squareAction);
  }

});

function updatePosition(action) {
  if (action === 'increase') {
    degrees += 5;
  }

  if (action === 'decrease') {
    degrees -= 5;
  }

  suqareRotation = 'rotate(' + degrees + 'deg)';
  square.style.transform = suqareRotation;
}


