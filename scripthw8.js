// Задание 1

function getResult(arr, operation) {
    return Math.round(operation(arr));
}
const sum = (arr) => {
    return arr.reduce((sum, element) => sum + element);
}
const mult = (arr) => {
    return arr.reduce((product, element) => product * element);
}
console.log(getResult([3, 4, 1, 9], mult));
console.log(getResult([3, 4, 1, 9], sum)); 


// ЗАДАНИЕ 2

const users = [
{ name: 'Jon', age: 22 },
{ name: 'Richard', age: 18 },
{ name: 'Anton', age: 32 },
{ name: 'Lida', age: 23 },
{ name: 'Bob', age: 44 }
];
console.log(users.sort((a, b) => a.age - b.age));


// ЗАДАНИЕ 3

const each = (arr, operation) => {
return operation(arr);
}

const reverseArr = (arr) => arr.reverse();
const toNumberArr = (arr) => {
let resultArr = [];

arr.forEach((element) => {
    if (!isNaN(+element)) {
            resultArr.push(+element);
    }
});
return resultArr;
}
const arr = [1, '4', 9, 'two'];
console.log(each(arr, reverseArr));
const arr1 = [1, '4', false, 9, 'two'];
console.log(each(arr1, toNumberArr)); 


// ЗАДАНИЕ 4

function printDateAtInterval() {
    const idPrintInterval = setInterval(printCurrentDate, 3000);
    setTimeout(() => {
        clearInterval(idPrintInterval);
        console.log('30 секунд прошло');
    }, 30000, idPrintInterval);
}
function printCurrentDate() {
    let currentDate = new Date();
    console.log(currentDate);
}
printDateAtInterval(); 


// ЗАДАНИЕ 5

function calling() {
    console.log('Звоню!');
};
function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...');
        callback();
    }, 1000);
}
function talk() {
    console.log('Разговор')
}
calling();
beeps(talk);

// Отпправляю на проверку
