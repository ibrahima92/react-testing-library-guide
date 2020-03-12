import React from "react"

export const CounterContext = React.createContext()

const CounterProvider = () => {
  const [counter, setCounter] = React.useState(0)
  const increment = () => setCounter(counter + 1)
  const decrement = () => setCounter(counter - 1)

  return (
    <CounterContext.Provider value={{ counter, increment, decrement }}>
      <Counter />
    </CounterContext.Provider>
  )
}

export const Counter = () => {  
    const { counter, increment, decrement } = React.useContext(CounterContext)   
    return (
     <>
       <h1 data-testid="counter">{ counter }</h1>
       <button data-testid="button-up" onClick={increment}> Up</button>
       <button data-testid="button-down" onClick={decrement}>Down</button>
    </>
       )
}


export default CounterProvider