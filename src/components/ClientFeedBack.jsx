import React from "react";

//Owl Carousel Libraries and Module
import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

//Owl Carousel Settings
const options = {
  nav: true,
  dots: true,
  dotsEach: true,
  loop: true,
  autoplay: true,
  mouseDrag: false,
  autoplayTimeout: 3000,
  responsiveClass: true,
  // navigation: false,
  singleItem: true,
  transitionStyle: "fade",
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    320: {
      items: 1,
      nav: false,
    },
    414: {
      items: 1,
      nav: false,
    },
    576: {
      items: 1,
      nav: false,
    },
    768: {
      items: 3,
      nav: false,
      loop: true,
    },

    992: {
      items: 3,
      nav: false,
      loop: true,
    },

    1199: {
      items: 3,
      nav: false,
      loop: true,
    },

    1300: {
      items: 3,
      nav: false,
      loop: true,
    },

    1400: {
      items: 3,
      nav: false,
      loop: true,
    },

    1920: {
      items: 3,
      nav: false,
      loop: true,
    },
  },
};
class ClientFeedBack extends React.Component {
  render() {
    return (
      <div class="client">
        <div class="container">
          <h4>What Client Say</h4>

          <div class="slider">
            <OwlCarousel
              className="owl-carousel owl-theme"
              {...options}
              id="blog-demo2"
            >
              <div class="item">
                <img src="images/coma.png" class="coma" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Fusce sed auctor tortor. Sed tempor maxi mus lacus, non tempus
                  magna. Aliquam sit amet ligula at felis ali quam viverra ut
                  sed elit. Pellen tesque convallis, ex vel laoreet hendrerit,{" "}
                </p>

                <div class="avter">
                  <img src="images/client.png" alt="" />
                  <h5>
                    Jessy Thomas3 <span>CEO</span>
                  </h5>
                </div>
              </div>

              <div class="item">
                <img src="images/coma.png" class="coma" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Fusce sed auctor tortor. Sed tempor maxi mus lacus, non tempus
                  magna. Aliquam sit amet ligula at felis ali quam viverra ut
                  sed elit. Pellen tesque convallis, ex vel laoreet hendrerit,{" "}
                </p>

                <div class="avter">
                  <img src="images/client.png" alt="" />
                  <h5>
                    Jessy Thomas3 <span>CEO</span>
                  </h5>
                </div>
              </div>

              <div class="item">
                <img src="images/coma.png" class="coma" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, con sectetur adipiscing elit.
                  Fusce sed auctor tortor. Sed tempor maxi mus lacus, non tempus
                  magna. Aliquam sit amet ligula at felis ali quam viverra ut
                  sed elit. Pellen tesque convallis, ex vel laoreet hendrerit,{" "}
                </p>

                <div class="avter">
                  <img src="images/client.png" alt="" />
                  <h5>
                    Jessy Thomas3 <span>CEO</span>
                  </h5>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        {/* <!-- container end --> */}
      </div>
    );
  }
}

export default ClientFeedBack;
