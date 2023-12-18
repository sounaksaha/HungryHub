import { Box, Typography } from "@mui/material";
import Restaurant from "../Restaurant/Restaurant";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { foodCategoryDetails, restaurantDetails } from "../data/data";

export default function FoodCategoryCartDetails() {

    const { id } = useParams();

    const foodCategory = foodCategoryDetails.filter((category) => category.id == id)[0].title;

    const filterRestaurantDetails = restaurantDetails.filter((restaurant) => restaurant.category.includes(foodCategory));

    return (
        <>
            <Box component="div" sx={{
                margin: '20px',
                marginLeft: '30px'
            }}>
                <Typography variant="h3" sx={{
                    fontWeight: 'bold', fontFamily: "cursive"
                }}>
                    {foodCategory}
                </Typography>

                {/* Filter Restaurant */}
                <Restaurant filterRestaurantDetails={filterRestaurantDetails} />

            </Box>
        </>
    )
}