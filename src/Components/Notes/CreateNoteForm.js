import * as React from 'react';
import { styled } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import Button from '@mui/material/Button';

const CreateNoteDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px'
}));


export default function CreateNoteForm() {
    return (
        <CreateNoteDiv>
            <Paper
                component="form"
                sx={{
                    p: '2px 4px', display: 'flex', alignItems: 'center', width: 598, boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <InputBase
                        sx={{ ml: 1, flex: 1, mb: 2, color: '#202124', width: '300%' }}
                        placeholder="Title"
                        inputProps={{ 'aria-label': 'Jot a Note' }}
                        fullWidth='true'
                        multiline='true'
                        minrows={4}
                    />
                    <InputBase
                        sx={{ ml: 1, flex: 1, height: '100px', fontSize: '15px', color: 'secondary', width: '300%' }}
                        multiline='true'
                        minRows={3}
                        placeholder="Take a Note"
                        inputProps={{ 'aria-label': 'Jot a Note' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '300%' }}>
                        <div>
                            <ImageOutlinedIcon sx={{ fontSize: '20px', color: 'grey', ml: 1, mb: 1, cursor: 'pointer', mr: 2 }} />
                            <AddAlertOutlinedIcon sx={{ fontSize: '20px', color: 'grey', ml: 1, mb: 1, cursor: 'pointer' }} />
                        </div>
                        <div>
                            <Button sx={{
                                fontSize: '15px', color: 'grey', cursor: 'pointer', mr: 3, p: 0, '&:hover': { backgroundColor: 'transparent' },
                            }}>Add</Button>
                        </div>
                    </div>
                </div>
            </Paper>
        </CreateNoteDiv >
    );
}
