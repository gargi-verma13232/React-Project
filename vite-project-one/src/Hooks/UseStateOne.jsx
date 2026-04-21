import React, { useEffect, useState } from 'react'

const UseStateOne = () => {
  const[count,setCount] = useState(0)
  console.log("count",count)//0

  useEffect(()=>{
    alert("button clicked") 
  }, [count])

  function increase(){
    //count=count+1
    // setCount(count+1)
    setCount((prev)=>prev+1)
  }

  function reset(){
    setCount(0)
  }

  console.log("rendering") //1st time rendering
  return (
    <>
    <div>UseStateOne</div>
    <h1>count: {count}</h1>
    <button onClick={increase}>increase</button>
    {/* <button onClick={decrease}>decrease</button> */}
    <button onClick={reset}>reset</button>
    <button onClick={()=>setCount(count-1)}>decrease</button>

    </>
  )
}

export default UseStateOne