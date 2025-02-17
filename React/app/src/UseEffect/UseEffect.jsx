// // no dependency

// import React, { useEffect, useState } from 'react'

// // const UseEffect = () => {
// //     let [state, setState] = useState(0)
// //     useEffect(() => {
// //         setTimeout(()=> {
// //             setState(state+1)
// //         },0)
// //     })
// //   return (
// //     <div>
// //         <h1>{state}</h1>
// //     </div>
// //   )
// // }

// // export default UseEffect


// //empty dependency

// // const UseEffect = () => {
// //     let [state, setState] = useState(0)
// //     useEffect(() => {
// //         setTimeout(()=> {
// //             setState(state+1)
// //         },2000)
// //     },[])
// //   return (
// //     <div>
// //         <h1>{state}</h1>
// //     </div>
// //   )
// // }

// // export default UseEffect



// // //dependency with value(props or state)
// // //component will rneder when state updates


// // const UseEffect = () => {
// //     let [state, setState] = useState(0)
// //     let [incr , setIncr] = useState(0)


// //     useEffect(()=>{
// //         setIncr(state*2)
// //     },[state])
// //   return (
// //     <div>
// //         <h1>{state}</h1>
// //         <h1>{incr}</h1>
// //         <button onClick={()=>setState((c)=>c+1)}>Click</button>
// //     </div>
// //   )
// // }

// // export default UseEffect


// //fetch api using useeffect

// import './UseEffect.css'

// // const UseEffect = () => {
// //     let [state, setState] = useState([])

//     useEffect(()=>{
//         window.fetch("https://fakestoreapi.com/products")
//         .then((x) => x.json())
//         .then((res) => setState(res))
        
//     },[])
// //   return (
// //     <div>
// //         <table>
// //             <thead>
// //                 <tr>
// //                     <th>id</th>
// //                     <th>price</th>
// //                     <th>image</th>
// //                 </tr>
// //             </thead>
// //         </table>
// //         {
// //             state.map((data) =>{
// //                 console.log(data);
// //                 return(
// //                     <>
// //                     <tr>
// //                         <td>{data.id}</td>
// //                         <td>{data.price}</td>
// //                         <td><img src={data.image} alt=""></img></td>
                        
// //                     </tr>
// //                     </>
// //                 )
                
// //             })
// //         }
// //     </div>
// //   )
// // }

// // export default UseEffect

// //assgnimen: https://api.github.com/users