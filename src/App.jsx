import React, { useState } from 'react';
import Counter from "../components/Counter.jsx"

function App() {
  
  const [count,setCount]=useState(5);

  function increaseCount(){
    //console.log("increaseCOunt")
    setCount(count+1)
  }
  function decreaseCount(){
    
    setCount(count-1)

  }


  return (
    <>
    <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}  />
    <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}  />
    <Counter start={count} increaseCount={increaseCount} decreaseCount={decreaseCount}  />
    
    
    
    
    
    
    
    </>
  )
}

export default App