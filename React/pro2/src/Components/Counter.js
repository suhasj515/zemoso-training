import React,{Component} from 'react'

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            n: 0
        }
    }
    
    plusOne(){
        this.setState({
            n : this.state.n +1
        },()=> {console.log(this.state.n)})
    }

    render(){
        return(
            <div>
            
            <h3>NO of times clicked is: {this.state.n}</h3>
            <button onClick={()=>this.plusOne()}>+1</button>
            </div>
        )
    }
}
export default Counter