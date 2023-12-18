import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Dialog, Slide, Typography } from '@mui/material';
import { forwardRef, useState } from 'react';
import SignIn from '../../../authentication/SignIn';
import SignUp from '../../../authentication/SignUp';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} timeout={{ enter: 800, exit: 300 }} />;
});

export default function ProfileSection() {

    const [open, setOpen] = useState(false);
    const [showSignIn, setShowSignIn] = useState(true);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSignInOpen = () => {
        setShowSignIn(true);
    }

    const handleSignInClose = () => {
        setShowSignIn(false);
    }

    return (
        <>
            <Box component="a" href='#' onClick={handleClickOpen} sx={{
                flexGrow: 0, display: 'flex', mr: 3,
                color: 'inherit',
                textDecoration: 'none',
                ":hover": {
                    color: 'bisque'
                }
            }}>
                <AccountCircleOutlinedIcon />

                <Typography
                    variant="body1"
                    noWrap
                    sx={{
                        mr: 2,
                        ml: 1,
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none',
                        display: {
                            xs: 'none', sm: 'block'
                        }
                    }}
                >
                    SignIn
                </Typography>
            </Box>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    sx: {
                        borderRadius: '16px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.1)',
                        width: '90%',
                        maxWidth: '400px',
                        margin: '20px',
                        padding: '20px',
                    },
                }}
            >

                {showSignIn ?
                    <SignIn handleClose={handleClose} handleSignInClose={handleSignInClose} /> :
                    <SignUp handleClose={handleClose} handleSignInOpen={handleSignInOpen} />
                }
            </Dialog>
        </>
    )
}