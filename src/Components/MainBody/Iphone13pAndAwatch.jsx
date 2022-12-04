import React from 'react'
import Applewatch from '../../commonResource/images/icons/promo_logo_watch_medium.png'
import {Link} from 'react-router-dom'
function Iphone13pAndAwatch() {
    return (
        <div className="row container-fluid body-section">
            <div className="iPhone-13-Pro BackGround text-center pt-2 col-md">
                <h3 className="font-weight-bold pt-5">iPhone 13 Pro</h3>
                <p className="">Oh. So. Pro</p>
                <ul className="list-inline Learn-More">
                    <li className="list-inline-item"><Link to="list">Learn more</Link></li>
                    <li className="list-inline-item"><Link to="buy">Buy</Link></li>
                </ul>
            </div>
            <div className="Apple-Watch-series BackGround text-center pt-5 col-md">
                <img
                    src={Applewatch}
                    alt="Apple Watch"
                />
                <p className="">It's our largest display yet.</p>
                <ul className="list-inline Learn-More">
                    <li className="list-inline-item"><Link to="#">Learn more</Link></li>
                    <li className="list-inline-item"><Link to="#">Buy</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Iphone13pAndAwatch