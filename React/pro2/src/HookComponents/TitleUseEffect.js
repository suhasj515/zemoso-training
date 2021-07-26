import React,{useEffect,useState} from 'react'

function TitleUseEffect() {
    
    let [count,setCount]=useState(0)
    useEffect(
        () => { document.title=count}
    )
    return (
        <div>
        <button onClick={() => setCount(count+1)}>you have clicked {count} times Title changes</button>
        
        </div>
    )
}
export default TitleUseEffect