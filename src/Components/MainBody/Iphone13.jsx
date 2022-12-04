import React from 'react'
import { Link } from 'react-router-dom'

function Iphone13() {
  return (
    <div className="iPhone-13 BackGround container-fluid body-section">
    <div className="text-center pt-5">
      <h1 className="font-weight-bold">iPhone 13</h1>
      <p >Your new superpower.</p>
      <ul className="list-inline Learn-More">
        <li className="list-inline-item"><Link to="list">Learn more</Link></li>
        <li className="list-inline-item"><Link to="buy">Buy</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Iphone13