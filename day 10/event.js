let btn = document.getElementById("demo")
console.log(btn);

btn.onclick=function(e){
    console.log("Button clicked");

    let res = Math.round(Math.random()*10000).toString(16)
    console.log(res);
    document.body.style.backgroundColor = `#${res}`
    
}

let btn1 = document.getElementById("demo1");
console.log(btn1);

let color = window.prompt("ENter a color:")
console.log(color);

btn1.innerHTML = color

btn1.onmouseover = ()=> {
    document.body.style.backgroundColor = `${color}`
    document.body.style.transitionDuration = "5s"
}

// let h = document.getElementById("demo2")
// console.log(h);

// let color1 = window.prompt("ENter:")
// console.log(color1);

// h.innerHTML = color1


// h.onmouseover = () => {
//     document.body.style.backgroundColor = `${color1}`
//     document.body.style.transitionDuration = "3s"
// }

let vd = document.getElementById("demo2")
console.log(vd);

vd.addEventListener("click", () => {
    let res = vd.classList.toggle("yuhuuuu")
    if(res){
        vd.play();
    }else{
        vd.pause();
    }
})

// let demo = document.getElementById('demo4');
// console.log(demo);
// demo.addEventListener("click", ()=>{
//     let demo3 = document.getElementById('demo3').value
//     console.log(demo3);
//     let speech = new SpeechSynthesisUtterance();
//     console.log(speech);
//     speech.text = demo3;
//     speechSynthesis.speak(speech);
// });

