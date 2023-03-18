import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import RestaurantNavBar from '../components/RestaurantNavBar'
import Menu from '../components/Menu'

// takes a slug
const RestaurantMenu = () => {
  return (
    <> 
        <div className="bg-white w-[100%] rounded p-3 shadow">
          <RestaurantNavBar />
          <Menu />
        </div>
    </>
  )
}

export default RestaurantMenu
