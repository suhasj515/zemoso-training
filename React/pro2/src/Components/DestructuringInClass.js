import React,{Component} from 'react'

class DestructuringInClass extends Component{
    render(){
        const {id1,name}=this.props
        return(
            <div>
            {id1} and {name} destructured in class componenet
            </div>
        
        )
    }
}
export default DestructuringInClass