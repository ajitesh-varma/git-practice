// import React from 'react'
// import CompB from './CompB'

// export const user = React.createContext()
// export const id = React.createContext()

// const CompA = () => {
//   return (
//     <div>
//         <user.Provider value={"Jagan"}>
//             <id.Provider value={175}>
//                 <CompB />
//             </id.Provider>
//         </user.Provider>
//     </div>
//   )
// }

// export default CompA

import React from 'react'
import CompB from './CompB'

export let username = React.createContext()
export let id = React.createContext()
export let marks = React.createContext()


const compA = () => {
  return (
    <div>
        <username.Provider value={"chitti robo"}>
            <id.Provider value={175}>
                <marks.Provider value={"HUHUHUHU"}>
                    <CompB />
                </marks.Provider>
               
            </id.Provider>
            
        </username.Provider>
        
    </div>
  )
}

export default compA