import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from "@mui/material";



const ImgDiv = styled('img')(({ theme, color = "#6065D8" }) => ({
    height: '140px',
    margin: 'auto'
}));

const Note = ({ note: { title, content, image, id }, index }) => {

    return (
        <div style={{ marginRight: '20px' }} >
            <Card sx={{ maxWidth: 238, textAlign: 'left', borderColor: '#FAFAFA', borderRadius: '8px' }} onClick={""}>
                <CardActionArea>
                    {image ? <ImgDiv
                        src={image}
                    /> : null}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#202124' sx={{ fontSize: '1.3rem', fontWeight: '600' }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="#202124" sx={{
                            fontSize: '1.125rem', fontWeight: '500', paragraph: 'true', overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "10",
                            WebkitBoxOrient: "vertical",
                        }}>
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div >
    );

}

export default Note;
