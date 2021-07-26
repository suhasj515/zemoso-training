import React,{useState} from 'react'
function CounterHooks(){
    let [n,updateN]= useState(0)
    return(
        <div>
            <br/>
            <button onClick={()=>updateN(n+1)}>click me</button>
            <p>Cicked {n} times using useState react hooks</p>
        </div>
    )
}

export default CounterHooks