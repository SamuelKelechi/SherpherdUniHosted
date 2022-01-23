import React from 'react'
import Facts from '../Home/Facts/Facts'
import HeroSection from '../Home/HeroSection/HeroSection'
import Allcom from '../Home/LearningComp/MyOwn/Allcom'
import QuickStart from '../Home/InterestComp/QuickStart'
import AreaStudy from '../Home/InterestComp/AreaStudy'
import GalleryFlip from '../Home/Gallery/GaleryFlip'
import Slider from "./SliderCom/SliderCom"



function Home() {
    return (
        <>
            <HeroSection />
            <br/>
            <Allcom />
            <QuickStart />
            <AreaStudy />
            <Slider/>
            <Facts />
            <GalleryFlip />
            
        </>
    )
}

export default Home
