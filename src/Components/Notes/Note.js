import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NoteUpdateModal from './NoteUpdateModal';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import { deleteNote } from '../../store/note';
import { useDispatch } from "react-redux";


const Note = ({ note: { title, content, id }, index }) => {
    const [open, setOpen] = React.useState(false);
    const [isShown, setIsShown] = React.useState(false);

    const dispatch = useDispatch()

    console.log(id, 'from ---- note')
    const handleView = () => {
        setOpen(true)
    }
    return (
        <div style={{ marginRight: '20px' }} >
            <Card sx={{ maxWidth: 238, textAlign: 'left', borderColor: '#FAFAFA', borderRadius: '8px' }} onMouseEnter={() => { setIsShown(true) }} onMouseLeave={() => { setIsShown(false) }}>
                <CardContent>
                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        <Typography gutterBottom variant="h5" component="div" color='#202124' sx={{ fontSize: '1.3rem', fontWeight: '600' }}>
                            {title}
                        </Typography>
                        <div>
                            {isShown && <DeleteOutlineOutlinedIcon onClick={() => dispatch(deleteNote(id))} sx={{ cursor: 'pointer' }} />}
                            {isShown && <PushPinOutlinedIcon />}
                        </div>
                    </div>
                    <CardActionArea onClick={handleView}>
                        <Typography variant="body2" color="#202124" sx={{
                            fontSize: '1.125rem', fontWeight: '500', paragraph: 'true', overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "10",
                            WebkitBoxOrient: "vertical",
                        }}>
                            {content}
                        </Typography>
                    </CardActionArea>
                </CardContent>
            </Card>
            {open && id ? (<NoteUpdateModal open={open} setOpen={setOpen} id={id} />) : null}
        </div >
    );

}

export default Note;
