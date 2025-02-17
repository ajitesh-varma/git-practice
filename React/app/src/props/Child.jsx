// // import React from 'react'
// // import './Child.css'

// // class Child extends React.Component{
// //     render(){
// //         return(
// //             <>
// //             <div className = "demo">
// //             <h1>my username is {this.props.name}</h1>
// //             <div className='demo1'>
// //             <h1>my name is {this.props.nam}</h1>
// //             </div>
// //             <div className='demo2'>
// //             <h1>my age is {this.props.age}</h1>
// //             </div>
// //             <div className='demo3'>
// //             <h1>my group is {this.props.group} </h1>
// //             </div>
// //             </div>
// //             </>
// //         )
// //     }
// // }
// // export default Child;

// import React from 'react'
// import './Child.css'

// const child = (props) => {
//   let {name, id, role} = props.obj
//   return (
//     // <div className='demo'><h1>My name is {props.name} </h1></div>
//     // <h1>the arrays are {props.arr}</h1>
//     // props.arr.map((x) =>{
//     //   return(
//     //     <li>{x}</li>
//     //   )
//     // })
//     <h1>{name},{id},{role}</h1>

//   )
// }

// export default child

import React from 'react'

const child = (props) => {
  return (
    <div>
      <button onClick={() => props.fun()}>click</button>
    </div>
  )
}

export default child

