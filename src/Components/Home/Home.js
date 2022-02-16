import React from 'react'
import Facts from '../Home/Facts/Facts'
import HeroSection from '../Home/HeroSection/HeroSection'
import Allcom from '../Home/LearningComp/MyOwn/Allcom'
import QuickStart from '../Home/InterestComp/QuickStart'
import AreaStudy from '../Home/InterestComp/AreaStudy'
import GalleryFlip from '../Home/Gallery/GaleryFlip'
import Slider from "./SliderCom/SliderCom"
import VerCon from "../Home/VerCon/VerCon"
import Admini from "../Home/Administrator/Admini"
import Orna from "../Home/Order/Ornanogram"

function Home() {
    return (
        <>
            <HeroSection />
            <Allcom />
            <QuickStart />
            <VerCon />
            <AreaStudy />
            <Slider/>
            <Facts />
            <GalleryFlip />
            <Orna /> 
            <Admini /> 
        </>
    )
}

export default Home;
