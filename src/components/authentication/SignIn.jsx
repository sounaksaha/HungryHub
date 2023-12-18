import { Avatar, Box, Button, Checkbox, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, IconButton, Slide, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { forwardRef } from "react";
import CloseIcon from '@mui/icons-material/Close';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Link from '@mui/material/Link';

export default function SignIn({handleClose, handleSignInClose}) {

    const handleSubmit = () => {

    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}
            >
                <Container disableGutters component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'monospace', color: '#333' }}>
                            Login
                        </Typography>
                        <Box display="flex" alignItems="self-end">
                            <Typography variant="body2" sx={{ fontWeight: 'bold', fontFamily: 'monospace', color: '#333' }}>
                                or
                            </Typography>
                            <Link href="#" component="button" onClick={handleSignInClose} underline="none" sx={{ marginInline: 1 }} color="darkorange" fontFamily="cursive">
                                create an account
                            </Link>
                        </Box>
                    </Box>
                    <Avatar sx={{ bgcolor: '#ff4500', width: '80px', height: '80px' }}>
                        <FoodBankIcon sx={{ width: '60px', height: '80px' }} />
                    </Avatar>
                </Container>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            backgroundColor: '#f5f5f5',
                        },
                    }}
                >
                    <CloseIcon />
                </IconButton>
                {/* Other content */}

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <TextField
                        margin="dense"
                        fullWidth
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        variant="outlined"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: '#ff4500',
                            color: '#fff',
                            borderRadius: 20,
                            padding: '10px 20px',
                            boxShadow: '0px 4px 10px rgba(255, 69, 0, 0.3)',
                            transition: 'background-color 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#ff5722',
                            },
                        }}
                    >
                        LOGIN
                    </Button>
                </Box>
            </Box>
        </>
    );
}