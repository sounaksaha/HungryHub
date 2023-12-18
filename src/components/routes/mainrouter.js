import FoodCategoryCartDetails from "../foodCategoryCartDetails/FoodCategoryCartDetails";
import Home from "../home/Home";
import MainLayout from "../layout/MainLayout";
import RestaurantMenu from "../restaurantMenu/RestaurantMenu";

const mainrouter = {
    path: '/',
    Component: MainLayout,
    children:[
        {
            path:'',
            Component:Home
        },
        {
            path:'category/:id',
            Component:FoodCategoryCartDetails
        },
        {
            path:'restaurants/:id',
            Component:RestaurantMenu
        }
    ]
};

export default mainrouter;