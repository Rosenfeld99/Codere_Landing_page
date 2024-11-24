import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const GameOddsList = () => {
    return (
        <Swiper
            spaceBetween={7} 
            slidesPerView="auto"
            freeMode={true} 
            className=' mt-12'
        >
            {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide
                    key={index}
                    style={{ width: 'fit-content' }} // Ensures slide size matches content
                >
                    <div className="bg-[#E0E0E0] p-2 rounded-[10px] capitalize h-[120px] w-[231px] flex flex-col justify-between md:w-[394px] md:h-[183px]">
                        <div className="flex items-center justify-between text-sm md:text-lg font-semibold">
                            <div className="text-[#333F48]">Text {index + 1}</div>
                            <div className="text-[#0056FE]">Details</div>
                        </div>
                        <div className="flex items-center py-1.5 justify-between text-[#333F48] text-sm md:text-lg font-semibold">
                            <div>Text</div>
                            <div className="flex items-center gap-3">
                                <div className="w-[39px] hidden md:block rounded-full overflow-hidden">
                                    <img src="src/assets/PTPharaohsDaughter_Square.jpg" alt="" />
                                </div>
                                <div className="text-[#0056FE] flex items-center gap-1 justify-center">
                                    <span>2</span>
                                    <span>-</span>
                                    <span>2</span>
                                </div>
                                <div className="w-[39px] hidden md:block rounded-full overflow-hidden">
                                    <img src="src/assets/PTPharaohsDaughter_Square.jpg" alt="" />
                                </div>
                            </div>
                            <div className="text-[#333F48]">Text</div>
                        </div>
                        <div className="flex items-center gap-3">
                            {[0, 1, 2].map((item, j) => (
                                <div
                                    key={j}
                                    className="bg-[#FFFFFF] rounded-[4px] flex items-center justify-center w-full p-2 md:p-3 flex-col text-sm md:text-lg font-semibold"
                                >
                                    <div className="text-[#8A8A8A]">1</div>
                                    <div>11,22</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GameOddsList;
