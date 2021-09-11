import React from 'react'
import Tracker from './Tracker'
import Propping from './Propping'
import Chiding from './Chiding'
function App() {
  return (
    <div>
      <h1>Tracker table</h1>
      <Tracker />
      <br />
      <hr />
    <h3>Note: <u>Propping has Childing and vice versa...</u></h3>
    <Propping />
    <h3>This is chiding</h3>
    <Chiding />
    </div>
  )
}

export default App
