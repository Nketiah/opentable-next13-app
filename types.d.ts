import { PrismaClient, Cuisine, Location, PRICE } from '@prisma/client'


type RestaurantType = {
    id: number
    name: string
    main_image: string
    cuisine: Cuisine
    slug: string
    location: Location
    price: PRICE
}

type SingleRestaurant = {
    id: number;
    name: string;
    slug: string;
    images: string[];
    description: string;
}