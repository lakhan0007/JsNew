// let A = 20;
// let B = A++;
// console.log( A , B);

// let C = 20;
// let D = ++C;
// console.log( C , D);

// // Two Value swipe in three varible
// let a = 'Akash';
// let l = 'Lakhan';
// console.log(`a = ${a} l = ${l}`);
// let c = a;
// a = l;
// l = c;
// console.log('After Swiping');
// console.log(`a = ${a} l = ${l}`);

// let x = 100;
// let y = 50;

// // console.log("Before swapping:" + " x = " + x + ", y = " + y);
// console.log(`Before Swapping: x = ${x} y = ${y}`);

// x = x * y;
// y = x / y;
// x = x / y;

// // console.log("After swapping:" + " x = " + x + ", y = " + y);
// console.log(`After Swapping: x = ${x} y = ${y}`);

// let leepYear;

// leepYear = parseInt(prompt('enter a year'))

// if (leepYear % 4 == 0) {
//   if (leepYear % 100 == 0) {
//     if (leepYear % 400 == 0) {
//       document.write("this is a leap yaer");
//     } else {
//       document.write("this is not a leap yaer");
//     }
//   } else {
//     document.write("this is a leap yaer");
//   }
// } else {
//   document.write("this is not a leap yaer");
// }





let table = parseInt(prompt('Enter Table value'))

for(let value = 1; value <= 10; value++){
  document.write(` <br/> The table of ${table} * ${value} = ${value * table} <br/> `)
}
