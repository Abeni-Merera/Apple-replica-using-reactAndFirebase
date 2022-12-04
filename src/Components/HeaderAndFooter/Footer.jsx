import React, {useEffect} from 'react'
import logoFlag from '../../commonResource/images/icons/USA-flag.png'
import { Link } from 'react-router-dom'
import $ from 'jquery'

function Footer() {
    useEffect(() => {
      if ($(window).width() <= 768) {
        $(".footer-links-wrapper").addClass("someClass");
      } else {
        $(".footer-links-wrapper").removeClass("someClass");
      }
      $(window).on("resize", function (event) {
        if ($(window).width() <= 768) {
          $(".footer-links-wrapper").addClass("someClass");
        } else {
          $(".footer-links-wrapper").removeClass("someClass");
          $(".footer-links-wrapper ul").show();
        }
      });
  
      // Footer collapse functionality
      $(document).on("click", ".someClass h3", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
      });
    }, []);
    
  return ( 
<footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
            promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
            in good condition. Additional trade‑in values require purchase of a
            new iPhone, subject to availability and limits. Must be at least 18.
            Apple or its trade-in partners reserve the right to refuse or limit
            any Trade In transaction for any reason. In‑store trade‑in requires
            presentation of a valid, government-issued photo ID (local law may
            require saving this information). Sales tax may be assessed on full
            value of new iPhone. Additional terms from Apple or Apple’s trade-in
            partners may apply. Monthly pricing: Available to qualified
            customers and requires 0% APR, 24-month installment loan with
            Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            terms are in the
            <Link to="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank">
              Customer Agreement</Link>. Additional iPhone Payments terms are
            <Link to="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
              here</Link>.
          </p>
          <p>
            2. Subscription required.<br /><br />
            Magic Keyboard sold separately.<br /><br />
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other <Link to="https://www.apple.com/promo/">terms </Link> apply.
          </p>
        </div>
        <div className="footer-links-wrapper row">
          <div className="links-wrapper-1 col-sm-12 col-md">
            <h3>Shop and Learn</h3>
            <ul>
              <li><Link to="mac">Mac</Link></li>
              <li><Link to="ipad">iPad</Link></li>
              <li><Link to="iphone">iPhone</Link></li>
              <li><Link to="watch">Watch</Link></li>
              <li><Link to="Tv">TV</Link></li>
              <li><Link to="musi">Music</Link></li>
              <li><Link to="APad">AirPods</Link></li>
              <li><Link to="Hpod">HomePod</Link></li>
              <li><Link to="IpodT">iPod touch</Link></li>
              <li><Link to="accessories">Accessories</Link></li>
              <li><Link to="giftC">Gift Cards</Link></li>
            </ul>
          </div>
          <div className="links-wrapper-2 col-sm-12 col-md">
            <h3>Services</h3>
            <ul>
              <li><Link to="music">Apple Music</Link></li>
              <li><Link to="AppleN">Apple News+</Link></li>
              <li><Link to="AppleT">Apple TV+</Link></li>
              <li><Link to="AppleAr">Apple Arcade</Link></li>
              <li><Link to="AppleC">Apple Card</Link></li>
              <li><Link to="icloud">iCloud</Link></li>
            </ul>
            <h3>Account</h3>
            <ul>
              <li><Link to="MYAI">Manage Your Apple ID</Link></li>
              <li><Link to="ASA">Apple Store Account</Link></li>
              <li><Link to="icloudlink">iCloud.com</Link></li>
            </ul>
          </div>
          <div className="links-wrapper-3 col-sm-12 col-md">
            <h3>Apple Store</h3>
            <ul>
              <li><Link to="#">Find a Store</Link></li>
              <li><Link to="#">Genius Bar</Link></li>
              <li><Link to="#">Today at Apple</Link></li>
              <li><Link to="#">Apple Camp</Link></li>
              <li><Link to="#">Field Trip</Link></li>
              <li><Link to="#">Apple Store App</Link></li>
              <li><Link to="#">Refurbished and Clearance</Link></li>
              <li><Link to="#">Financing</Link></li>
              <li><Link to="#">Apple Trade In</Link></li>
              <li><Link to="#">Order Status</Link></li>
              <li><Link to="#">Shopping Help</Link></li>
            </ul>
          </div>
      <div className="links-wrapper-4 col-sm-12 col-md">
            <h3>For Business</h3>
            <ul>
              <li><Link to="#">Apple and Business</Link></li>
              <li><Link to="#">Shop for Business</Link></li>
            </ul>
            <h3>For Education</h3>
            <ul>
              <li><Link to="#">Apple and Education</Link></li>
              <li><Link to="#">Shop for College</Link></li>
            </ul>
            <h3>For Healthcare</h3>
            <ul>
              <li><Link to="#">Manage Your Apple ID</Link></li>
              <li><Link to="#">Apple Store Account</Link></li>
              <li><Link to="#">iCloud.com</Link></li>
            </ul>
            <h3>For Government</h3>
            <ul>
              <li><Link to="#">Apple and Education</Link></li>
              <li><Link to="#">Shop for College</Link></li>
            </ul>
          </div>
          <div className="links-wrapper-5 col-sm-12 col-md">
            <h3>Apple Values</h3>
            <ul>
              <li><Link to="#">Find a Store</Link></li>
              <li><Link to="#">Genius Bar</Link></li>
              <li><Link to="#">Today at Apple</Link></li>
              <li><Link to="#">Apple Camp</Link></li>
              <li><Link to="#">Field Trip</Link></li>
              <li><Link to="#">Apple Store App</Link></li>
            </ul>
            <h3>About Apple</h3>
            <ul>
              <li><Link to="#">Find a Store</Link></li>
              <li><Link to="#">Genius Bar</Link></li>
              <li><Link to="#">Today at Apple</Link></li>
              <li><Link to="#">Apple Camp</Link></li>
              <li><Link to="#">Field Trip</Link></li>
              <li><Link to="#">Apple Store App</Link></li>
            </ul>
          </div>
        </div>
        <div className="my-apple-wrapper">
          More ways to shop: <Link to="#">Find an Apple Store</Link> or
          <Link to="#">other retailer</Link> near you. Or call 1-800-MY-APPLE.
        </div>
        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
            <ul>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">Sales and Refunds</Link></li>
              <li><Link to="#">Legal</Link></li>
              <li><Link to="#">Site Map</Link></li>
            </ul>
          </div>
          <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
            <div className="flag-wrapper">
              <img src={logoFlag} alt="#"/>
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
   
  )
}

export default Footer