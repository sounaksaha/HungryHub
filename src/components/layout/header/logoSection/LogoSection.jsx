import { Box, Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function LogoSection() {
    return (
        <>

            <FastfoodIcon sx={{ mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                }}
            >
                HungryHub
            </Typography>
        </>
    )
}