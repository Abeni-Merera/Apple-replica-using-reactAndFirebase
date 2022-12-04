import React from "react";
import { Link } from 'react-router-dom';

function UniAndMac() {
  return (
    <div className="container-fluid body-section">
      <div className="unicef-icon-text d-md-flex">
        <div className="unicef-icon col-md-4"></div>
        <div className="unicef-text col-md-8 text-md-left">
          <Link className="unicef-text" to="link">
            Donate to support families affected by the war in Ukraine
          </Link>
        </div>
      </div>
      <div className="macbook-air">
        <div className="macbook-air-text col-md-12">
          <h1 className="font-weight-bold">MacBook Air</h1>
          <h3 className="super-air-m2"></h3>
          <p className="h6 text-muted">Available next month</p>
          <ul className="list-inline">
            <li className="list-inline-item pr-1">
              <Link to="list">Learn more</Link>
            </li>
            <li className="list-inline-item pl-2">
              <Link to="view">View pricing</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default UniAndMac;
