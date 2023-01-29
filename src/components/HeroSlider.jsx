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
      items: 1,
      nav: false,
      loop: true,
    },

    992: {
      items: 1,
      nav: false,
      loop: true,
    },

    1199: {
      items: 1,
      nav: false,
      loop: true,
    },

    1300: {
      items: 1,
      nav: false,
      loop: true,
    },

    1400: {
      items: 1,
      nav: false,
      loop: true,
    },

    1920: {
      items: 1,
      nav: false,
      loop: true,
    },
  },
};
class HeroSlider extends React.Component {
  render() {
    return (
      <div className="slider banner">
        <OwlCarousel
          className="owl-carousel owl-theme"
          {...options}
          id="blog-demo"
        >
          <div className="item">
            <div className="container">
              <div className="desc">
                <h1>
                  Stairlifts <span>Experts</span>
                </h1>
                <p>
                  Call Now To Discuss With The Experts on a full Range of
                  Stairlifts with Over 20 years Experience
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="desc">
                <h1>
                  Stairlifts <span>Experts</span>
                </h1>
                <p>
                  Call Now To Discuss With The Experts on a full Range of
                  Stairlifts with Over 20 years Experience
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <div className="desc">
                <h1>
                  Stairlifts <span>Experts</span>
                </h1>
                <p>
                  Call Now To Discuss With The Experts on a full Range of
                  Stairlifts with Over 20 years Experience
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    );
  }
}

export default HeroSlider;
