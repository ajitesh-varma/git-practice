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
let a = Number(prompt("Enter numer a:"));
let b = Number(prompt("Enter numer b:"));
sum(a,b);