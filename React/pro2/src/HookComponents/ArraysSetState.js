import React,{useState} from 'react'

function ArraysSetState() {

    let [iteams, setItems]= useState([])
    let addIteam =() => {
        setItems([...iteams,
            {id: iteams.length,
             value: Math.floor(Math.random() *10)+1 } 
            ])
    }
    return(
        <div>
            <button onClick={addIteam}>Add</button>
            <ul>
                { iteams.map( iteam => (<li key={iteam.id}>{iteam.value}</li>))}
            </ul>
        </div>
    )
}
export default ArraysSetState