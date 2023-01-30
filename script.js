const min = 4, max = 10,
    randomNum = Math.floor(Math.random()*(max-min+1) + min),
    inputNumber = document.querySelector('#number'),
    button = document.querySelector('#btn');
let lives = 3,
message = document.querySelector('#text');
document.querySelector('#min').textContent = min;
document.querySelector('#max').textContent = max;

const showMessage = (text,style) => {

  message.textContent = text;
  message.classList.add(style);

}


button.addEventListener('click', ()=>{
  if (inputNumber.value == '') {
    showMessage('You typed empty value', 'danger');
  } else if (inputNumber.value < min || inputNumber.value > max) {
    showMessage(`Input a number between ${min} and ${max}`, 'danger');
  } else if (inputNumber.value == randomNum) {
    inputNumber.disabled = true;
    btn.textContent = 'PLAY AGAIN';
    showMessage(`You win! the winning number is ${randomNum}`, 'success');
  } else if (lives != 0 && inputNumber.value !== randomNum) {
    lives--;
    showMessage(`${inputNumber.value} is not correct! You have ${lives} guesses`, 'danger');
  }

})
// `Input a number between ${min} and ${max}`
