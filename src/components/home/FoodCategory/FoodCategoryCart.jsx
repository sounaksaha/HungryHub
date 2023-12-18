import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FoodCategoryCart({CardId, CardImg, CardTitle}) {
    
    const navigate = useNavigate();
    
    return (
        <>
            <Card sx={{ minWidth: 160, maxWidth:160, minHeight: 180, maxHeight:180 ,margin: 1, borderRadius:5 }} onClick={()=> navigate("/category/"+CardId)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={CardImg}
                        alt="Food"
                        sx={{
                            minHeight:20,
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom textAlign="center" sx={{
                            fontWeight:'bold',
                            color: 'darkgray'
                        }}
                        >
                            {CardTitle}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}