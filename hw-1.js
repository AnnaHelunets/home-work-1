const salary = parseFloat(
    prompt("Введіть розмір вашої зарплати"));
const bonus = 0.15 * salary;
const income = salary + bonus;
const tax = 0.1 * income;
const costs = 190;

const remainder = income - tax - costs;
alert("Залишок від зарплати" + " " + remainder);
console.log(remainder);