import { Box, Button, Collapse, Divider, Drawer, FormControlLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Radio, RadioGroup, ThemeProvider, createTheme, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SideBarItems from "./SideBarItems";
import { useDispatch, useSelector } from "react-redux";
import { closeDrawer } from "../../../redux/slice/drawerSlice";

export default function SideBarSection() {

    const drawerState = useSelector((state)=> state.drawerState.isOpen);
    const dispatch = useDispatch();

    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box component="div" sx={{ flexShrink: { md: 0 }, width: 260 }} >
            <Drawer
                anchor={'left'}
                open={drawerState}
                onClose={()=>dispatch(closeDrawer())}
                
                variant={matchUpMd?"persistent":"temporary"}
                PaperProps={{
                    sx: {
                        width: 260,
                        [theme.breakpoints.up('md')]: {
                            top: '64px',
                        },
                        backgroundColor: 'darkorange',
                 
                    }
                }}
                elevation={0}
            >

                <SideBarItems />
            </Drawer>
        </Box >
    );
}