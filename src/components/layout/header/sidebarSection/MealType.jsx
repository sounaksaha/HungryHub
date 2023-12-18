import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Checkbox, Collapse, FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, createTheme, useTheme } from "@mui/material";
import { useState } from "react";
import SetMealIcon from '@mui/icons-material/SetMeal';
import { MealTypeOption } from "../../../constants";
import { setIsNonVegMeal, setIsVegMeal } from "../../../redux/slice/filterSectionSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MealType() {

    const [mealTypeCollapse, setMealTypeCollapse] = useState(false);
    const dispatch = useDispatch();
    

    const CustomTheme = createTheme({
        SideBarItemTheme: {
            color: 'white'
        }
    });

    const handleMealType = (event) => {
        const {name, checked} = event.target;

        if(name==MealTypeOption.Veg){
            dispatch(setIsVegMeal(checked));
        }else if(name==MealTypeOption.NonVeg){
            dispatch(setIsNonVegMeal(checked));
        }
    }

    return (
        <>
            <ListItem component="div" disablePadding>
                <ListItemButton onClick={() => setMealTypeCollapse(!mealTypeCollapse)}>
                    <ListItemIcon >
                        <SetMealIcon sx={{
                            ...CustomTheme.SideBarItemTheme
                        }} />
                    </ListItemIcon>
                    <ListItemText primary="VEG/NON-VEG"
                        primaryTypographyProps={{
                            sx: CustomTheme.SideBarItemTheme,
                            fontWeight: 'bold'
                        }} />
                    {mealTypeCollapse ? <ExpandLess sx={{ ...CustomTheme.SideBarItemTheme }} /> : <ExpandMore sx={{ ...CustomTheme.SideBarItemTheme }} />}
                </ListItemButton>
            </ListItem>
            <Collapse in={mealTypeCollapse} timeout="auto" unmountOnExit >
                {
                    [MealTypeOption.Veg,MealTypeOption.NonVeg].map((value, index) => {
                        return (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{ ml: 5 }}
                            >
                                <FormControlLabel
                                    control={
                                        <Checkbox name={value} sx={{ ...CustomTheme.SideBarItemTheme }} onChange={handleMealType}/>
                                    }
                                    label={value}
                                    sx={{ ...CustomTheme.SideBarItemTheme }}
                                />
                            </ListItem>
                        );
                    })}
            </Collapse>
        </>
    )
}