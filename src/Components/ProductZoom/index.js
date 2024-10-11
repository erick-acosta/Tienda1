import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";
import disfras1 from '../../assets/img/disfras2.png'
import disfras2 from '../../assets/img/disfras2.1.png'
import disfras3 from '../../assets/img/disfras2.2.png'
import disfras4 from '../../assets/img/disfras2.3.png'




const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

   
    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <div className="productZoom">
            <div className="productZoom position-relative">
                <div className="badge badge-primary">23%</div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    navigation={false}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="zoomSliderBig"
                    ref={zoomSliderBig}
                >
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src={disfras1} alt="producto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src={disfras2}  alt="producto"/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src={disfras3} alt="producto" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src={disfras4} alt="producto" />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={2}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="zoomSlider"
                    ref={zoomSlider}
                >
                    <SwiperSlide>
                        <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                            <img src={disfras1} className="w-100" onClick={() => goto(0)} alt="producto" />
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                            <img src={disfras2} className="w-100" onClick={() => goto(1)} alt="producto" />
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex === 2 && 'item_active'}`}>
                            <img src={disfras3} className="w-100" onClick={() => goto(2)} alt="producto" />
                        </div>
                       
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex === 3 && 'item_active'}`}>
                            <img src={disfras4} className="w-100" onClick={() => goto(3)} alt="producto" />
                        </div>
                       
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}






export default ProductZoom
