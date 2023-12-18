import { Box, Typography } from "@mui/material";
import FoodCategory from "./FoodCategory/FoodCategory";
import { restaurantDetails } from "../data/data";
import Restaurant from "../Restaurant/Restaurant";


export default function Home() {
    return (
        <>
            <Box component="div"  sx={{
                margin: '20px',
                marginLeft: '30px'
            }}>

                {/* Food Category */}
                <FoodCategory />

                {/* Restaurant */}
                <Restaurant filterRestaurantDetails={restaurantDetails}/>
            </Box>
        </>
    )
}