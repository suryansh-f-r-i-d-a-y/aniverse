import { Stack, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';


export default function SignUp(){
return(
    <>
    <Paper elevation={3}>
        <h2 style={{marginBottom:'1rem'}}>
            Sign Up
        </h2>
        <Stack direction={'column'} sx={{width:'500px' , gap:'1rem'}}>
<TextField id="outlined-basic" label="Username" variant="outlined"></TextField>
<TextField id="outlined-basic" label="Password" variant="outlined"  type='password'></TextField>
<h3>Already have a account ? <span> <a href="/signin">Login</a></span> </h3>
        </Stack>

    </Paper>
    
    </>
)
}