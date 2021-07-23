import React from 'react'

//without jsx

//const NonJsx=()=> <div><a href="www.google.com">Non Jsx here</a></div>

//export default  NonJsx

const UsingJsx=()=>{

return React.createElement("div",
null,React.createElement("a",{href:"www.google.com"},
"Using jsx here")

)
}
let com2=()=>{
    return React.createElement("div",
    null,
    React.createElement("p",{color:"red"},"Hi there in red"))
}

export default UsingJsx