'use strict';

//? Select all values
const form = document.querySelector('.form-validate');
const inputCardName = document.querySelector('.card-holder-name');
const inputCardNumber = document.querySelector('.card-holder-number');
const inputCardMonth = document.getElementById('month__date');
const inputCardYear = document.getElementById('year__date');
const inputCardCVC = document.getElementById('cvv');

const showCardHolderName = document.querySelector('.card-detail__name');
const showCardNumber = document.querySelector('.card-detail__number');
const showCardDateMonth = document.querySelector('.card-detail__date--month');
const showCardDateYear = document.querySelector('.card-detail__date--year');
const showCardCVC = document.querySelector('.back-card__cvc--number');

const labelCardName = document.querySelector('.error__card--name');
const labelCardNumber = document.querySelector('.error__card--number');
const labelCardDate = document.querySelector('.error__card--date');
const labelCardCVC = document.querySelector('.error__card--cvc');

const labelError = document.querySelectorAll('.error');

//! All inputes in array
const inputs = [
  inputCardName,
  inputCardNumber,
  inputCardMonth,
  inputCardYear,
  inputCardCVC,
];

const showRealTime = function (input, show) {
  input.addEventListener('input', () => (show.textContent = input.value));
};

// function numberWithSpaces(x) {
//   return x.toString().replace(/\B(?=(\d{4})+(?!\d))/g, ' ');
// }

//! Listen for all inputs at the beggining
const init = function () {
  showRealTime(inputCardName, showCardHolderName);
  showRealTime(inputCardNumber, showCardNumber);
  showRealTime(inputCardMonth, showCardDateMonth);
  showRealTime(inputCardYear, showCardDateYear);
  showRealTime(inputCardCVC, showCardCVC);
};
init();

//! Listen for form Submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(numberWithSpaces(inputCardNumber.value));

  //? 1) Check if every inputs are filled
  const notEmpty = inputs.every((inp) => inp.value.length !== 0);

  //? 2) filter inputs are empty
  const checkInput = inputs.filter((el) => el.value.length === 0);

  //? 3) Remove wrong class at the first
  inputs.forEach((el) => el.classList.remove('wrong'));

  //? 4) Check if every inputs are filled
  if (!notEmpty) {
    labelError.forEach((el) => (el.textContent = ''));
    checkInput.forEach((el) => {
      el.nextElementSibling.textContent = 'Can not be blank!';
      el.classList.add('wrong');
    });
    return;
  }
});
