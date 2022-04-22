// Problem 206


// let n = 32;
// let count = 0;

// for(let i = 2; i < n; i++){
//   if(isPrimeNumber(i)){
//     count++;
//   };
// }

// console.log(count);

// function isPrimeNumber(num){
//   let check = true;
//   for(let i = 2; i < num; i++){
//     if(num % i == 0){
//       check = false;
//     }
//   }
//   if(check == true){
//     return true;
//   }

//   return false;
// }



// Problem 208


// let n = "String";
// let count = 0;

// function getCharacterCount(...n){
//   return n.length;
// }

// console.log(getCharacterCount(...n));


// Problem 209


// let text = "Bu manfiy son - 22 -";
// let num = "";

// function showIt(...text){
//   let hyphen = false;
//   text.forEach((item) => {
//     if(Number.isInteger(Number(item))){
//       Number(num += item);
//     }
//     if(item.includes("-")){
//       hyphen = true;
//     }
//   })
//   if(num > 0 && hyphen == true){
//     return Number(-num);
//   } else if(num > 0){
//     return Number(num);
//   } else{
//     return null;
//   }
// }

// console.log(showIt(...text));


// Problem 215


// let massArray = [7, 11, 17, 23, 31, 37];

// function sort(massArray){
//   for(let i = 0; i < massArray.length; i++){
//     for(let j = 0; j < massArray.length; j++){
//       if(massArray[j] > massArray[j + 1]){
//         let a = massArray[j + 1];
//         massArray[j + 1] = massArray[j];
//         massArray[j] = a;
//       }
//     }
//   }
//   return massArray;
// }

// console.log(sort(massArray));

// Problem 216


// let arr = [7, 11, 17, 23, 31, 37];

// function min(arr){
//   let small = arr[0];
//   arr.forEach((item) => {
//     if(item < small){
//       small = item;
//     }
//   })
//   return small;
// }

// console.log(min(arr));


// Problem 217


// let n = 0;

// function oddOrEven(n){
//   if(n % 2 == 0){
//     return "juft";
//   } else{
//     return "to'q";
//   }
// }

// console.log(oddOrEven(n));


// Problem 218


// let n = [1, 2, 3];

// function flatArray(n){
//   n = String(n);
//   n = Array.from(n);
//   n = n.filter((item) => {
//     if(Number(item)){
//       return item;
//     }
//   });
//   n = n.map((item) => Number(item));
//   return n;
// }

// console.log(flatArray(n));


// Problem 219


// let n = 18;

// let recursiveFunction = function(n) {
//     if(n == 1) return 1;
//     return n * recursiveFunction(n - 1);
// }

// console.log(recursiveFunction(n));


// Problem 220


// let n = 35;

// let recursiveFunction = function(n) {
//     if(n == 1) return 1;
//     return n * recursiveFunction(n - 1);
// }

// console.log(recursiveFunction(n));
