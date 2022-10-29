'use strict';
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

const inputs = [
  inputCardName,
  inputCardNumber,
  inputCardMonth,
  inputCardYear,
  inputCardCVC,
];

const showRealTime = function (input, show) {
  input.addEventListener('input', function () {
    show.textContent = input.value;
  });
};

const init = function () {
  showRealTime(inputCardName, showCardHolderName);
  showRealTime(inputCardNumber, showCardNumber);
  showRealTime(inputCardMonth, showCardDateMonth);
  showRealTime(inputCardYear, showCardDateYear);
  showRealTime(inputCardCVC, showCardCVC);
};
init();

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const res = inputs.every((inp, i) => {
    return inp.value.length !== 0;
    if (inp.value.length !== 0) return inp;
  });

  const checkInput = inputs.filter((el) => el.value.length === 0);
  if (!res) {
    labelError.forEach((el) => (el.textContent = ''));
    checkInput.map((el) => {
      el.nextElementSibling.textContent = 'Can not be blank!';
    });
  }
});
