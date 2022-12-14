import LoginForm from "../Auth/LoginForm";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const LandingPage = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <h3 style={{ marginBottom: '20px', fontFamily: "Open Sans, sans-serif" }}> Welcome to JotNote</h3>
            <Card sx={{ width: '500px', margin: 'auto' }}>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    )
}

export default LandingPage;