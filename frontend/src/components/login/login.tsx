import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CircularProgress, Fade } from '@mui/material';
import { postLogin } from '../api/LoginService';
import { useMutation } from "react-query";
import { useState } from 'react';
import { setTokenInHeader } from '../api/api';

interface LoginProps {
    onLoginSuccess: () => void;
}

export default function LogIn(props: LoginProps) {
    const [isError, setIsError] = useState(false);

    const { mutate, isLoading } = useMutation(postLogin, {
        onSuccess: (response: any) => {
            setIsError(false);
            setTokenInHeader(response.data.token);
            props.onLoginSuccess();
        },
        onError: () => {
            setIsError(true);
        },
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = data.get('username') as string;
        const pass = data.get('password') as string;
        mutate({
            username: user,
            password: pass
        })
    };

    return (
        <Fade in timeout={1000}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 16,
                        padding: 6,
                        borderRadius: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'black'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                        <LockPersonIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log in to Dashboard
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox defaultChecked disabled color="primary" />}
                            label="Remember me"
                        />
                        {isError ? <p style={{ color: "red" }}>Incorrenct username or password. Try again</p> : null}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In {isLoading ? <CircularProgress size={14} sx={{ color: "black", marginLeft: "5px" }} /> : null}
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Fade>
    );
}