import { useParams } from "react-router-dom"
import { restaurantDetails, foodItems } from "../data/data";
import { Box, Button, Grid, Paper, Rating, Typography, styled } from "@mui/material";
import MenuCard from "./MenuCard";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RestaurantMenu() {

    const { id } = useParams();
    const restaurantDetail = restaurantDetails.filter((restaurant) => restaurant.id == id)[0];

    return (
        <>
            <Box component="div" sx={{
                margin: '20px',
                marginLeft: '30px'
            }}
            >
                <Grid container spacing={2} alignItems="center" sx={{ paddingBottom: 1, borderBottom: '1px dashed silver' }}>
                    <Grid item xs={8}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            {restaurantDetail.name}
                        </Typography>
                        <Typography variant="body2" mt={1} sx={{ color: 'gray' }}>
                            {restaurantDetail.category.map((category, index) => (
                                <span key={index}>
                                    {category}
                                    {index < restaurantDetail.category.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} textAlign="end">
                        <Button variant="contained" sx={{
                            borderRadius: 5,
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                backgroundColor: '#43A047',
                            },
                        }}>
                            4.5 &#9733;
                        </Button>
                    </Grid>
                </Grid>


                {restaurantDetail.foodItems.map((items,index) => {
                    const foodItem = foodItems.filter((food)=>food.id==items.id)[0];
                    return(
                        <Box key={index} mt={2}>
                            <MenuCard restaurantId={id} id={foodItem.id} name={foodItem.name} image={foodItem.image} description={foodItem.description} price={items.price} rating={foodItem.rating} totalRating={foodItem.totalRating} isVeg={foodItem.isVeg} />
                        </Box>
                    )
                })}

            </Box>
        </>
    )
}