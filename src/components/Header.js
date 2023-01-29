import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="main">
            <div className="logo-block">
              <Link to="/">
                <img src="images/logo.png" alt="" />
              </Link>
            </div>
            <div className="nav">
              <ul>
                <li>
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Stairlifts</Link>
                </li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Grants</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/" className="last">
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- nav end --> */}
          </div>
          {/* <!-- main end --> */}
        </div>
        {/* <!-- container end --> */}
      </div>

      <div className="search">
        <div className="container">
          <div className="main">
            <div className="dropdown">
              <button onClick={window.myFunction} className="dropbtn">
                <div className="mobile">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line last"></div>
                </div>
                All Categories<i className="bx bx-chevron-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <Link to="/">menu 1</Link>
                <Link to="/">menu 2</Link>
                <Link to="/">menu 3</Link>
                <Link to="/">menu 4</Link>
                <Link to="/">menu 5</Link>
                <Link to="/">menu 6</Link>
                <Link to="/">menu 7</Link>
                <Link to="/">menu 8</Link>
                <Link to="/">menu 9</Link>
                <Link to="/">menu 10</Link>
              </div>
            </div>

            <div className="input-group">
              <input
                type="text"
                placeholder="Search for products"
                className="form-control"
              />
              <input type="button" value="" className="btn" />
            </div>

            <div className="right">
              <p>€ 0.00</p>
              <p>0 Items</p>
              <Link to="/">
                <img src="images/bag.png" alt="" />
              </Link>
            </div>
          </div>
          {/* <!-- main end --> */}
        </div>
        {/* <!-- container end --> */}
      </div>
    </div>
  );
}

export default Header;
