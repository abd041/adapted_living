import React from "react";
import { Link } from "react-router-dom";
function Featured() {
  return (
    <div>
      <div className="products">
        <div className="container">
          <h4>Featured Products</h4>

          <div className="main">
            <div className="item1">
              <img src="images/producrs1.png" alt="" />
              <p>Stainless Steel Curved Grab Rail 19</p>
              <div className="text">
                <h6>€35.00</h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>

            <div className="item1 item2">
              <img src="images/producrs2.png" alt="" />
              <p>Woburn Community Profiling Bed</p>
              <div className="text">
                <h6>€00.00</h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>

            <div className="item1 item3">
              <img src="images/producrs3.png" alt="" />
              <p>Rubber Threshold Ramps</p>
              <div className="text">
                <h6>€138.00</h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>

            <div className="item1 item4">
              <img src="images/producrs4.png" alt="" />
              <p>Anti Spill Mug</p>
              <div className="text">
                <h6>€35.00</h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>

            <div className="item1 item5">
              <img src="images/producrs5.png" alt="" />
              <p>Drive Folding Scooter</p>
              <div className="text">
                <h6>
                  €2,949.00 <del>€2,999.00</del>
                </h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>

            <div className="item1 item6">
              <img src="images/producrs6.png" alt="" />
              <p>Freestyle Tri Walker</p>
              <div className="text">
                <h6>€115.00</h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>

            <div className="item1 item7">
              <img src="images/producrs7.png" alt="" />
              <p>Heddon Riser Recliner (Dual Motor)</p>
              <div className="text">
                <h6>
                  €925.00 <del>€985.00</del>
                </h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>

            <div className="item1 item8">
              <img src="images/producrs8.png" alt="" />
              <p>Modular Foam Pressure Care...</p>
              <div className="text">
                <h6>
                  €55.00 <del>€65.00</del>
                </h6>
                <Link to="/" className="btn">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- container end --> */}
      </div>
    </div>
  );
}

export default Featured;
