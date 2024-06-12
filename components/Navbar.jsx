import React from 'react'
import styles from '../app/styles/nav.module.css'
import Button from '@mui/material/Button';
import { Stack, colors } from '@mui/material';

const Navbar = () => {
    return (
        <>
        <Stack  sx={{justifyContent:"space-between"}} className={styles.navbar} direction={'row'}>
                <h3 className={styles.logo}>AniVerse</h3>

                <Stack direction={'row'}  sx={{listStyleType:'none' , gap:'1rem'}} >
                       <a href="/"> <li> Home </li></a> 
                       <a href="/browse"><li sx={{}} >Browse</li></a> 
                       <a href="/profile"> <li> Profile </li></a> 
                      
                       

                </Stack>
                <Button sx={{height:"fit-content"}} variant="contained" disableElevation>
                    SignUp
                </Button>

        </Stack>
            <div >
                
            </div>

        </>
    )
}

export default Navbar