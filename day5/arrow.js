// let a = () => console.log("Hello");
// console.log(a);
// console.log(a());

// let b = () => {return "hello"}
// console.log(b());
// console.log(b);

// 

let OP= (a, b, task) => {
    console.log(task(a,b));
}
OP(a = Number(prompt("enter a for add:")),b = Number(prompt("enter b to add:")),
(a,b) => {
    return a+b;
})
OP(a = Number(prompt("enter a to sub:")),b = Number(prompt("enter b to sub:")),
(a,b) => {
    return a-b;
})
OP(a = Number(prompt("enter a to mul:")),b = Number(prompt("enter b to mul:")),
(a,b) => {
    return a*b;
})