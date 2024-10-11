import HomeBanner from "../../Components/HomeBanner";
import banner3 from "../../assets/img/banner3.png";
import banner4 from "../../assets/img/banner4.png";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import newsLetterImg from "../../assets/img/coupon.png";
import { IoMailOutline } from "react-icons/io5";

import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "@mui/material/Button";

import "swiper/css";
import "swiper/css/navigation";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} className="cursor w-100" alt="banner" />
                </div>

                <div className="banner mt-4">
                  <img src={banner2} className="cursor w-100" alt="banner" />
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-sml mb-0">
                    Los Productos mas vendidos no te pierdas nuestras
                    promociones
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  Ver Más <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-5">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={2}
                  navigation={false}
                  slidesPerGroup={2}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>


                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>

                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>
           
              <div className="d-flex align-items-center mt-4 pt-1">
              <div className="info w-75">
                  <h3 className="mb-2 mt-5 hd">Productos Mas Visitados</h3>
                  <p className="text-sml mb-0">
                    Los Productos mas vendidos no te pierdas nuestras
                    promociones
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  Ver Más <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row productRow2 w-100 mt-4 d-flex">
                
                  
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    
                  
                
                </div>
              

                
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner ">
                  <img src={banner3} className="cursor" alt="banner" />
                </div>

                <div className="banner">
                  <img src={banner4} className="cursor" alt="banner" />
                </div>
              </div>

              </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                Obnten un descuento de 5% por tu primera compra
              </p>
              <h3 className="text-white">
                Suscribete a nuestros boletines...{" "}
              </h3>
              <p className="text-light">
                Únete a nuestra suscripción por correo electrónico <br /> ahora
                para obtener actualizaciones sobre promociones y cupones
              </p>

              <form>
                <IoMailOutline />
                <input type="text" placeholder="Tu Email" />
                <Button>Suscribete</Button>
              </form>
            </div>

            <div className="col-md-6">
              <img src={newsLetterImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
