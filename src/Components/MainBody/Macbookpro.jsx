import React from 'react'
import Macbook from '../../commonResource/images/icons/WhiteSupper_small (1).png'
import {Link} from 'react-router-dom'

function Macbookpro() {
  return (
    <div className="MacBook-Pro-13 BackGround-3 container-fluid body-section">
        <div className="text-center pt-5">
          <h1 className="font-weight-bold">MacBook Pro 13"</h1>
          <img src={Macbook} alt="#" />
          <p className="text-muted">Available starting 6.24</p>
          <ul className="list-inline Learn-More">
            <li className="list-inline-item"><Link to="#">Learn more</Link></li>
            <li className="list-inline-item"><Link to="#">Order now</Link></li>
          </ul>
        </div>
      </div>
  )
}

export default Macbookpro