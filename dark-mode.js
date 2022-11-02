const darkMode = document.getElementById('btn-dark-mode');
const lightMode = document.getElementById('btn-light-mode');
const bodyDark = document.querySelector('body');
const containerDark = document.querySelector('.calc-container');
const labelDark = document.querySelectorAll('label');
const h2Dark = document.querySelectorAll('h2');
const tipAmountDark = document.querySelector('#tip-amount');
const tipTotalDark = document.querySelector('#tip-total');
const inputsDark = document.querySelectorAll('input');
const btn = document.querySelectorAll('.calc-btn');
const resultDark = document.querySelector('.calc-container-result');
const btnResetDark = document.querySelector('#calc-btn-reset');


darkMode.addEventListener('click', () => {
    darkMode.style.display = 'none';
    lightMode.style.display = 'flex';
    containerDark.classList.add('calc-container-dark');
    bodyDark.classList.add('body-dark');
    resultDark.classList.add('calc-container-result-dark');
    tipAmountDark.classList.add('tip-amount-dark');
    tipTotalDark.classList.add('tip-total-dark');
    btnResetDark.classList.add('calc-btn-reset-dark');

    labelDark.forEach(element => {
        element.classList.add("calc-title-dark");
    });

    h2Dark.forEach(element => {
        element.classList.add("calc-h2-dark");
    });

    inputsDark.forEach(element => {
        element.classList.add("calc-inputs-dark");
    });

    btn.forEach(element => {
        element.classList.add("calc-btn-dark");
    });

});

lightMode.addEventListener('click', () => {
    lightMode.style.display = 'none';
    darkMode.style.display = 'flex';
    containerDark.classList.remove('calc-container-dark');
    bodyDark.classList.remove('body-dark');
    resultDark.classList.remove('calc-container-result-dark');
    tipAmountDark.classList.remove('tip-amount-dark');
    tipTotalDark.classList.remove('tip-total-dark');
    btnResetDark.classList.remove('calc-btn-reset-dark');

    labelDark.forEach(element => {
        element.classList.remove("calc-title-dark");
    });

    h2Dark.forEach(element => {
        element.classList.remove("calc-h2-dark");
    });

    inputsDark.forEach(element => {
        element.classList.remove("calc-inputs-dark");
    });

    btn.forEach(element => {
        element.classList.remove("calc-btn-dark");
    });

});
