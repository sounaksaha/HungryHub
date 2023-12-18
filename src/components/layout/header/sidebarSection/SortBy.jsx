import { Collapse, FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Radio, RadioGroup, createTheme } from "@mui/material"
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { SortByCategory } from "../../../constants";
import FilterListIcon from '@mui/icons-material/FilterList';

export default function SortBy() {

    const [sortByCollapse, setSortByCollapse] = useState(false);
    const [selectedValue, setSelectedValue] = useState(SortByCategory.Default);

    const CustomTheme = createTheme({
        SideBarItemTheme: {
            color: 'white'
        }
    });

    return (
        <>
            <ListItem disablePadding>
                <ListItemButton onClick={() => setSortByCollapse(!sortByCollapse)}>
                    <ListItemIcon >
                        <FilterListIcon sx={{
                            ...CustomTheme.SideBarItemTheme
                        }} />
                    </ListItemIcon>
                    <ListItemText primary="SORT BY"
                        primaryTypographyProps={{
                            sx: CustomTheme.SideBarItemTheme,
                            fontWeight: 'bold'
                        }} />
                    {sortByCollapse ? <ExpandLess sx={{ ...CustomTheme.SideBarItemTheme }} /> : <ExpandMore sx={{ ...CustomTheme.SideBarItemTheme }} />}
                </ListItemButton>
            </ListItem>
            <Collapse in={sortByCollapse} timeout="auto" unmountOnExit >
                <List disablePadding>
                    <ListItem sx={{ pl: 5 }}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            sx={{ ...CustomTheme.SideBarItemTheme }}
                            value={selectedValue}
                            onChange={(event) => setSelectedValue(event.target.value)}
                        >
                            {[SortByCategory.Default, SortByCategory.DeliveryTime, SortByCategory.Rating,
                            SortByCategory.CostLowToHigh, SortByCategory.CostHighToLow].map((option, index) => {
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