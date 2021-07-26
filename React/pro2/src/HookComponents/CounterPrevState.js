import React,{useState} from 'react'
function CounterPrevState(){
    let initialValue=0
    let [n,setN]=useState(initialValue)
    return(
        <div>
            Counter : {n} Using previous state useState <br/>
            <button onClick={()=> setN(initialValue)}>Reset</button>
            <button onClick={()=> setN(prevCount => prevCount +1)}>Increment</button>
            <button onClick={()=> setN(prevCount => prevCount -1)}>Decrement</button>
        </div>
    )
}
export default CounterPrevState