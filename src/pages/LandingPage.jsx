import React from 'react'
import MainHeader from '../components/headers/MainHeader'
import Carousel from '../components/carousel/Carousel'
import GameOddsList from '../components/games/GameOddsList'
import CasinoOption from '../components/Casino/CasinoOption'
import CatList from '../components/categories/CatList'

const LandingPage = () => {
    return (
        <div className='bg-[#252A30] min-h-screen'>
            {/* Header */}
            <MainHeader />

            {/* Hero Section */}
            <Carousel />

            {/* Container */}
            <div className="max-w-[1930px] mx-auto p-3 md:p-5 ">

                {/* GAmes Odds */}
                <GameOddsList />

                {/* MEJOR JUEGOS DE CASINO */}
                <CasinoOption/>
                
                {/* Categories list */}
                <CatList/>
            </div>
        </div>
    )
}

export default LandingPage