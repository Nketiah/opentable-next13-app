import Header from './components/Header'
import Card from './components/Card'
import { getRestaurants } from "../lib/getData"
import { RestaurantType } from '@/types'


export default async function Home() {

const restaurantsData: Promise<RestaurantType[]> = getRestaurants()
const restaurants = await restaurantsData

  return (
    <>
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {restaurants.map((restaurant) => (
            <Card restaurant={restaurant} />
          ))}
        </div>
      </main>
    </>
  )
}
