import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const Carousel = () => {
    return (
        <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            loop={true} 
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 3500, // 3.5 seconds per slide
                disableOnInteraction: false,
            }}
            className="bg-[#252A30] relative select-none w-full"
        >
            <SwiperSlide>
                <div>
                    <img
                        className="md:hidden"
                        src="src/assets/CO-SegmentedInicio-XSELL-Mobile.jpg"
                        alt="Segmented Inicio XSELL Mobile"
                        loading="lazy"
                    />
                    <img
                        className="hidden md:block"
                        src="src/assets/CO-SegmentedInicio-XSELL-Desktop.jpg"
                        alt="Segmented Inicio XSELL Desktop"
                        loading="lazy"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img
                        className="md:hidden"
                        src="src/assets/CO-SegmentedInicio-Casino-Mobile.jpg"
                        alt="Segmented Inicio Casino Mobile"
                        loading="lazy"
                    />
                    <img
                        className="hidden md:block"
                        src="src/assets/CO-SegmentedInicio-Casino-Desktop.jpg"
                        alt="Segmented Inicio Casino Desktop"
                        loading="lazy"
                    />
                </div>
            </SwiperSlide>
            <div className="absolute bottom-10 z-30 md:left-[24.5vw] text-[#333F48] w-full mx-auto h-full flex items-end justify-center md:justify-start ">
                <button className='bg-[#80bf31] flex items-center justify-center font-semibold hover:scale-110 text-2xl duration-150 px-8 py-2 rounded-[25px]'>Acceder</button>
            </div>
        </Swiper>
    );
};

export default Carousel;
