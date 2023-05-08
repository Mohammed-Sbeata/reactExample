import React from "react";

export function Counter(){
    const [count , setCount] = React.useState(0)
   const  incrementCounter =() => {
        setCount(count+1)
    }
   const  decrementCounter =() => {
        setCount(count-1)
    }
    const  clearCounter =() => {
        setCount(0)
    }
    return(
        <div>
           <div> count : {count}</div>
           <button onClick={incrementCounter}>Increment 1</button>
           <button onClick={decrementCounter}>Decrement 1</button>
           <button onClick={clearCounter}>Clear</button>


    </div>
    )
}
