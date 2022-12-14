import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SignUpForm from './SignUpForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function SignUpModal({ openSignUp, setSignUpOpen }) {

    const handleClose = () => setSignUpOpen(false);

    return (
        <div>
            <Modal
                open={openSignUp}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <SignUpForm />
                </Box>

            </Modal>
        </div>
    )

}