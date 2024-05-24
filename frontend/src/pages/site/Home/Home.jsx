import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import MainContext from '../../../context/context'
import HeroSection from '../../../components/site/HeroSection/HeroSection'
import FreeSection from '../../../components/site/FreeSection/FreeSection'
import CollectionSection from '../../../components/site/CollectionSection/CollectionSection'
import CardsSection from '../../../components/site/CardsSection/CardsSection'

const Home = () => {
    const {data,setData} = useContext(MainContext)
    return (
    <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroSection/>
            <FreeSection/>
            <CollectionSection/>
            <CardsSection/>
    </>
    )
}

export default Home
        