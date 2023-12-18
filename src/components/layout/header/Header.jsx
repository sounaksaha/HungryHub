import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import NotesIcon from '@mui/icons-material/Notes';
import SearchSection from "./searchSection/SearchSection";
import ProfileSection from "./profileSection/ProfileSection";
import CartSection from "./cartSection/CartSection";
import LogoSection from "./logoSection/LogoSection";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../redux/slice/drawerSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <>
            {/* Logo Section */}
            <Box component="a" href="/" onClick={(e)=>{
                e.preventDefault()
                navigate("/")
            }} sx={{
                display: { xs: 'none', md: 'flex' },
                textDecoration: 'none',
                color: 'inherit',
                mr: 4,
            }}>
                <LogoSection />
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex" }} >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={() => dispatch(toggleDrawer())}
                    color="inherit"
                >
                    <NotesIcon />
                </IconButton>
            </Box>

            <SearchSection />

            <ProfileSection />

            <CartSection />
        </>
    )
}