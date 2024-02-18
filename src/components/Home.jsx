import React from 'react'
import ClassState from './ClassState'
function Home(props) {
  return (
    <div>
      <h2>Hello world</h2>
      <img src={props.img} alt=""  width={150}/>
       <ClassState/>
    </div>
  )
}

export default Home
