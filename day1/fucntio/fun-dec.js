// function demo(a){
//     console.log("HELLO"+a);
// }
// demo("world");

function sum(a,b){
    let c = a+b;
    let d= a-b;
    let e = a*b;
    let f = a / b;
    let g = a++;
    let h = a--;
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(a+b);

    //console.log("hello");
}
//let a = parseInt(prompt("Enter numer a:"));
//let b = parseInt(prompt("Enter numer b:"));
// let a = Number(prompt("Enter numer a:"));
// let b = Number(prompt("Enter numer b:"));
// sum(a,b);

//func expression
let res = function(a,b){
     let c = a+b;
     let d= a-b;
     console.log(c);
     console.log(d);
 }
 res(5,6);

 //home assesment
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Enter the third number"));
function largest(a,b,c){
  if(a>b && a>c){
    console.log("The largest number is :"+a);
  }
  else if(b>a && b>c){
    console.log("The largest number is :"+b);
  }
  else{
    console.log("The largest number is :"+c);
  }
}
largest(a,b,c);