import * as React from 'react';
import { styled } from "@mui/material";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { createNote } from '../../store/note';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";

const CreateNoteDiv = styled('div')(({ theme, color = "#6065D8" }) => ({
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px'
}));

const schema = yup.object().shape({
    title: yup.string(),
    content: yup.string()
})


const CreateNoteForm = () => {

    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()

    const onSubmit = data => {
        console.log(data, 'notes log')
        dispatch(createNote(data))
    }

    return (
        <CreateNoteDiv>
            {/* <Paper
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    p: '2px 4px', display: 'flex', alignItems: 'center', width: 598, boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)'
                }}
            > */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    p: '2px 4px', display: 'flex', flexDirection: 'column', width: 598, boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)'
                }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <Controller
                        name="title"
                        control={control}
                        render={({ field }) => <InputBase
                            sx={{ ml: 1, flex: 1, mb: 2, color: '#202124', width: '100%' }}
                            placeholder="Title"
                            inputProps={{ 'aria-label': 'Jot a Note' }}
                            minrows={4}
                            {...field}
                            error={!!errors.title}
                            helperText={errors.title ? errors.title?.message : ""}
                            type="text"
                        />}
                    />
                    <Controller
                        name="content"
                        control={control}
                        render={({ field }) =>
                            <InputBase
                                sx={{ ml: 1, flex: 1, height: '100px', fontSize: '15px', color: 'secondary', width: '300%' }}
                                multiline='true'
                                minRows={3}
                                {...field}
                                placeholder="Take a Note"
                                inputProps={{ 'aria-label': 'Jot a Note' }}
                                helperText={errors.title ? errors.title?.message : ""}
                                error={!!errors.content}
                            />
                        }
                    />

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between',  }}>
                    <div>
                        <ImageOutlinedIcon sx={{ fontSize: '20px', color: 'grey', ml: 1, mb: 1, cursor: 'pointer', mr: 2 }} />
                        <AddAlertOutlinedIcon sx={{ fontSize: '20px', color: 'grey', ml: 1, mb: 1, cursor: 'pointer' }} />
                    </div>
                    <div>
                        <Button type="submit" sx={{
                            fontSize: '15px', color: 'grey', cursor: 'pointer', mr: 3, p: 0, '&:hover': { backgroundColor: 'transparent' },
                        }}>Add</Button>
                    </div>
                </div>
                {/* </Paper> */}
            </form>
        </CreateNoteDiv >
    );
}

export default CreateNoteForm;
