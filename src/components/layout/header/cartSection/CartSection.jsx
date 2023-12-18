import { Avatar, Badge, Box, Button, Card, CardActions, CardContent, CardMedia, FormControlLabel, Menu, MenuItem, Slide, Switch, Tooltip, Typography, styled } from "@mui/material";
import FilterNoneRoundedIcon from '@mui/icons-material/FilterNoneRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Grow from '@mui/material/Grow';
import { useDebugValue, useState } from "react";
import CardShadow from "./CardShadow";
import { useDispatch, useSelector } from "react-redux";
import OrderConfirmationDialog from "./OrderConfirmationDialog";
import { confirmClearCart } from "../../../redux/slice/shoppingCartSlice";
import { clear } from "@testing-library/user-event/dist/clear";


export default function CartSection() {

    const [showCard, setShowCard] = useState(false);
    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.shoppingCart.totalQuantity);
    const isRestaurantChanged = useSelector((state) => state.shoppingCart.showError);

    const handleShowCard = () => {
        setShowCard(true);
    }

    const handleCloseShowCard = () => {
        setShowCard(false);
    }

    const openOrderConfirmationDialog = () => {
        dispatch(confirmClearCart());
    }

    const closeOrderConfirmationDialog = () => {
        dispatch(clear());
    }

    return (
        <>
            <Box>
                <Box component="a" href="#" sx={{
                    flexGrow: 0, display: 'flex',
                    color: 'inherit',
                    textDecoration: 'none',
                    height: '100%',
                    alignItems: 'center',
                    ":hover": {
                        color: 'bisque'
                    }
                }}
                    onMouseEnter={handleShowCard}
                    onMouseLeave={handleCloseShowCard}
                >
                    <Badge
                        badgeContent={totalQuantity}
                        color="primary"
                        overlap="circular"
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <ShoppingCartIcon
                            sx={{
                                color: '#fff',
                                padding: '8px',
                            }}
                        />
                    </Badge>

                    <Typography
                        variant="body1"
                        noWrap
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            color: '#fff',
                            textDecoration: 'none',
                            display: { xs: 'none', sm: 'block' },
                            transition: 'color 0.3s ease-in-out',
                            '&:hover': {
                                color: '#ffcc80',
                            },
                        }}
                    >
                        Cart
                    </Typography>

                    <CardShadow showCard={showCard} handleShowCard={handleShowCard} handleCloseShowCard={handleCloseShowCard} />

                </Box>

                <OrderConfirmationDialog open={isRestaurantChanged}/>
            </Box>
        </>
    )
}