import React from 'react'   
// // import Navbar from './Navbar'
// // import "./App.css"
// // import {add,sub} from "./components/Math"
// // import Parent from './PropsPassing/Parent'
// // import Child from './PropsPassing/Child'
import UseStateOne from './Hooks/UseStateOne'
// // import Multicounter from './Hooks/Multicounter' 
// // import ShowHIdePwd from './Hooks/ShowHIdePwd'
// import FormInputHandling from './Hooks/FormInputHandling'

// const App = () => {
  
// // console.log(add(2,3))
// // console.log(sub(5,2))
//   return (
//     <>
//     {/* <Navbar/>
//     <h1>This is App component</h1> */}
//     {/* <Parent/>  */}
//     
//     {/* <Multicounter/> */}
//     {/* <ShowHIdePwd/> */}
//     <FormInputHandling/>
    
//     </>
//   )
// }


// export default App 





// import React from 'react'
// import Navbar from './Navbar'
// import "./App.css"

// const App = () => {
//   return (
//     <>
//     <Navbar/>
// <h1>This is app component</h1>
// </>
//   )
// }

// export default App
// import Parent from "./propsPassing/Parent";
// import UseStateOne from "./Hooks/UseStateOne";
// import MultiCounter from "./Hooks/MultiCounter";
import Password from "./Hooks/Password";
import CounterApp from "./Hooks/CounterApp";
import Theme from "./Hooks/Theme"; 
import Form from "./Hooks/Form";  

import DataFetching from './Hooks/DataFetching';


function App() {
  return (
    <>
    {/* <div>
      <Parent />
    </div>
    <div */}
    {/* <UseStateOne/> 
    <MultiCounter/> */}
    <Password/> 
    <CounterApp/> 
    <Theme/> 
    <Form/>
    <UseStateOne/>
    
    <DataFetching/>

    </>
  );
}

export default App;