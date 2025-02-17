// import React from 'react'
// import {user,id} from './CompA.jsx'


// const CompC = () => {
//   return (
//     <div>
//         <user.Consumer>
//             {
//                 (name) =>{
//                     return(
//                         <>
//                            <id.Consumer>
//                             {
//                                 (num) =>{
//                                     return(
//                                         <h1>my name is {name}  and Why not {num}!!</h1>
//                                     )
//                             }
//                         }
//                            </id.Consumer>
//                         </>
//                     )}
//                 }
            
//         </user.Consumer>
//     </div>
//   )
// }

// export default CompC


import React, { useContext } from 'react'
import { username , id, marks } from './compA'

const CompC = () => {
    let user = useContext(username)
    let num = useContext(id)
    let mar = useContext(marks)
  return (
    <div>
        <h1>{user}</h1>
        <h1>{num}</h1>
        <h1>{mar}</h1>
    </div>
  )
}

export default CompC