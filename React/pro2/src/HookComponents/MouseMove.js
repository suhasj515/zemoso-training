import React,{useState,useEffect} from 'react'

 function MouseMove() {
    let [x,setX]= useState(0)
    let [y,setY]= useState(0)

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener("mousemove",logMouse)
    },[])

    let logMouse= e =>
    {
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <div>
            <p>X: {x}</p>
            <p>Y: {y}</p>
        </div>
    )
}

export default MouseMove
