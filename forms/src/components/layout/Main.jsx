import { Outlet } from "react-router-dom"
import React from "react"
import Header from "../header/Header"
import './main.css'
import Footer from "../footer/Footer"

function Main() {

    return (

        <div>
            <Header />
                <Outlet />
            <Footer />
        </div>
    )



}


export default Main