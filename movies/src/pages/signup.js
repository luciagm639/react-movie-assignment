import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { UserContext } from "../contexts/userContext";
import { useContext } from 'react';
import { Card, CardContent, Grid, CardHeader, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const { loggedIn } = useContext(UserContext)
    console.log(loggedIn)
    useEffect(() => { if (loggedIn) { navigate("/home") } })

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }

    return (
        <main >
            <section style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}>
                <Card sx={{ maxWidth: 400 }}>
                    <CardHeader title={
                        <Typography variant="h5" component="p">
                            SIGN UP
                        </Typography>
                    } />
                    <CardContent>
                        <Grid container>
                            <form>
                                <TextField
                                    id="email-address"
                                    label="Email address"
                                    variant="outlined"
                                    required
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ width: 350 }}
                                />
                                <TextField
                                    id="password"
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    required
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                                <button
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    Sign up
                                </button>
                            </form>
                        </Grid>
                        <Grid container>
                            <p>
                                Already have an account?{' '}
                                <NavLink to="/login" >
                                    Sign in
                                </NavLink>
                            </p>
                        </Grid>
                    </CardContent>
                </Card>
            </section>
        </main >
    )
}

export default Signup