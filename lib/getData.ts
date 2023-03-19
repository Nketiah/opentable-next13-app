import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export const getRestaurants = async () =>{
  const restaurants = await prisma.restaurant.findMany({select: {
    id: true,
    name: true,
    main_image: true,
    location: true,
    cuisine: true,
    slug: true,
    price: true,
  }})
  
  return restaurants
}


export const getRestaurantBySlug = async (slug: string) => {
    const restaurant = await prisma.restaurant.findUnique({where:{slug},
    select:{
        id: true,
        name: true,
        images: true,
        description: true,
        slug: true
    }})
    if(!restaurant){
        throw new Error("")
    }
    return restaurant
}