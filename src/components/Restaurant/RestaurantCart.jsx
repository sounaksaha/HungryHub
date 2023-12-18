import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RestaurantCart({id, img, name, rating, deliveryTime, category, discount }) {
    
    const navigate = useNavigate();

    return (
        <>
            <Card onClick={()=>navigate("/restaurants/"+id)} sx={{
                width: 'calc(100% - 16px)',
                minWidth: 200, maxWidth: 260, minHeight: 300, maxHeight: 300, marginTop: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },
            }}>
                <CardActionArea sx={{ minWidth: 200, maxWidth: 260, minHeight: 300, maxHeight: 300 }}>
                    {
                        discount ? (
                            <Box sx={{
                                position: 'absolute',
                                background: 'linear-gradient(45deg, #FF8E53, #FE6B8B)',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '5px',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                zIndex: '1',
                                right: '5px',
                                width: 'fit-content', // Adjust the width to fit the content
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                            }}>
                                Up to {discount}% OFF
                            </Box>
                        ) : ""
                    }

                    <CardMedia
                        component="img"
                        height="170"
                        image={img}
                        alt="green iguana"

                    />

                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{
                            fontWeight: 'bold',
                            fontFamily: 'emoji'
                        }}>
                            {name}
                        </Typography>
                        <Grid container justifyContent="space-between">
                            <Grid>
                                <Typography variant="body2">
                                    <Rating name="read-only" value={rating} precision={0.1} readOnly />
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body2" sx={{
                                    fontWeight: 'bold',
                                    fontFamily: 'cursive'
                                }}>
                                    {deliveryTime} mins
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" sx={{
                            color: 'darkgrey',
                            fontFamily: 'cursive'
                        }}>
                            {category.slice(0, 4).map((value, index) => (
                                index !== 3 ? value + ", " : value
                            ))}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}