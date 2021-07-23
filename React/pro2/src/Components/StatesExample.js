import React,{Component} from 'react'

class StatesExample extends Component{
    constructor(){
        super()
        this.state ={
            message :"Example of States Example"
        }
    }
     changeMessage(){
        this.setState({
            message:"Changes dynamically in setState"
        })
    }
    render() {
        return(
            <div>
                {this.state.message} <br />
                <button onClick={()=>this.changeMessage()}>Click me</button>
            </div>
        )
    }
}
export default StatesExample