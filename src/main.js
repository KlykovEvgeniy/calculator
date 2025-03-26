const buttonRef = document.querySelector('.js-hamburger');
const skillsButtonRef = document.querySelector('.js-skills');
const skillsDropdownRef = document.querySelector('.dropdowm-skills');
const calcRef = document.querySelector('.calculator__btn');
const inputRef = document.querySelector('.js-calc');
const eqRef = document.querySelector('.js-eq');
const clearRef = document.querySelector('.js-clear');

buttonRef.addEventListener('click', handleHamburgerClick);
skillsButtonRef.addEventListener('click', handleSkillsVisible);
calcRef.addEventListener('click', handleCalcClick);
eqRef.addEventListener('click', handleEqClick);
clearRef.addEventListener('click', handleClearClick)


function handleHamburgerClick() {
  document.body.classList.toggle('visible');
}

function handleSkillsVisible() {
  document.body.classList.toggle('drop-visible');
}

function handleCalcClick(event) {
  const node = event.target.nodeName !== 'BUTTON';
  const cur = event.target.classList.contains('js-eq');
  const clearButton = event.target.classList.contains('js-clear')

  if (node || cur || clearButton) {
    return;
  }

  inputRef.value += event.target.textContent
}

function handleEqClick (){
  try {
    const val = eval(inputRef.value)
    inputRef.value = Number(val).toFixed(3)
  } catch {
    inputRef.value = 'Error'
    setTimeout(() => {
      inputRef.value = ''
    }, 500)
  }
}

function handleClearClick(){
  inputRef.value = ''
}
