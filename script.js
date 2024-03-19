
let A = 20;
let B = A++;
console.log( A , B);

let C = 20;
let D = ++C;
console.log( C , D);



// Two Value swipe in three varible
let a = 'Akash';
let l = 'Lakhan';
console.log(`a = ${a} l = ${l}`);
let c = a;
a = l;
l = c;
console.log('After Swiping');
console.log(`a = ${a} l = ${l}`); 



let x = 100;
let y = 50;
 
console.log("Before swapping:" + " x = " + 
    x + ", y = " + y);
 
// Code to swap 'x' and 'y'
x = x * y; 
y = x / y; 
x = x / y; 
 
console.log("After swapping:" + " x = " + 
    x + ", y = " + y);