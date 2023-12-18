import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import { AppBar, Box, Container, CssBaseline, ThemeProvider, Toolbar, Typography, styled, useTheme } from "@mui/material";
import SideBarSection from "./header/sidebarSection/SideBarSection";
import { useEffect, useState } from "react";
import MobileSearchSection from "./header/searchSection/MobileSearchSection";
import { useSelector } from "react-redux";

const drawerWidth = 260;
// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    minHeight: 'calc(100vh - 65px)',
    flexGrow: 1,
    marginTop: '64px',
    width: '100%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create(
        'margin',
        open
            ? {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            }
            : {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }
    ),
    marginLeft: -drawerWidth,
    [theme.breakpoints.up('md')]: {
        marginLeft: !open ? -drawerWidth : 0,
        width: `calc(100% - ${drawerWidth}px)`
    }
}));

export default function MainLayout() {

    const drawerState = useSelector(state => state.drawerState.isOpen);
    const showSearchSection = useSelector(state => state.searchSection.value.showSearchSection);
    
    const theme = useTheme();


    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar elevation={0} position="fixed" sx={{
                    backgroundColor: 'darkorange',
                }}>
                    <Container maxWidth='xl' sx={{minHeight: '64px'}}>
                        <Toolbar sx={{height: '64px'}} disableGutters>
                            {
                                showSearchSection ? <MobileSearchSection /> :
                                    <Header/>
                            }

                        </Toolbar>
                    </Container>
                </AppBar>

                <SideBarSection/>

                <Main theme={theme} open={drawerState}>
                    <Outlet />
                </Main>
            </Box>
        </>
    )
}