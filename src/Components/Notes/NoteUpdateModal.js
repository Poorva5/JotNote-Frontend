import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { styled } from "@mui/material";
import CreateNoteForm from './CreateNoteForm';


const ImgDiv = styled('img')(({ theme, color = "#6065D8" }) => ({
    height: '140px',
    margin: 'auto'
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24
};

const NoteUpdateModal = ({ open, setOpen, id }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                width="400"
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateNoteForm type="edit" id={id} />
                </Box>
            </Modal>
        </div>
    );
}

export default NoteUpdateModal;
