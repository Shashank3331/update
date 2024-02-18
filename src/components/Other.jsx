import React from 'react'
import {createPortal} from 'react-dom'
import Event from './Event'

function Other() {
  return (
     createPortal(
        <div>
            <h1>This is Other Element</h1>
            <Event/>
        </div>,
        document.getElementsByClassName('other-root')[0]
      )
  )
}

export default Other
