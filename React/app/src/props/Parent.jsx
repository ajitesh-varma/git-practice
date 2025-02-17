// // import React from 'react'
// // import Child from './child';

// // class Parent extends React.Component{
// //     obj = {
// //         username : "AJ",
// //         Name : "Ajitesh",
// //         Age : 20,
// //         group : 5,
// //     }
// //     render(){
// //         return(
// //             <>
// //             <Child name = {this.obj.username}
// //             nam = {this.obj.Name}
// //             age = {this.obj.Age}
// //             group = {this.obj.group}/>
            
// //             </>
// //         )
// //     }
// // }
// // export default Parent;

// import React from 'react'
// import Child from './child'

// const parent = () => {
//   let obj1 = {
//     name : "aj",
//     id : 1,
//     role : "developer"
//   }
//   return (
//     <div>
//         {/* <Child name="aj"/> */}
//         {/* <Child id= {10} /> */}
//         {/* <Child arr= {[10,20,30]}/> */}
//         <Child obj = {obj1}/>
//     </div>
//   )
// }

// export default parent

import React from 'react'
import Child from './child'

const parent = () => {
  let demo = () =>{
    window.alert("I am arrow function")
  }
  return (
    <>
      <Child fun={demo}/>
    </>
  )
}

export default parent