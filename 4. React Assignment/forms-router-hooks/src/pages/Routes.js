import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import Home from "./Home"
import Login from "./Login"
import About from './About'
import Contact from './Contact'


export default function Index() {
    return (
        <BrowserRouter>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    )
}
