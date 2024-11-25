import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import PageNotFoud from '../pages/PageNotFoud'

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path='*' element={<PageNotFoud />} />
        </Routes>
    )
}

export default AppRoutes