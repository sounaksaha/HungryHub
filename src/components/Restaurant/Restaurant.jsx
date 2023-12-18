import { Box, Grid, ThemeProvider, Typography, createTheme } from "@mui/material";
import RestaurantCart from "./RestaurantCart";
import { useSelector } from "react-redux";
import { MealTypeOption, RatingOptions } from "../constants";
import { useEffect } from "react";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            xxs: 494, // Your custom breakpoint value
            sm: 714,
            md: 1190,
            lg: 1300
        },
    },
});

export default function Restaurant({filterRestaurantDetails}) {

    const ratingOption = useSelector((state) => state.filterSection.value.ratingOption);
    const isVegMeal = useSelector((state) => state.filterSection.value.isVegMeal);
    const isNonVegMeal = useSelector((state) => state.filterSection.value.isNonVegMeal);

    const ratingsFilter = (rating) => {
        switch (ratingOption) {
            case RatingOptions.BelowAverage:
                return true;
            case RatingOptions.Average:
                return rating >= 2;
            case RatingOptions.Good:
                return rating >= 3;
            case RatingOptions.Excellent:
                return rating >= 4;
            default:
                return true;
        }
    }

    const mealTypeFilter = (meal) => {

        if (isVegMeal && meal.includes(MealTypeOption.Veg)) {
            return true;
        } else if (isNonVegMeal && meal.includes(MealTypeOption.NonVeg)) {
            return true;
        } else if (isVegMeal == isNonVegMeal) {
            return true;
        }

        return false;
    }

    return (
        <>
            <Box>
                <Typography variant="h6" sx={{
                    fontWeight: 'bold',
                    fontFamily: 'cursive',
                    marginTop: 5
                }}>
                    Restaurant with near you location!!!
                </Typography>


                <ThemeProvider theme={theme}>
                    <Grid container rowSpacing={1} columnSpacing={1} columns={{ xs: 3, xxs: 6, sm: 9, md: 12, lg: 15 }}>
                        {
                            filterRestaurantDetails.filter((details) => ratingsFilter(details.rating) && mealTypeFilter(details.mealType))
                                .map((details, index) =>
                                (
                                    <Grid key={index} xs={3}>
                                        <RestaurantCart id={details.id} img={details.img} name={details.name} rating={details.rating}
                                            deliveryTime={details.deliveryTime} category={details.category} discount={details.discount} />
                                    </Grid>
                                )
                                )
                        }
                    </Grid>
                </ThemeProvider>
            </Box>
        </>
    )
}