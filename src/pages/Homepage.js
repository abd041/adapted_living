import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import Featured from "../components/Featured";
import ClientFeedBack from "../components/ClientFeedBack";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <div>
      <div className="mo-menu">
        <div className="container">
          <div className="main">
            <div className="logo-block">
              <Link to="/">
                <img src="images/logo.png" alt="" />
              </Link>
            </div>
            <div className="mnu">
              <button
                id="first"
                className="btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon mid"></span>
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="menus">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <HeroSlider />
      <div className="covid-note">
        <div className="container">
          <h6>
            Please note: Due to the present Coronavirus / COVID–19 outbreak we
            are working with restricted access & working conditions, but we are
            still open. We will supply & deliver products, items, services etc.
          </h6>
        </div>
        {/* <!-- container end --> */}
      </div>

      <div className="prees">
        <div className="container">
          <h4>Press Here To Shop Now For All Mobility Products</h4>

          <div className="main">
            <div className="item">
              <img src="images/prees1.png" alt="" />
            </div>

            <div className="item">
              <img src="images/prees2.png" alt="" />
            </div>

            <div className="item">
              <img src="images/prees3.png" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- container end --> */}
      </div>
      <Featured />
      <div class="install">
        <div class="container">
          <div class="text">
            <p class="one">
              Adapted Living specialise in the supply and installation of
              <strong>Stairlifts</strong> in Ireland, offering a safe and
              reliable way of overcoming the problem of getting up and down
              stairs.
            </p>
            <p class="two">
              We are also a leading supplier of{" "}
              <span>Mobility Scooters , Riser Recliner Chairs,</span>
              and many more mobility products to help make life easy
            </p>
          </div>
          {/* <!-- text end --> */}
        </div>
        {/* <!-- container end --> */}
      </div>
      <ClientFeedBack />
      <Footer />
      <button onClick={window.topFunction} id="myBtn" title="Go to top">
        <i class="bx bx-up-arrow-alt"></i>
      </button>
    </div>
  );
}

export default Homepage;
