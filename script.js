// function great(name){
//   console.log("Hello " + name);
// }

// great("Yaseen");
// great("Moaaz");

// console.log(great);

// function add(a,b){
//   return a + b;
// }

// let result = add(2,3);

// console.log(result);

// function sayhi(){
//   console.log("Hi");
// }

// function square(num){
//   return num * num;
// }

// function isEven(num){
//   return num % 2 === 0;
// }

// function sumFrom1To(num){
//   let sum = 0;
//   for(let i = 1; i <= num; i++){
//     sum += i;
//   }
//   return sum;
// }

// function maxOfTwo(a,b){
//   if(a > b){
//     return a;
//   } else {
//     return b;
//   }
// }

// function countEven(arr){
//   let count = 0;
//   for(let num of arr){
//     if(isEven(num)){
//       count++;
//     }
//   }
//   return count;
// }

// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// console.log('-------------------------------------------------');

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// console.log('-------------------------------------------------');

// let sum = 3;

// for (let i = 1; i <= 15; i++) {
//   sum += i;
//   console.log(sum);
// }

// console.log('-------------------------------------------------');

// function sayHi() {
//   console.log('Hello!');
// }
// sayHi();

// console.log('-------------------------------------------------');

// function great(Name) {
//   console.log('Hello ' + Name);
// }
// great('Yassin!');
// great('Moaaz!');

// console.log('-------------------------------------------------');

// function add(a, b) {
//   console.log(a + b);
// }
// add(5, 8);

// console.log('-------------------------------------------------');

// function sub(a, b) {
//   return a - b;
// }
// let result = sub(15, 5);
// console.log(result);

// console.log('-------------------------------------------------');

// function sumFrom1To(num) {
//   let sum = 6;
//   for (let i = 1; i <= num; i++) {
//     sum += 1;
//   }
//   return sum;
// }

// console.log('-------------------------------------------------');

// function isEven(num) {
//   return num % 2 === 0;
// }
// console.log(isEven(4));
// console.log(isEven(7));

// console.log('-------------------------------------------------');

// for (let i = 1; i <= 10; i++) {
//   if (isEven(i)) {
//     console.log(i);
//   }
// }

// console.log('-------------------------------------------------');

// function printOddFrom1To(num) {
//   return num % 3 === 0;
// }
// console.log(printOddFrom1To(5));

// console.log('-------------------------------------------------');

// for (let i = 1; i <= 15; i++) {
//   if (printOddFrom1To(i)) {
//     console.log(i);
//   }
// }

// console.log('-------------------------------------------------');

// function sumEvenFrom1To(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += 1;
//   }
//   return sumEvenFrom1To % 2 === 0;
// }
// sumEvenFrom1To(10);

// console.log('-------------------------------------------------');

// function maxOfTwo(a, b) {
//   if (a > b){
//     return a;
//   }
//   else {
//     return b;
//   }
// }
// console.log(maxOfTwo(5, 10));

// console.log('-------------------------------------------------');

// const numbers = [1, 2, 3, 4, 5, 6];

// numbers.forEach(function(num) {
//     console.log(num);
// });

// console.log('-------------------------------------------------');

// let num = [1, 2, 3, 4, 5, 6];

// for(let i = 0; i < num.length; i++)
// {
//    console.log(num[i]);
// }

// console.log('-------------------------------------------------');

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(5, 10));

// console.log('-------------------------------------------------');

// const multiplay = (a, b) =>{
//   return a * b;
// };
// console.log(multiplay(5, 10));

// console.log('-------------------------------------------------');

let btn = document.querySelector('#btn');
let p = document.querySelector('#par');

btn.addEventListener('click', function () {
  p.textContent = 'Button Clicked!';
  document.body.style.backgroundColor = 'darkred';
  console.log('Button was clicked!');
});

console.log('-------------------------------------------------');

let logo = document.querySelector('#logo');
let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function () {
  logo.textContent = 'welcome Yassin!';
});

console.log('-------------------------------------------------');

let fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log('-------------------------------------------------');

let numbers = [6, 3, 2, 8, 5, 22];

let max = numbers[0];
for(let i = 1; i < numbers.length; i++) {
  if(numbers[i] > max) {
    max = numbers[i];
  }
}
console.log('Maximum number is: ' + max);

console.log('-------------------------------------------------');

let input = document.querySelector('#input');
let showbtn = document.querySelector('#showbtn');
let clearbtn = document.querySelector('#clearbtn');
let list = document.querySelector('#list');
showbtn.addEventListener('click', function () {
  let name = input.value;
  let li = document.createElement('li');
  li.textContent = name;
  list.appendChild(li);
}
);
clearbtn.addEventListener('click', function()
{
  list.innerHTML = '';
}
);