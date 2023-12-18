import { Box, Grid, ImageList, List, Paper, Typography, styled } from "@mui/material";
import FoodCategoryCart from "./FoodCategoryCart";
import { foodCategoryDetails } from "../../data/data";

export default function FoodCategory() {
    return (
        <>
            <Box>
                <Typography variant="h6" sx={{
                    fontWeight: 'bold',
                    fontFamily: 'cursive'
                }}>
                    Food Category
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        width: "auto",
                        overflowX: 'auto',
                        '&::-webkit-scrollbar': {
                            height: '3px', /* Thin scrollbar for Chrome, Safari, Edge */
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', /* Custom scrollbar thumb color */
                            borderRadius: '5px'
                        },
                    }}
                >

                    {foodCategoryDetails.map((item, index) => (
                        item.categoryimp ? (
                            <FoodCategoryCart key={index} CardId={item.id} CardImg={item.img} CardTitle={item.title} />
                        ) : null
                    ))}
                </Box>
            </Box>
        </>
    )
}