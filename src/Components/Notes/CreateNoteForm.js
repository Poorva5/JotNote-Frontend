import * as React from 'react';
import { styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { createNote } from '../../store/note';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { fetchNoteDetail } from '../../store/note';
import { updateNote } from '../../store/note';


const CreateNoteDiv = styled('div')(() => ({
    display: 'flex',
    width: '700px'
}));

const schema = yup.object().shape({
    title: yup.string(),
    content: yup.string()
})

const CreateNoteForm = ({ type, id }) => {

    const { control, handleSubmit, setValue, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });
    const { note, fetchingNote } = useSelector(state => state.note)
    const setFormValues = () => {
        setValue("title", note.title)
        setValue("content", note.content)
    }

    React.useEffect(() => {

        if (id && type === 'edit') {
            dispatch(fetchNoteDetail(id))
            setFormValues()
        }
    }, [id])

    const dispatch = useDispatch()

    const onSubmit = data => {

        if (id && type === 'edit') {
            dispatch(updateNote(id, data))
        } else {
            dispatch(createNote(data))
        }
        setValue("title", '')
        setValue("content", '')
    }

    return (
        <div>
            <CreateNoteDiv>
                {fetchingNote && type === 'edit' ? (<div>Loading</div>) : (<form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        p: '2px 4px', display: 'flex', flexDirection: 'column', width: 598, boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19)'
                    }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }} >

                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => <InputBase
                                sx={{ ml: 1, mb: 2, color: '#202124', width: '100%' }}
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
                                    sx={{ ml: 1, flex: 1, height: '100px', fontSize: '15px', color: 'secondary', }}
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

                    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                        <div>
                            <Button type="submit" sx={{
                                fontSize: '15px', color: 'grey', cursor: 'pointer', mr: 3, p: 0, '&:hover': { backgroundColor: 'transparent' },
                            }}> {type === 'edit' ? 'Update' : 'Add'}</Button>
                        </div>
                    </div>
                </form>)}
            </CreateNoteDiv >
        </div>
    );
}

export default CreateNoteForm;
