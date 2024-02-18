// import React, { Component } from 'react'

// export class Event extends Component {
//     constructor(props) {
//       super(props)
//       this.state = {value: ""}
//       this.updateSubmit = this.updateSubmit.bind(this)
//       this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(e){
//         this.setState({value: e.target.value})

//    }
//     updateSubmit(e){
//         alert(`You have select ${this.state.value}`)
//         e.preventDefault()
//     }

//   render() {
//     return (
//        <div>
//         <form  onSubmit={this.updateSubmit}>
//              <select onChange={this.handleChange}>
//                 <option value="car">Car</option>
//                 <option value="bike">Bike</option>
//                 <option value="cycle">Cycle</option>
//              </select>
//              <input type="submit"  />
//         </form>
//        </div>
//     )
//   }
// }

// export default Event


import React, { useRef } from 'react'

function Event() {
    let input = useRef(null)
    function hadleRef(){
        input.current.style.color = "red"
    }
  return (
    <div>
       <input type="text" ref={input}  />
       <button onClick={hadleRef}>Handle Input</button>
    </div>
  )
}

export default Event
