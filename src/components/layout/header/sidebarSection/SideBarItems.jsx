import { Box, Divider, List, ListItem, useMediaQuery, useTheme } from "@mui/material";
import RatingsItem from "./RatingsItem";
import { useState } from "react";
import MealType from "./MealType";
import LogoSection from "../logoSection/LogoSection";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SortBy from "./SortBy";

export default function SideBarItems() {

    const theme = useTheme();

    return (
        <>
            <Box
                sx={{ width: 260 }}
                role="presentation"
            >
                <List>

                    <Box component="a" href="#" sx={{
                        display: { xs: 'flex', md: 'none' },
                        textDecoration: 'none',
                        color: 'white',
                        m: 2
                    }}>
                        <LogoSection />
                    </Box>

                    {/* Ratings Item */}
                    <RatingsItem />


                    {/* Meal Type */}
                    <Divider />
                    <MealType />

                    {/* Sort By */}
                    <Divider />
                    <SortBy />

                </List>
            </Box>
        </>
    )
}