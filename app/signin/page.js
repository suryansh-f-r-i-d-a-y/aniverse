import { Stack, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';


export default function SignIn(){
return(
    <>
    <Paper elevation={3} >
        <h2 style={{marginBottom:'1rem'}}>
            Sign In
        </h2>
        <Stack direction={'column'} sx={{width:'500px' , gap:'1rem'}}>
<TextField id="outlined-basic" label="Username" variant="outlined" ></TextField>
<TextField id="outlined-basic" label="Password" variant="outlined" type='password'></TextField>
<h3>Don't have a account ? <span> <a href="/signup"> create account</a></span> </h3>
        </Stack>

    </Paper>
    
    </>
)
}