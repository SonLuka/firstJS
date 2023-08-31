document.querySelector('#container2').style.display = 'none';

const firstButton = document.querySelector('#buttonRating button');
const secondButton = document.querySelector('#buttonRating button:nth-of-type(2)');
const thirdButton = document.querySelector('#buttonRating button:nth-of-type(3)');
const fourthButton = document.querySelector('#buttonRating button:nth-of-type(4)');
const fifthButton = document.querySelector('#buttonRating button:nth-of-type(5)');
const submit = document.querySelector('#submit');

buttons = [firstButton, secondButton, thirdButton, fourthButton, fifthButton];

for (let button of buttons) {
  button.addEventListener('click', function (e) {
    button.classList.add('clickedButton');
    reset(e);
  }
  )
}
function reset(e) {
  for (let i of buttons) {
    if (i !== e.target) { i.classList.remove('clickedButton') }
  }
}

const yourRatedNum = document.querySelector('#userRating');

submit.addEventListener('click', function (e) {
  if (buttons.some(each => each.classList.contains('clickedButton'))) {
    document.querySelector('#container').style.display = 'none';
    document.querySelector('#container2').style.display = '';
    for (let j of buttons) {
      if (j.classList.contains('clickedButton')) { yourRatedNum.textContent = parseInt(j.textContent) }
    }
  }
})

