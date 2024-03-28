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



// let year;

// year = parseInt(prompt('Enter a year'))

// if(year % 4 === 0){
//   if ( year % 100 !== 0) {
//     document.write('This is a leap year');
//   }else{
//     if( year % 400 === 0){
//       document.write('This is a leap year');
//     }else{
//       document.write('This is not a leap year');
//     }
//   }
// }else{
//   document.write('This is not a leap year');
// }



// if(( year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
//   document.write('This is a leap year')
// }else{
//     document.write('This is not a leap year');
// }



// let table = parseInt(prompt('Enter Table Number'))

// for(let value = 1; value <= 10; value++){
//   document.write(` <br/> The table of ${table} * ${value} = ${value * table} <br/> `)
// }



// let myName = 'lakhan Singh Rathorer'

// function himanshi() {
//     let myAge = 28 
//     // console.log(myName , myAge);
// }

// himanshi()
// console.log( myName );




// function sum(a){
//   if(a % 2 === 0){
//     console.log(`${a} This is even number`);
//   }else{
//     console.log(`${a} This is odd number`);
//   }
// }
// sum(12);



// function string(a){
//         a = 'This is my new web site';
//         // b = a.slice(0,1)
//         // b = a.substring(0 , 1)
//         // b = a.charAt(0)
//         console.log(b);
// }

// string()


// function ysh(arr, target){
//     let newarray = arr.indexOf(target)
//     let newarray2 = arr.lastIndexOf(target)
//     console.log(newarray , newarray2 );

// }

// ysh([0,2,4,6,8,6,10], 6)



// let Answer = 0;

// function sum(...a){
//     for( let i=0; i<=a.length-1; i++)
//     Answer += a[i];

//     return Answer;
// }

// let x = sum(1,2,3,4,5,6)
// console.log(x);



let Answer = 0;

function sum(b,c,...a){
    for( let i=0; i<=a.length-1; i++)
    Answer += a[i];

    return Answer + b + c;
}

let x = sum(1,2,3,4,5,6)
console.log(x);