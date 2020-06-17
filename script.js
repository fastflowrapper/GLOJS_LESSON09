'use strict';

let start = document.getElementById('start'),

button1 = document.querySelectorAll('button')[0],
button2 = document.querySelectorAll('button')[1],

depositCheck = document.querySelector('#deposit-check'),

addIncomeItem1 = document.querySelectorAll('.additional_income-item')[0],
addIncomeItem2 = document.querySelectorAll('.additional_income-item')[1],

budgetMonthValue = document.querySelector('.budget_month-value'),
budgetDayValue = document.querySelector('.budget_day-value'),
expensesMonthValue = document.querySelector('.expenses_month-value'),
additionalIncomeValue = document.querySelector('.additional_income-value'),
additionalExpensesValue = document.querySelector('.additional_expenses-value'),
incomePeriodValue = document.querySelector('.income_period-value'),
targetMonthValue = document.querySelector('.target_month-value'),

salaryAmount = document.querySelector('.salary-amount'),
incomeTitle = document.querySelector('[class = "income-title"]'),
incomeAmount = document.querySelector('.income-amount'),
expensesTitle = document.querySelector('[class = "expenses-title"]'),
expensesAmount = document.querySelector('.expenses-amount'),
addExpences = document.querySelector('.additional_expenses-item'),
targetAmount = document.querySelector('.target-amount'),
range = document.querySelector('[type = "range"]');