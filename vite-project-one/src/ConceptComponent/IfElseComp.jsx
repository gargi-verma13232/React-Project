import React from 'react'

const IfElseComp = () => {
    const isloggedIn = false
  return (
    <>
    <div>IfElseComp</div>
    <div>{isloggedIn ? 'Welcome back!' : 'Please log in.'}</div>
    </>
  )
}

export default IfElseComp