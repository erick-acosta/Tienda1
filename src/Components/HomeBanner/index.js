import React from "react";
import Slider from "react-slick";

const HomeBanner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1800,
  };

  return (
    <div className="container mt-3 ">
      <div className="HomeBannerSection">

      
        <Slider {...settings}>
          <div className="item">
            <img
              src="https://images.ctfassets.net/621t91s0mnkp/9PUgOgFb9tLyYcIEW34y3/b09132682f7699c5ea41b35a4c0285ed/car-061124-pajamashop-desktop.png?fm=webp&w=1366"
              className="w-100"
              alt="banner"
            />
          </div>
          <div className="item">
            <img
              src="https://images.ctfassets.net/621t91s0mnkp/2SOQBGMWl5hdUpTcm9gq0s/c010de3c6835c42554ec3cf981aebd3f/car-091324-birthdaysale-fleecePJs-desktop.png?fm=webp&w=1366"
              className="w-100"
              alt="banner"
            />
          </div>
          <div className="item">
            <img
              src="https://www.gerberchildrenswear.com/cdn/shop/files/CollectionpageBanner-SAS-3_1920x.jpg?v=1726243129"
              className="w-100"
              alt="banner"
            />
          </div>
          <div className="item">
            <img
              src="https://images.ctfassets.net/621t91s0mnkp/2SOQBGMWl5hdUpTcm9gq0s/c010de3c6835c42554ec3cf981aebd3f/car-091324-birthdaysale-fleecePJs-desktop.png?fm=webp&w=1366"
              className="w-100"
              alt="banner"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
