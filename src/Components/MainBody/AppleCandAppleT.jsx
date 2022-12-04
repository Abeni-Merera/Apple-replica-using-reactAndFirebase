import React from 'react'
import AppleCard from '../../commonResource/images/icons/logo_Apple-card_small.png'

import AppleTv from '../../commonResource/images/icons/logo-Apple_small (1).png'
import PromoCha from '../../commonResource/images/icons/logo_promo_cha_cha_small.png'
import { Link } from 'react-router-dom'

function AppleCandAppleT() {
  return (
    <div className="row mt-md-1 container-fluid body-section">
      <div className="Apple-Card BackGround text-center mb-3 ml-md-3 pb-3 col-md">
        <img
          className="pt-5"
          src={AppleCard}
          alt="Apple card logo"
        />
        <p className="pt-2">
          Get up to 3% Daily Cash back <br />
          with every purchase.
        </p>

        <ul className="list-inline Learn-More">
          <li className="list-inline-item"><Link to="#">Learn more</Link></li>
          <li className="list-inline-item"><Link to="#">Apply now</Link></li>
        </ul>
      </div>

      <div className="Apple-TV BackGround text-center mb-3 ml-md-3 col-md">
        <div className="pt-5">
          <img
            src={AppleTv}
            alt="Apple Tv log"
          />
        </div>

        <div className="pt-5">
          <img src={PromoCha} alt="promo Cha Cha" />
          <ul className="pt-2 list-inline stream-link pt-3">
            <li className="list-inline-item">
              <Link to="#">Stream now</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AppleCandAppleT