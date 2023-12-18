import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, styled } from "@mui/material";

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogTitle-root': {
        backgroundColor: '#ff9800',
        color: '#fff',
        textAlign: 'center',
    },
    '& .MuiDialogContent-root': {
        backgroundColor: '#fff',
        color: '#333',
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
        justifyContent: 'center',
        borderTop: '1px solid #ccc',
    },
    '& .MuiButton-root': {
        borderRadius: '20px',
        margin: theme.spacing(1),
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
}));

export default function OrderConfirmationDialog({ open, handleClose, handleConfirm }) {
    return (
        <>
            <StyledDialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Order Change</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to remove the previous order from the restaurant?
                        This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirm} color="secondary" variant="contained">
                        Confirm
                    </Button>
                </DialogActions>
            </StyledDialog>
        </>
    )
}