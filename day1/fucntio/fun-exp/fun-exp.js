// let a = parseInt(prompt("Enter the first number"));
// let b = parseInt(prompt("Enter the second number"));
// let c = parseInt(prompt("Enter the third number"));
// let operator = function(a,b,c){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
      
    
// }
// operator(a,b,c);

//create a function expression to perform arthematic operation for three numbers and find the largest 
//three numbers input should be from end user
let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let c = Number(prompt("Enter the third number"));
function largest(a,b,c){
    console.log(a+b+c);
    console.log(a-b-c);
    console.log(a*b*c);
    console.log(a/b/c);
    console.log(Math.max(a,b,c));
    console.log(Math.min(a,b,c));
    

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