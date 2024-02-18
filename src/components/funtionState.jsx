import React, { useState } from 'react'

function FuntionState() {
    const [username,setUsername] = useState(["xyz","abc"])
  return (
    <div>
        <h1>{username[1]}</h1>
    </div>
  )
}

export default FuntionState
