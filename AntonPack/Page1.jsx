import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Img } from '../Components/Img'
import { Cards } from '../Components/Cards'
import { Footer } from '../Components/Footer'

export const Page1 = () => {
  return (
    <div>
        <Navbar/>
        <Img/>
        <Cards/>
        <Footer/>
    </div>
  )
}
