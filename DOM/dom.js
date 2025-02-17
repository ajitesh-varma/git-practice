// console.log(window);
// console.log(document);
// console.log(document.URL);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.title);
// document.title="ProjectK"
// console.log(document.body);

// let img = document.images;
// console.log(img);



// for(let i=0; i<=img.length;i++){
//     console.log(img[i]);
//     img[i].style.height="200px";
//     img[i].style.width="200px"
//     img[i].style.borderRadius= "100%"
//     img[i].alt="image"
    
// }

// let a = document.getElementById("demo")
// console.log(a);
// console.log(a.textContent);
// a.textContent = "batch 5"
// a.style.backgroundColor = "red"
// a.style.textAlign = "center"

let a1 = document.getElementsByClassName("demo1")
console.log(a1);
console.log(a1[0]);
console.log(a1[1]);
console.log(a1[0].textContent);
console.log(a1[1].textContent)
a1[0].textContent="Hello-World"
a1[0].style.color = "red";

let a2 = document.getElementsByTagName("ol")
console.log(a2);
console.log(a2[0].textContent);
console.log(a2[1].textContent);
a2[0].style.color = "blue"
a2[1].style.color = "green"
a2[0].style.backgroundColor = "pink"

let a3 = document.getElementsByName("demo2")
console.log(a3);
console.log(a3[0].textContent);
console.log(a3[1].textContent);
a3[0].style.color = "red"
a3[1].textContent = "Hello-HTML"

//quewry selector
let a4 = document.querySelector("#demo")
console.log(a4);

let a5 = document.querySelector(".demo1")
console.log(a5);

let a6 = document.querySelectorAll(".demo1")
console.log(a6);
console.log(a6[1].textContent);


let a7 = document.querySelectorAll("#demo")
console.log(a7);

function event1(){
    console.log("Hello-World");
}


let a = document.createElement("h1")
console.log(a)
a.textContent = "Hello-World"
document.body.appendChild(a)
a.style.backgroundColor = "red"
a.style.color = "blue"

let div = document.getElementById("demoo")
div.style.border = "5px solid black"

let ol = document.createElement("ol")
console.log(ol)
div.appendChild(ol)


let li1 = document.createElement("li")
console.log(li1);
ol.appendChild(li1)
li1.textContent = "react"


let li2 = document.createElement("li")
console.log(li2);
ol.appendChild(li2)
li2.textContent = "Node.js"

ol.setAttribute("type", "A")

//create a table tab
let table = document.createElement("table")
console.log(table)
table.setAttribute("border", "2px solid black")

//append table to parent
document.body.appendChild(table)

//create tr tag
let tr1 = document.createElement("tr")
console.log(tr1)

//append tr to table
table.appendChild(tr1)

//create td tag
let td1 = document.createElement("td")
console.log(td1)
td1.textContent="html"

let td2 = document.createElement("td")
console.log(td2)
td2.textContent="html"
td2.style.backgroundColor = "red"

let td3 = document.createElement("td")
console.log(td3)
td3.textContent="html"

let td4 = document.createElement("td")
console.log(td4)
td4.textContent="html"
td4.style.backgroundColor = "red"

//append td to tr
tr1.appendChild(td1)
tr1.appendChild(td2)
tr1.appendChild(td3)
tr1.appendChild(td4)

// let br  = document.createElement("br")
// table.appendChild(br)


let tr2 = document.createElement("tr")
console.log(tr2)
table.appendChild(tr2)

let td5 = document.createElement("td")
console.log(td5)
td5.textContent="html"
td5.style.backgroundColor = "red"

let td6 = document.createElement("td")
console.log(td6)
td6.textContent="html"


let td7 = document.createElement("td")
console.log(td7)
td7.textContent="html"
td7.style.backgroundColor = "red"

let td8 = document.createElement("td")
console.log(td8)
td8.textContent="html"


tr2.appendChild(td5)
tr2.appendChild(td6)
tr2.appendChild(td7)
tr2.appendChild(td8)



