import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation  } from "swiper/modules";
import ProductItem from '../../../Components/ProductItem';


const RelatedProducts = (props) => {
    return(
        <div className="related-products">
        <div className="d-flex align-items-center mt-3">
            <div className="info w-75">
                <h3 className="mb-0 hd">{props.title}</h3>
                
            </div>
            
        </div>
 
            <div className="product_row w-100 mt-2">
            <Swiper
                slidesPerView={6}
                spaceBetween={0}
                navigation={true}
                slidesPerGroup={3}
                modules={[Navigation]}
                className="mySwiper"
      >


                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductItem/>
                        </SwiperSlide>



            </Swiper>
            </div>
            </div>
    )
}


export default RelatedProducts;