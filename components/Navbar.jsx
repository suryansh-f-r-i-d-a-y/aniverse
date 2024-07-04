import React from 'react'
import styles from '../app/styles/nav.module.css'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
        <Stack  sx={{justifyContent:"space-between"}} className={styles.navbar} direction={'row'}>
                <h3 className={styles.logo}>AniVerse</h3>

                <Stack direction={'row'} sx={{listStyleType:'none' , gap:'1rem'}} classname={styles.menuItems } >
                    <li><Link href='/' className={styles.menu}> Home </Link> </li>                    
                    <li><Link href='/browse' className={styles.menu} > Browse </Link> </li>                    
                    <li><Link href='/profile' className={styles.menu} > Profile </Link> </li>                     
                </Stack>
                <Button href="/signup" sx={{height:"fit-content"}} variant="contained" disableElevation>
                    SignUp
                </Button>

        </Stack>
            <div >
        
            </div>

        </>
    )
}

export default Navbar