import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#fffceb",
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#fffceb",
  ]);

  return (
    <section className="homeCat">
      <div className="container">
        <h3 class="mb-3 hd">Categorias</h3>

        <Swiper
          slidesPerView={10}
          spaceBetween={8}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation]}
          className="mySwiper"
        >
          {itemBg?.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  className="item text-center cursor"
                  style={{ background: item }}
                >
                  <img src="https://images.ctfassets.net/621t91s0mnkp/2vbnZLUXLPLAiyVgGOCbkA/75442a5b7cd2412268c1d50ed92faf20/car_q3_24_csfaces_babygirl.png?fm=webp&w=133" alt="logo"  />

                  <h6>Bebes chic</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;
