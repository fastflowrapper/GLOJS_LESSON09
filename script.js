'use strict';

let calculateButton = document.getElementById('start'),

button1 = document.querySelectorAll('button')[0],
button2 = document.querySelectorAll('button')[1],

depositCheckbox = document.querySelector('#deposit-check'),

maybeIncomeInput1 = document.querySelectorAll('.additional_income-item')[0],

maybeIncomeInput2 = document.querySelectorAll('.additional_income-item')[1],

allOfValues = document.querySelectorAll('[class*="-value"]'),

salaryAmount = document.querySelector('.salary-amount'),
addIncomeName = document.querySelector('[class = "income-title"]'),
addIncomeAmount = document.querySelector('.income-amount'),
expensesName = document.querySelector('[class = "expenses-title"]'),
expensesAmount = document.querySelector('.expenses-amount'),
addExpences = document.querySelector('.additional_expenses-item'),
targetAmount = document.querySelector('.target-amount'),
period = document.querySelector('[type = "range"]');

console.log(salaryAmount);
console.log(addIncomeName);
console.log(addIncomeAmount);
console.log(expensesName);
console.log(expensesAmount);
console.log(addExpences);
console.log(targetAmount);
console.log(period);