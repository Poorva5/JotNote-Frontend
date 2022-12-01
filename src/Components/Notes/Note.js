import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Note() {
    return (
        <div>
            <Card sx={{ maxWidth: 238, textAlign: 'left', borderColor: '#e0e0e0', border: '1px solid transparent', borderRadius: '8px', marginLeft: '300px' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#202124' sx={{ fontSize: '1rem', fontWeight: '600' }}>
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="#202124" sx={{
                            fontSize: '1.125rem', fontWeight: '500', paragraph: 'true', overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "10",
                            WebkitBoxOrient: "vertical",
                        }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except AntarcticaLizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
