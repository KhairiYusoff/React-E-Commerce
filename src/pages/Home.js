import React from 'react'
import Annoucements from '../components/Annoucements'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'



const Home = () => {
    return (
        <div>
            <Annoucements />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />

        </div>
    )
}

export default Home