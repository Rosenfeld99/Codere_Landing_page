import React from 'react'

const CasinoOption = () => {

    const bestOption = [
        "src/assets/PTPharaohsDaughter_Square.jpg",
        "src/assets/PTLiveQuantumRoulette_Square.jpg",
        "src/assets/PRPAviator_Square.jpg",
        "src/assets/PTPremiumBlackjack_Square.jpg",

    ]

    return (
        <div className='bg-[#000000] rounded-[25px] p-2 mt-7'>
            <h2 className=' text-[#79C000] py-5 text-2xl font-semibold text-center'>MEJOR JUEGOS DE CASINO</h2>
            <div className=" grid grid-cols-2 md:flex items-center gap-4 md:gap-7 justify-between">
                {bestOption.map((item, index) => (
                    <div key={index} className="w-full h-full">
                        <img className=' w-full h-full rounded-[25px]' src={item} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CasinoOption