// import React, { Component } from 'react'

// export class Lifecycle extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//         count: 0
//       }
//     }
//     componentDidMount(){
//         alert("Component created")
//     }
//     componentDidUpdate(){
//         console.log("Updated")
//     }
//     componentWillUnmount(){
//         console.log('Element removed')
//     }
    
//   render() {
//     return (
//       <div>
//         <h2>{this.state.count}</h2>
//         <button onClick={()=>this.setState({count: this.state.count+1})}>plus</button>
//         <button onClick={()=>this.setState({count: this.state.count-1})}>minus</button>
//       </div>
//     )
//   }
// }

// export default Lifecycle


import React, { Component } from 'react'

export class Lifecycle extends Component {
   constructor(props) {
     super(props)
     this.state = {
        name: "shashank"
     }
   }
   componentWillUnmount(){
    console.log('element removed');
   }
   
   handle(){
    this.setState({
        display: false
    })
   }
  render() {
    return (
      <div>
           {this.state.name}
           <button onClick={this.handle.bind(this)}>somthing</button>
      </div>
    )
  }
}

export default Lifecycle