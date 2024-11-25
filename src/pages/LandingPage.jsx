import React from 'react'
import MainHeader from '../components/headers/MainHeader'
import Carousel from '../components/carousel/Carousel'
import GameOddsList from '../components/games/GameOddsList'
import CasinoOption from '../components/Casino/CasinoOption'
import CategoriesCards from '../components/categories/CategoriesCards'

const LandingPage = () => {
    return (
        <div className='bg-[#252A30] min-h-screen pb-28'>
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
                
                {/* Categories list of cards*/}
                <CategoriesCards/>
            </div>
        </div>
    )
}

export default LandingPage