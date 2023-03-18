import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import React from 'react'
import Header from './components/Header'
import RestaurantNavBar from './components/RestaurantNavBar'
import Title from './components/Title'
import Rating from './components/Rating'
import Description from './components/Description'
import Images from './components/Images'
import Reviews from './components/Reviews'
import ReservationCard from './components/ReservationCard'

// takes a slug as prop
const RestaurantDetails = () => {
  return (
    <>
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Title />
          <Rating />
          <Description />
          <Images />
          <Reviews />
        </div>
        <div className="w-[27%] relative text-reg mb-10">
          <ReservationCard />
        </div>
    </>
  )
}

export default RestaurantDetails
