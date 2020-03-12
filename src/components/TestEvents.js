import React from 'react'

const TestEvents = () => {
    const [counter, setCounter] = React.useState(0)
  
return (
  <>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
    <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
 </>
    )
  }
  
  export default TestEvents