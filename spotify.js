// let str = "Sritam";
// let a = 2;
// let b = 5;
// console.log(`the sum of two numbers is : ${a + b}`);
// alert("hii");
// let c = prompt("Enter your name");
// console.log(c);
// let firstName = prompt("Enter your first name: ");
// let lastName = prompt("Enter your last name");
// console.log(firstName,lastName);
// let str = "Sritam";
// newStr = str.trim();
// console.log(newStr);
// let newStr = str.replace("it","bt");
// console.log(newStr);
// let arr = ["Sritam","Sudeepta","lisu","Chiku"];
// console.log(arr);
// let n = prompt("Enter the number: ");
// for(let i=1; i<=10; i++){
//     console.log(n*i);
// }
// let movie = "charlie";
// let guess = prompt("Guess the movie: ");
// if(guess == movie){
//     console.log("congrats");
// }else if(guess == "quit"){
//     console.log("you quit");
// }else{
//     guess = prompt("try again:");
// }
// let arr = [["somu","valu","chiku"],["devi","sikun","barun"]];
// for(arrs of arr){
//     // for(nested of arrs){
//     //     console.log(nested);
//     // }
//     console.log(arrs);
// }

// add
// del
// view

// const somu1 = {
//     Name: "Sritam",
//     Age: 23,
//     Gender: "Male"
// };

// const user = {
// sritam :{
//     name: "bapu",
//     age: 23,
//     city: "jagatsinghpur"
// },
// monalisha :{
//     name: "lisu",
//     age: 20,
//     city: "jajpur"
// },
// };
// let arr = [
//     {
//         name: "bapu",
//         age: 23,
//         city: "jagatsinghpur"
//     },
//     {
//         name: "lisu",
//         age: 20,
//         city: "jajpur"
//     }
// ];

// const max = parseInt(prompt("Please enter the maximum number you want:"));
// const random = Math.floor(Math.random() * max) + 1;

// const startTime = performance.now(); // Start timing

// let guess = prompt("Guess the number:");

// while (true) {
//     if (guess === "quit") {
//         console.log("You quit the game.");
//         break;
//     }

//     guess = parseInt(guess); // Convert input to a number

//     if (guess === random) {
//         const endTime = performance.now(); // End timing
//         const timeTaken = ((endTime - startTime) / 1000).toFixed(2); // Convert to seconds

//         console.log(`Your guess is correct! 🎉 Congrats! The random number was ${random}.`);
//         console.log(`You took ${timeTaken} seconds to guess the number.`);
//         break;
//     } else if (guess < random) {
//         guess = prompt("Hint: The number is too small, try again.");
//     } else if (guess > random) {
//         guess = prompt("Hint: The number is too big, try again.");
//     }
// }

// let todo = [];
// let task = prompt("Choose the task you want to perform: add,del,show list,exit");
// while(true){
//     if(task == "exit"){
//         console.log("you are exit.");
//         break;
//     }
//     if(task == "list"){
//         for(let i=0; i <= todo.length-1; i++){
//             console.log(i,todo[i]);
//         }
//     }
//     else if(task == "add"){
//         let add = prompt("Add your task in todo");
//         todo.push(add);
//         console.log("task added");
//     }
//     else if(task == "del"){
//         let del = prompt("Enter the task you want to delete");
//         todo.splice(del,1);
//         console.log("Task deleted");
//     }
//     else{
//         console.log("Wrong request.");
//     }
//     task = prompt("Choose the task you want to perform: add,del,show list,exit");
// }
// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(2,4))
// function rollDice(num){
//     return Math.floor(Math.random() * num) + 1;
// }

// console.log(rollDice(10));
// function avg(a,b,c){
//     return (a+b+c)/3;
// }
// console.log(avg(15,30,38));
// function mul(num){
//     for(let i = 1; i<=10 ; i++){
//          console.log(num * i);
//     }
// }
// mul(2);
// function sumOfNumbers(num){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(sumOfNumbers(4));

// let arr = ["somu","bapu","sritam"]
// function concatenate(arr){
//     let concate = "";
//     for(let i = 0; i < arr.length; i++){
//        concate = concate + arr[i];
//     }
//     return concate;
// }
// concatenate(arr);

