import React from 'react'
import Child from './Child'

const Parent = () => {
    const fullname="Gargi"
    function Alert(){
        alert("button clicked");
    }
  return (
    <>
    <div>Parent</div>
    <h1>rendered in parent comp: {fullname}</h1>
    <Child name={fullname} alert={Alert} />
    </>
  )
   
}

export default Parent