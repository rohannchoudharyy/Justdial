import React from 'react'
import SearchSec from '../../Components/SearchSec/SearchSec'
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories/Categories'
import ServicesSection from '../../Components/ServicesSection/ServicesSection'
import Bills from '../../Components/Bills/Bills'
import Swiper from '../../Components/Swiper/Swiper'

function Home() {
  return (
    <>
    <SearchSec />
    <Slider />
    <Categories />
    <ServicesSection />
    <Bills />
    <Swiper />
    <Bills />
    </>
  )
}

export default Home