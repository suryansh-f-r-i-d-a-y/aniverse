import { Stack, TextField, Box, Button } from '@mui/material';
import Paper from '@mui/material/Paper';


export default function SignIn() {
    return (
        <>
         <Box sx={{ height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper elevation={3} sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Stack  direction={'column'} sx={{ width: '500px', gap: '1rem', alignItems:'center', padding:'1rem', margin:'1rem 0' }}>
                    <h2>
                        Sign In
                    </h2>
                    <TextField id="outlined-basic" label="Username" variant="outlined" sx={{ width: '90%' }} ></TextField>
                    <TextField id="outlined-basic" label="Password" variant="outlined" type='password' sx={{ width: '90%' }}></TextField>
                    <Button variant="contained" >Sign Up</Button>
                    <h3>Don't have a account ? <span style={{ color:'#1976d2' }}> <a href="/signup"> create account</a></span> </h3>
                </Stack>

            </Paper>
            </Box>

        </>
    )
}