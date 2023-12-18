import { Box, Collapse, FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, createTheme, useTheme } from "@mui/material";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useEffect, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { RatingOptions } from '../../../constants';
import { useDispatch, useSelector } from "react-redux";
import { setRatingOption } from "../../../redux/slice/filterSectionSlice";

export default function RatingsItem() {

    const [ratingListsCollapse, setRatingListsCollapse] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const dispatch = useDispatch();

    const CustomTheme = createTheme({
        SideBarItemTheme: {
            color: 'white'
        }
    });

    useEffect(()=>{
        dispatch(setRatingOption(selectedValue));
    },[selectedValue])

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton onClick={() => setRatingListsCollapse(!ratingListsCollapse)}>
                    <ListItemIcon >
                        <StarOutlineIcon sx={{
                            ...CustomTheme.SideBarItemTheme
                        }} />
                    </ListItemIcon>
                    <ListItemText primary="RATINGS"
                        primaryTypographyProps={{
                            sx: CustomTheme.SideBarItemTheme,
                            fontWeight: 'bold'
                        }} />
                    {ratingListsCollapse ? <ExpandLess sx={{ ...CustomTheme.SideBarItemTheme }} /> : <ExpandMore sx={{ ...CustomTheme.SideBarItemTheme }} />}
                </ListItemButton>
            </ListItem>
            <Collapse in={ratingListsCollapse} timeout="auto" unmountOnExit >
                <List disablePadding>
                    <ListItem sx={{ pl: 5 }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            sx={{ ...CustomTheme.SideBarItemTheme }}
                            value={selectedValue}
                            onChange={(event) => setSelectedValue(event.target.value)}
                        >
                            {[RatingOptions.Excellent, RatingOptions.Good, RatingOptions.Average,
                            RatingOptions.BelowAverage].map((option, index) => {
                                return (
                                    <FormControlLabel key={index} value={option} control={<Radio sx={{ ...CustomTheme.SideBarItemTheme }} size="small" />} label={option} />
                                )
                            })}
                        </RadioGroup>
                    </ListItem>
                </List>
            </Collapse>
        </>
    )
}