import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DETAILS_PAGE, ERROR_PAGE, HOME_PAGE, POKEDEX_PAGE } from '../constants/routeConstants'
import DetailsPage from '../pages/detailsPage/DetailsPage'
import ErrorPage from '../pages/errorPage/ErrorPage'
import HomePage from '../pages/homePage/HomePage'
import PokedexPage from '../pages/pokedexPage/PokedexPage'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path={HOME_PAGE} element={<HomePage />}/>
                <Route path={POKEDEX_PAGE} element={<PokedexPage />}/>
                <Route path={DETAILS_PAGE} element={<DetailsPage/>}/>
                <Route path={ERROR_PAGE} element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
