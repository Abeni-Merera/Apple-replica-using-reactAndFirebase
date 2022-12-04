import React from 'react'

import IpadA from '../../commonResource/images/icons/promo_logo_ipadair_small.png'
import AppleFlogo from '../../commonResource/images/icons/logo_Apple-fitnesss_small.png'
import { Link } from 'react-router-dom'


function IpadAandAppleA() {
  return (
    <div className="row mt-md-3 container-fluid body-section">
      <div className="iPad-Air BackGround-3 text-center mb-3 pt-5 ml-md-3 col-md">
        <img
          className=""
          src={IpadA} alt="ipad Air"
        />
        <p>Light. Bright. full of might</p>

        <ul className="list-inline pt-1 Learn-More">
          <li className="list-inline-item"><Link to="#">Learn more</Link></li>
          <li className="list-inline-item"><Link to="#">Buy</Link></li>
        </ul>
      </div>
      <div className="Apple-Fitness BackGround-3 text-center ml-md-3 pt-5 col-md">
        <img
          src={AppleFlogo}
          alt="Apple fitness logo"
        />
        <p className="pt-1">
          New Artist Spotlight workouts<br />with music by katy perry.
        </p>
        <ul className="list-inline Yellow-link">
          <li className="list-inline-item Yellow-link-1">
            <Link to="#">See what's new</Link>
          </li>
          <li className="list-inline-item Yellow-link-2">
            <Link to="#">Try it free <sup>1</sup></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default IpadAandAppleA