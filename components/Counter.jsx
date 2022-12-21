import React, { useState } from 'react'

function Counter({start,increaseCount,decreaseCount}) {
   
   
    
  return (
   <>
  <div className="d-flex align-items-center m-3 p-3 border rounded">
  <h1>Counter :{start}</h1>
  <div className="btn-group ms-auto" role="group" >
  <button onClick={decreaseCount}  type="button" className="btn btn-outline-dark">-</button>
  <button onClick={increaseCount}  type="button"  className="btn btn-outline-dark">+</button>
</div>
  
  </div>
   
   
   </>
  )
}

export default Counter