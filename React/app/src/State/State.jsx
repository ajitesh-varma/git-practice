// import React, { useState } from 'react'

// const State = () => {
//     let [num, setNum] = useState(10)
//     console.log(num);
//     console.log(setNum);
    
//     let demo = () =>{
//         setNum(20);
//     }    
//   return (
//     <div>
//         <h1>The number is : {num}</h1>
//         <button onClick={demo}>click</button>
//     </div>
//   )
// }

// export default State

// import React from 'react'
// import {useState} from 'react'
// const State = () => {
//     let [name,setName] = useState(10)
//     console.log(name);
//     console.log(setName);
    
//     let demo = ()=>{
//         setName(20)
//         }
//   return (
//     <div>
//         <h1>{name}</h1>
//         <button onClick={demo}>Click</button>
//     </div>
//   )
// }

// export default State
// import React,{useState} from 'react'

// const State = () => {
//   let [state,setState] = useState(0)
// let increment = ()=>{
//   setState(state+1)
// }
// let decrement = ()=>{
//   setState(state-1)
// }
// let reset = ()=>{
//   setState(0)
// }
//   return (
    
//     <div>
//       <h1>{state}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default State
// import React, { useState } from 'react';

// const State = () => {
//   let [name, setName] = useState('');
//   let [password, setPassword] = useState('');

//   let demo = (e) => {
//     e.preventDefault();
//     console.log({name, password});
//     name==='admin' && password==='12345' ? window.open('https://www.pixabay.com') : console.log("error");
//     ;
//   };

//   return (
//     <div>
//       <form onSubmit={demo}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <br />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default State;
// eslint-disable-next-line no-unused-vars
import React,{useState,useRef} from 'react'
import video from './luffy-gear-5-evil-smile-one-piece-moewalls.com.mp4'
const State = () => {
  let ref1=useRef();
  let [state,setState] = useState(true)
  let demo = ()=>{
    setState(!state)
    state ===true ? ref1.current.play() : ref1.current.pause()
  }
  return (
    <div>
      <video src={video} height="300px" ref={ref1}></video>
      <button onClick={demo}>click</button>
    </div>
  )
}

// eslint-disable-next-line no-irregular-whitespace
export default State


