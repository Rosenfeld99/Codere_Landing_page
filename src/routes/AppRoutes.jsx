import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import PageNotFoud from '../pages/PageNotFoud'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path='*' element={<PageNotFoud />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes