import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginUser } from "../../store/auth";


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
    password: yup.string().min(8).max(14).required(),
});

const LoginForm = () => {
    const { control, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const dispatch = useDispatch()

    const { isLoading } = useSelector((state) => state.auth);

    const onSubmit = data => {
        console.log(data)
        dispatch(LoginUser(data))
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{ fontFamily: "Open Sans, sans-serif" }}>Login</h3>

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
                    <StyledLink to="/password_reset" className="text-right">
                        Forgot Password ?
                    </StyledLink>
                    <Controller
                        name="password"
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
                    <StyledLabel sx={{ marginTop: '15px', fontSize: '15px', cursor: 'pointer' }}>
                        New User Sign up
                    </StyledLabel>
                </StyledFormGroup>
                <StyledButton>
                    {isLoading ? <CircularProgress sx={{ color: "#fff" }} /> : "Login"}
                </StyledButton>
            </form>
        </div>
    );
};

export default LoginForm;
