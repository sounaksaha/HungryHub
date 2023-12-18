import { Card, CardContent, Grow, Typography } from "@mui/material";

function CardShadow({ showCard, handleShowCard, handleCloseShowCard }){
    return (
        <>
            <Grow in={showCard}
                style={{ transformOrigin: '0 0 0' }}
                {...(showCard ? { timeout: 1000 } : {})}>
                <Card sx={{
                    display: {
                        xs: 'none', sm: 'block'
                    },
                    minWidth: 300, mt: 5, position: "absolute",
                    top: '20px',
                    left: 'calc(100% - 370px)',
                    overflow: 'visible',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderTop: '2px solid #2cc8cdcc',
                    padding: '16px',
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: -2,
                        right: 34,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        borderTop: '2px solid #2cc8cdcc',
                        borderLeft: '2px solid #2cc8cdcc',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                }}
                    onMouseEnter={handleShowCard}
                >
                    <CardContent>
                        <Typography gutterBottom variant="h5" sx={{ fontFamily: 'cursive', color: 'darkgray', fontWeight: 'bold' }} component="div">
                            Empty Cart
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ color: '#666', marginTop: '8px', fontFamily: 'monospace' }}>
                            Yummy food is waiting for you. Order from the menu and eat delicious food Now...!
                        </Typography>
                    </CardContent>
                </Card >
            </Grow>
        </>
    )
}

export default CardShadow;