import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpUser } from "../../store/auth";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFormGroup = styled("div")`
  width: 100% ;
  margin: 0px auto 20px auto;
  text-align: left;
`
export const StyledLabel = styled('label')`
  font-weight: 300 !important;
  font-size: 14px;
  line-height: 21px;
  color: #2D2D2D;
`
export const StyledAsterisk = styled('span')`
  font-size: 12px;
  color: red;
`

export const StyledLink = styled(Link)(({ theme, color = "#6065D8" }) => ({
    fontWeight: 300,
    fontSize: "12px",
    lineHeight: "21px",
    color: "#6065D8",
    textDecoration: "none",
    textAlign: "right",
}));

export const StyledButton = styled('button')(({ theme, color = "#6065D8" }) => ({
    backgroundColor: color,
    width: '100%',
    height: 50,
    borderRadius: '8px',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
    marginTop: '10px',
    alignItems: 'center',
    paddingRight: '10px',
}));

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password1: yup.string().min(8).max(14).required(),
    password2: yup.string().min(8).max(14).required(),
    last_name: yup.string().required(),
    first_name: yup.string().required()
});

const SignUpForm = () => {
    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()

    const onSubmit = data => {
        console.log(data, 'data');
        const formData = {
            email: data['email'],
            password1: data['password1'],
            password2: data['password2'],
            last_name: data['last_name'],
            first_name: data['first_name'],
            username: data['email']
        }
        console.log(formData, 'formdata');
        dispatch(SignUpUser(formData))
    };


    const { isLoading } = useSelector((state) => state.auth);

    // const dispatch = useDispatch()


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign Up</h2>
                <StyledFormGroup>
                    <StyledLabel htmlFor="first_name">
                        First Name <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>
                    <Controller
                        name="first_name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            type="first_name"
                            fullWidth
                            {...field}
                            placeholder={"Enter first_name here"}
                            size="small"
                            value={field.value}
                            error={!!errors.first_name}
                            helperText={errors.first_name ? errors.first_name?.message : ""}
                            sx={{
                                "& legend": { display: "none" },
                                "& fieldset": { top: 0 },
                            }}
                        />}
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="last_name">
                        Last Name <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>
                    <Controller
                        name="last_name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            type="last_name"
                            fullWidth
                            {...field}
                            placeholder={"Enter last_name here"}
                            size="small"
                            value={field.value}
                            error={!!errors.last_name}
                            helperText={errors.last_name ? errors.last_name?.message : ""}
                            sx={{
                                "& legend": { display: "none" },
                                "& fieldset": { top: 0 },
                            }}
                        />}
                    />
                </StyledFormGroup>

                <StyledFormGroup>
                    <StyledLabel htmlFor="email">
                        Email <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <TextField
                            type="email"
                            fullWidth
                            {...field}
                            placeholder={"Enter Email here"}
                            size="small"
                            value={field.value}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email?.message : ""}
                            sx={{
                                "& legend": { display: "none" },
                                "& fieldset": { top: 0 },
                            }}
                        />}
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="password">
                        Password <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>
                    <Controller
                        name="password1"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                type="password"
                                fullWidth
                                {...field}
                                placeholder={"Enter password here"}
                                size="small"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password?.message : ""}
                                value={field.value}
                                sx={{
                                    "& legend": { display: "none" },
                                    "& fieldset": { top: 0 },
                                }}
                            />
                        )}
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <StyledLabel htmlFor="password">
                        Confirm Password <StyledAsterisk className="text-alert">*</StyledAsterisk>
                    </StyledLabel>
                    <StyledLink to="/password_reset" className="text-right">
                        Forgot Password ?
                    </StyledLink>
                    <Controller
                        name="password2"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                type="password"
                                fullWidth
                                {...field}
                                placeholder={"Confirm your password"}
                                size="small"
                                error={!!errors.password}
                                helperText={errors.password ? errors.password?.message : ""}
                                value={field.value}
                                sx={{
                                    "& legend": { display: "none" },
                                    "& fieldset": { top: 0 },
                                }}
                            />
                        )}
                    />
                </StyledFormGroup>
                <StyledButton>
                    {isLoading ? <CircularProgress sx={{ color: "#fff" }} /> : "Sign Up"}
                </StyledButton>
            </form>
        </div>
    );
};

export default SignUpForm;