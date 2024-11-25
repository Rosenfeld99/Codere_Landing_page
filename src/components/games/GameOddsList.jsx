import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import useGames from '../../hooks/useGames';
import { useEffect, useState } from 'react';
import AddGameForm from './AddGameForm';

const GameOddsList = () => {

    const { gamesState, handleFetchGames, sortLocalList } = useGames()
    const [sortMethod, setSortMethod] = useState("Default");

    useEffect(() => {
        handleFetchGames()
    }, [])

    const handleSortChange = (method) => {
        setSortMethod(method);
        if (method !== "Default") {
            sortLocalList(method);
        }
    };

    return (
        <div className="">
            {/* Dropdown for Sorting */}
            <div className="mb-4">
                <select
                    value={sortMethod}
                    onChange={(e) => handleSortChange(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="date">Sort by Date</option>
                    <option value="A-Z">Sort by Name (A-Z)</option>
                    <option value="Z-A">Sort by Name (Z-A)</option>
                </select>
            </div>
            <Swiper
                spaceBetween={7}
                slidesPerView="auto"
                freeMode={true}
                className=' mt-12'
            >
                {gamesState?.localList?.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        style={{ width: 'fit-content' }} // Ensures slide size matches content
                    >
                        <div className="bg-[#E0E0E0] p-2 rounded-[10px] capitalize h-[120px] w-[231px] flex flex-col justify-between md:w-[394px] md:h-[183px]">
                            <div className="flex items-center justify-between text-sm md:text-lg font-semibold">
                                <div className="text-[#333F48]">World Cup 2022</div>
                                <div className="text-[#0056FE]">2º Tiempo 66'</div>
                            </div>
                            <div className="flex items-center py-1.5 justify-between text-[#333F48] text-sm md:text-lg font-semibold">
                                <div>Mexico</div>
                                <div className="flex items-center gap-3">
                                    <div className="hidden md:block">
                                        <img className='w-[39px] h-[39px] object-cover aspect-square rounded-full overflow-hidden' src="https://th.bing.com/th/id/R.0737629c397c86c1bb392066a06ba31a?rik=KGu3D5DE%2fWhhjw&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f1%2f17%2fFlag_of_Mexico.png&ehk=MAXespfiLeO3ZBPldQ3%2fNDkCjzGo7hljFBd3yKgqLTY%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                    </div>
                                    <div className="text-[#0056FE] flex items-center gap-1 justify-center">
                                        <span>2</span>
                                        <span>-</span>
                                        <span>2</span>
                                    </div>
                                    <div className="hidden md:block">
                                        <img className='w-[39px] h-[39px] object-cover aspect-square rounded-full overflow-hidden' src="https://th.bing.com/th/id/R.37dab64ca03b86f07e4d3e691f2fef56?rik=b1gJcn2UCOzyKA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fitYcVwJ.png&ehk=KZCwhnmaKj2ZAzZl3cg1wGFc3U7QMzhSFVt4DGqOFLE%3d&risl=&pid=ImgRaw&r=0" alt="" />
                                    </div>
                                </div>
                                <div className="text-[#333F48]">Argentina</div>
                            </div>
                            <div className="flex items-center gap-3">
                                {item?.games?.map((game, j) => (
                                    <div
                                        key={j}
                                        className="bg-[#FFFFFF] cursor-pointer rounded-[4px] flex items-center justify-center w-full p-2 md:p-3 flex-col text-sm md:text-lg font-semibold"
                                    >
                                        <div className="text-[#8A8A8A]">{game?.name === "X" ? game?.name : j == 0 ? j + 1 : j}</div>
                                        <div>{game?.odd}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="mt-4">
                <AddGameForm />
            </div>
        </div>
    );
};

export default GameOddsList;
