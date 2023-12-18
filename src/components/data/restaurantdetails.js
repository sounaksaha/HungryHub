import FastFoodImg from '../../static/images/restaurantimages/fastfood.jpg';
import Pizza69Img from '../../static/images/restaurantimages/pizza69.jpg';
import ChineseCornerImg from '../../static/images/restaurantimages/chinesecorner.jpg';
import DownTownPizzaImg from '../../static/images/restaurantimages/downtownpizza.jpg';
import VanillaIceCreamImg from '../../static/images/restaurantimages/vanillaicecream.jpg';
import SatkarRestaurantImg from '../../static/images/restaurantimages/satkarrestaurant.jpg';
import PunjabiDhabaImg from '../../static/images/restaurantimages/punjabidhaba.jpg';
import FoodPlazaImg from '../../static/images/restaurantimages/foodplaza.jpg';
import { MealTypeOption, FoodCategory } from '../constants';


const restaurantDetails = [
    {
        id: 1000, img: FastFoodImg, name: 'The Fast Food', rating: 4.6, deliveryTime: 25,
        category: [FoodCategory.Pizza, FoodCategory.Burger],
        foodItems: [
            { id: 2001, price: 80 },
            { id: 2002, price: 280 },
            { id: 2021, price: 320 },
            { id: 2029, price: 100 },
            { id: 2036, price: 290 },
        ],
        mealType: [MealTypeOption.Veg],
        discount: 50
    },
    {
        id: 1001, img: Pizza69Img, name: 'Pizza 69', rating: 4.2, deliveryTime: 22,
        category: [FoodCategory.Pizza, FoodCategory.Burger,
        FoodCategory.Snacks, FoodCategory.Beverages],
        foodItems: [
            { id: 2001, price: 90 },
            { id: 2002, price: 260 },
            { id: 2004, price: 180 },
            { id: 2006, price: 110 },
            { id: 2007, price: 160 },
            { id: 2011, price: 140 },
            { id: 2014, price: 150 },
            { id: 2016, price: 190 },
            { id: 2021, price: 300 },
            { id: 2029, price: 120 },
            { id: 2036, price: 300 },
        ],
        mealType: [MealTypeOption.Veg],
        discount: 80
    },
    {
        id: 1002, img: PunjabiDhabaImg, name: 'Punjabi Dhaba', rating: 3.8, deliveryTime: 30,
        category: [FoodCategory.Lassi, FoodCategory.Paratha, FoodCategory.Thalis],
        foodItems: [
            { id: 2025, price: 120 },
            { id: 2026, price: 80 },
            { id: 2034, price: 280 },
            { id: 2045, price: 310 }
        ],
        mealType: [MealTypeOption.Veg]
    },
    {
        id: 1003, img: FoodPlazaImg, name: 'Food Plaza', rating: 3.4, deliveryTime: 20,
        category: [FoodCategory.Beverages, FoodCategory.Burger, FoodCategory.Chicken,
        FoodCategory.Snacks, FoodCategory.Pizza, FoodCategory.Cake, FoodCategory.PavBhaji],
        foodItems: [
            { id: 2000, price: 400 },
            { id: 2001, price: 85 },
            { id: 2002, price: 100 },
            { id: 2003, price: 95 },
            { id: 2004, price: 100 },
            { id: 2006, price: 90 },
            { id: 2023, price: 130 }
        ],
        mealType: [MealTypeOption.Veg, MealTypeOption.NonVeg],
        discount: 60
    },
    {
        id: 1004, img: ChineseCornerImg, name: 'Chinese Corner', rating: 2.6, deliveryTime: 15,
        category: [FoodCategory.Snacks, FoodCategory.PavBhaji],
        foodItems: [
            { id: 2004, price: 130 },
            { id: 2006, price: 95 },
            { id: 2023, price: 120 }
        ],
        mealType: [MealTypeOption.Veg], discount: 56
    },
    {
        id: 1005, img: DownTownPizzaImg, name: 'DownTown Pizza', rating: 1.8, deliveryTime: 20,
        category: [FoodCategory.Pizza, FoodCategory.Burger,
        FoodCategory.Snacks, FoodCategory.Beverages],
        foodItems: [
            { id: 2001, price: 100 },
            { id: 2002, price: 210 },
            { id: 2004, price: 120 }
        ],
        mealType: [MealTypeOption.Veg, MealTypeOption.NonVeg]
    },
    {
        id: 1006, img: VanillaIceCreamImg, name: 'Vanialla Ice Cream', rating: 4.1, deliveryTime: 18,
        category: [FoodCategory.IceCream, FoodCategory.Cake],
        foodItems: [
            { id: 2000, price: 100 },
            { id: 2003, price: 95 },
            { id: 2033, price: 200 },
            { id: 2040, price: 170 },
            { id: 2041, price: 311 },
            { id: 2042, price: 349 },
            { id: 2043, price: 180 },
            { id: 2044, price: 110 }
        ],
        mealType: [MealTypeOption.Veg], discount: 49
    },
    {
        id: 1007, img: SatkarRestaurantImg, name: 'Satkar Restaurant', rating: 3.3, deliveryTime: 23,
        category: [FoodCategory.Thalis, FoodCategory.Cake, FoodCategory.CholeBhature,
        FoodCategory.Beverages, FoodCategory.PavBhaji],
        foodItems: [
            { id: 2003, price: 90 },
            { id: 2007, price: 120 },
            { id: 2023, price: 110 }
        ],
        mealType: [MealTypeOption.Veg]
    },
]

export default restaurantDetails;