// let sum = function(a,b){
//     return a+b;
// }

// function multipleGreet(func,n){
//     for(let i = 1; i <= n; i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("hello");
// }

// function oddEvenFactory(request){
//     if(request == "odd"){
//         return function(num){
//             console.log(num%2 != 0);
//         }
//     }else if(request == "even"){
//         return function(num){
//             console.log(num%2 == 0);
//         }
//     }else{
//         console.log("request is wrong.");
//     }
// }

// let calculater = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };

// let sum = (a,b) => a+b;

// console.log("hello there");
// console.log("hello there");
// let id=setInterval(function(){
//     console.log("hello");
// },2000)

// let arr = [11,20,30,10,9];
// let num = 7;
// let items = (arr,num) => {
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > num){
//             console.log(`${arr[i]} is greater than ${num}`);
//         }
//     }

// }

// let str = "abcdffgeccssfdg";
// function uniqueChar(str){
//     let ans = ""; 
//     for(let i = 0; i<str.length;i++){
//         let char = str[i];
//         if(ans.indexOf(char)==-1){
//             ans += char;
//         }
//     }
//     return ans;
// }

// let country = ["Australia","Germany","UnitedStatesofAmerica"];
// function longCountry(country){
//     let index = 0;
//     for(let i=0; i<country.length; i++){
//         let anslen = country[index].length;
//         let currlen = country[i].length;
//         if(currlen>anslen){
//             index = i;

//         }
//     }
//     return country[index];
// }

// let str = "sritam biswal loves monallisha malik";
// function vowel(str){
//     let count = 0;
//     for (let i = 0;i < str.length; i++){
//         if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
//             count++;
//         }
//     }return count;
// }

// let start = 10;
// let end = 25;
// function random(start,end){
//     let diff = end - start;
//     return Math.floor(Math.random() * diff) + start;
// }

// let arr = [10,20,30,40,50];
// let arrayAvg = (arr) => {
//     let count = 0;
//     let avg = 0;
//     for(let i = 0; i < arr.length; i++){
//         count = count + arr[i];
//         avg = count / arr.length;
//     }
//     return avg; 
// }
// console.log(arrayAvg(arr));

// let isEven = (num) => {
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("not even");
// }
//     return num % 2 == 0;
// }

// const object = { 
//     message: 'Hello,World!', 
//     logMessage() { 
//         console.log(this.message); 
//     } 
// }; 
// setTimeout(object.logMessage, 1000);

// let length=4;
// function callback(){
//     console.log(this.length);
// }
// const object={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);

// const a = {
//     name: 'sritam'
// }
// const b = {
//     name: 'ram'
// }
// const c = {
//     name: 'syam'
// }
// a[b] = {
//     name: 'somu'
// }
// a[c] = {
//     name: 'bapu' 
// }
// console.log(a[b]);

// let n =2;
// let result = (n) => n**n;

// let print = ()=>{
//     for(let i = 0; i <= 5; i++){
//        setInterval(console.log('hellow world'),2000);
//     }
// }


// let arr = [1,3,4,7,9,10];
// let result =  arr.forEach((n)=>console.log(n));

// let arr = [{
//             name: "somu",
//             mark: 90
//         },
//         {
//             name: "sritam",
//             mark: 80
//         },
//         {
//             name: "bapu",
//             mark: 75
//         }
// ]

// arr.forEach((el)=>console.log(el.name));

// let result = arr.map((el)=>console.log(el));

// let arr = [2,4,1,1,10,50]
// let result = arr.reduce((res,el)=>{return res+el});

// let result = arr.some((el)=>(el%2==0));//some and every.

// let result = arr.reduce((max,el)=>{
//     if(el>max){
//         return el;
//     }else{
//         return max;
//     }
// })

let arr = [10,20,30,4,1];
// let result = arr.every((em)=>{return em%10==0});

// let result = arr.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }else{
//         return el;
//     }
// })

// console.log(...arr);
// let arr1 = [9,8,7,30,15];
// console.log(...arr,...arr1);
// let obj = {
//     name: 'sritam',
//     age: 23,
//     gender: 'male'
// };

// let obj2 = {...obj,id:1,mark:90}

// let obj3 = {...arr1};
// let obj4 = {...'sritam'};

