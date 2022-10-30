import { Component } from "react";

class Square extends Component{
    render(){
        return(
            <button onClick={() => this.props.onClick()} 
                style={{
                    height:'50px',
                    width:'50px',
                }}>
                {this.props.value}
            </button>
        )
    }
}
export default Square;