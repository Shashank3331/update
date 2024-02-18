import { Component } from "react";

export default class StateInClass extends Component{
    constructor(props){
        super(props);
        this.state = ["Aashish","Vimal"]
    }
    render(){
        return(
            <div>
                 <h2>{this.state[1]}</h2>
            </div>
        )
    }
}
