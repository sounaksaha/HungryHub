import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Rating, SvgIcon, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slice/shoppingCartSlice";

const VegIcon = (
    <SvgIcon viewBox="0 0 24 24">
        <path d="M15 10C15 12.74 12.76 15 10 15C7.24 15 5 12.74 5 10C5 7.26 7.26 5 10 5C12.74 5 15 7.24 15 10ZM20 4V16C20 18.26 18.26 20 16 20H4C1.76 20 0 18.26 0 16V4C0 1.74 1.76 0 4 0H16C18.26 0 20 1.74 20 4V4ZM18.34 4C18.34 2.74 17.26 1.66 16 1.66H4C2.76 1.66 1.66 2.74 1.66 4V16C1.66 17.26 2.76 18.34 4 18.34H16C17.26 18.34 18.34 17.26 18.34 16V4V4Z" fill="#4CAF50"></path>
    </SvgIcon>
);

const NonVegIcon = (
    <SvgIcon viewBox="0 0 24 24">
        <path d="M15 10C15 12.74 12.76 15 10 15C7.24 15 5 12.74 5 10C5 7.26 7.26 5 10 5C12.74 5 15 7.24 15 10ZM20 4V16C20 18.26 18.26 20 16 20H4C1.76 20 0 18.26 0 16V4C0 1.74 1.76 0 4 0H16C18.26 0 20 1.74 20 4V4ZM18.34 4C18.34 2.74 17.26 1.66 16 1.66H4C2.76 1.66 1.66 2.74 1.66 4V16C1.66 17.26 2.76 18.34 4 18.34H16C17.26 18.34 18.34 17.26 18.34 16V4V4Z" fill="#FF0000"></path>
    </SvgIcon>
);

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            xxs: 450,
            sm: 600,
            md: 960,
            lg: 1100,
        },
    },
});

export default function MenuCard(menu) {

    const [hovered, setHovered] = useState(false);
    const cartItems = useSelector(state => state.shoppingCart.items);
    const dispatch = useDispatch();

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const getQuantity = () => {
        return cartItems.length ? cartItems[menu.id]?.quantity : 0; // Return quantity if item found, else return 0
    };

    const addQuantity = () => {
        dispatch(addToCart({
            id: menu.id,
            name: menu.name,
            price: menu.price,
            restaurantId:menu.restaurantId 
        }))
    }

    const removeQuantity = () => {
        dispatch(removeFromCart({
            id: menu.id
        }))
    }

    return (
        <ThemeProvider theme={theme}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column',
                        xxs: 'row'
                    },
                    width: '100%',
                    borderRadius: 10,
                    boxShadow: hovered ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease-in-out',
                    overflow: 'hidden',
                    position: 'relative',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Box sx={{ display: 'flex', position: 'relative' }}>
                    <CardMedia
                        component="img"
                        sx={{
                            maxWidth: {
                                xs: '350px',
                                xxs: '180px'
                            },
                            minHeight: '80px', // Maintain aspect ratio
                            objectFit: 'cover',
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            transition: 'transform 0.3s ease-in-out',
                            transform: hovered ? 'scale(1.1)' : 'scale(1)',
                        }}
                        image={menu.image}
                        alt={menu.name}
                    />
                    <Box sx={{
                        zIndex: 1,
                        marginTop: 2,
                        position: 'absolute',
                        top: 0,
                        right: 10,
                    }}>
                        {menu.isVeg ? VegIcon : NonVegIcon}
                    </Box>
                </Box>
                <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', color: '#333', marginBottom: 1.5 }}>
                            {menu.name}
                        </Typography>
                        <Box display={"flex"} alignItems="start">
                            <Typography>
                                <Rating name="half-rating-read" value={menu.rating} size="small" precision={0.1} readOnly />
                            </Typography>
                            <Typography variant="body2" sx={{ paddingLeft: 1, color: 'gray', marginLeft: 1 }}>
                                {menu.totalRating} votes
                            </Typography>
                        </Box>
                    </Box>
                    <div>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: 1, fontFamily: 'monospace' }}>
                            ₹{menu.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, marginTop: 1 }}>
                            {menu.description}
                        </Typography>
                    </div>
                    <Box container display="flex" justifyContent="flex-end" sx={{
                        position: {
                            lg: 'absolute',
                            md: 'static'
                        }, padding: {
                            lg: 2,
                            md: 0
                        },
                        bottom: 0, right: 0
                    }}>
                        {
                            getQuantity() ?
                                <Box
                                    sx={{
                                        borderRadius: 20,
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: '#fff',
                                        padding: '6px',
                                        width: 'fit-content',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            fontSize: '1rem',
                                            color: '#FF9800',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                backgroundColor: '#F57C00',
                                                color: '#fff',
                                                transform: 'scale(1.1)', // Increasing the scaling on hover
                                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Adjusting the shadow
                                            },
                                        }}
                                        onClick={removeQuantity}
                                    >
                                        <RemoveIcon fontSize="small" />
                                    </IconButton>
                                    <Typography
                                        variant="h6"
                                        alignSelf="center"
                                        paddingX={1}
                                        sx={{
                                            color: '#333',
                                            fontWeight: 'bold', // Making the number bold
                                            fontSize: '1.2rem', // Adjusting the font size
                                            transition: 'color 0.3s', // Adding color transition on hover
                                        }}
                                    >
                                        {getQuantity()}
                                    </Typography>
                                    <IconButton
                                        sx={{
                                            fontSize: '1rem',
                                            color: '#FF9800',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                backgroundColor: '#F57C00',
                                                color: '#fff',
                                                transform: 'scale(1.1)',
                                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)',
                                            },
                                        }}
                                        onClick={addQuantity}
                                    >
                                        <AddIcon fontSize="small" />
                                    </IconButton>
                                </Box>
                                :
                                <Button
                                    variant="contained"
                                    sx={{ backgroundColor: '#FF9800', color: 'white', borderRadius: 25, boxShadow: 'none', '&:hover': { backgroundColor: '#F57C00' } }}
                                    onClick={addQuantity}
                                >
                                    Add to Cart
                                </Button>
                        }
                    </Box>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}