import React,{useEffect,useState} from 'react'

function ConditionalUseEffect() {
    
    let [count,setCount]=useState(0)
    let [name,setName]=useState('')
    useEffect(
        () => {
            console.log("Updating component")
             document.title=count
            }, [count]
    )
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>you have clicked {count} Conditional UseEffect </button>
        
        </div>
    )
}
export default ConditionalUseEffect