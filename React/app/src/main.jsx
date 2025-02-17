import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import Cbc from './component/Cbc.jsx'
// import Fbc from './component/Fbc.jsx'
// import Name from './component/Name.jsx'
// import Roll from './component/Roll.jsx'
// import Group from './component/Group.jsx'
// import Detail from './component/Detail.jsx'
// import Demo from './component/Demo.jsx'
// import Parent from './props/parent.jsx'
// import './App.css';
// import State from './State/State.jsx'
// import Inline from './Styles/Inline.jsx'
// import Comp1 from './Styles/Comp1.jsx'
// import Comp2 from './Styles/Comp2.jsx'
// import Comp1 from './Styles/Comp1.jsx'
import './Styles/globally.css'
import Ref from './UseRef/Ref.jsx'
import List from './List-keys/List.jsx'
import CompA from './UseContext/compA.jsx'
import UseEffect from './UseEffect/UseEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Detail />
    <Name />
    <Roll />  
    <Group />
    <Demo />

    <Parent /> */}
    {/* <Comp1 />
    <Comp2 />
    <State />
    <Inline />
    <Ref />
     <List /> */}
    {/* <CompA/> */}
    <UseEffect/>
    

  </StrictMode>,
)
