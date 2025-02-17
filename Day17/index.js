// let onj ={
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// let myJSON = JSON.stringify(onj);
// console.log(myJSON);
// let myObj = JSON.parse(myJSON);
// console.log(myObj);
window.fetch("data.json")
.then(response => response.json())
.then((res)=>{
    console.log(res);
    console.log(res[0]);
    console.log(res[1].name);
    // map()
    res.map((x) => {
        console.log(x);
        console.log(x.name);
        console.log(x.id);
        console.log(x.designation);
        document.body.innerHTML += `<h2>${x.name}</h2>`
        document.body.innerHTML += `<h2>${x.id}</h2>`
        document.body.innerHTML += `<h2>${x.designation}</h2>`
            
    })
    
    
})

// let demo =async()=>{
//     let response = await fetch("data.json");
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     data.map((item)=>{
//         console.log(item);
//         document.body.innerHTML += `<h1>${item.name}</h1>`
//         document.body.innerHTML += `<h1>${item.id}</h1>`
//         document.body.innerHTML += `<h1>${item.designation}</h1>`
//     })
// }
//  demo();   