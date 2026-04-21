import React from 'react'

const Child = ({name,alert}) => {
  return (
    <>
    <div>Child </div>
    <h1>rendered in child comp : {name}</h1>
    <button onClick={alert}>click me</button>
    </>
  )
}

export default Child