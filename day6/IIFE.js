// (function(){
//     console.log("HEllo")
// })();

// (() => {
//     console.log("Hello")
// })();

// ((a,b) => {
//     console.log(a+b)
// })(10,10);

// (function demo(){
//     console.log("Hello-world")
// })();

// let arr = [1,2,"hello",1n,undefined];
// console.log(arr);
// arr.push(5);
// console.log(arr);

// let arr1 = new Array(1,2,"hello",1n,undefined)
// console.log(arr1);

// let obj = {
//     name:"john",
//     age:25,
//     arr : [10,20,30],
//     demo : function(){
//         console.log("hello");
//     }
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.demo);
// obj.demo()

// function obj2(name,id){
//     this.name = name;
//     this.id = id;
// }
// let p1 = new obj2("KUMAR",1);
// console.log(p1);
// console.log(p1.name);
// console.log(p1.id);


//async fun
// function main(m,n){
//     setTimeout(() => {
//     for(let i=m; i<=n; i++){
//         console.log(i);
//     }
//     }, 5000)
// }main(1,10)

// function sample(){
//     console.log("no printed");
// }
// sample();




// // window.setInterval(function main(m,n){
// //     for(let i=m; i<=n; i++){
// //         console.log(i);
// //     }
// // },15000)
// // main(1,20)


let online=window.navigator.onLine

new Promise((resolve , reject)=>{
    setTimeout(()=>{
        if(online==True){
            return resolve()
        }else{
            return reject()
        }
    },2000)
})
.then(()=> console.log("online"))
.catch(())