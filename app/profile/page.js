import { Box, Stack } from "@mui/material";
import styles from '../styles/profile.module.css'

export default function Profile(){
    return(
        <>
        <Box sx={{height:'50vh', width:'100vw'}} style={{background:''}}>
            hello Suryansh! <br/> welcome back

            <Stack direction={'row'} sx={{width:'80%' , margin:'auto' , justifyContent:'center' , gap:"1rem" }}>

            <button className={styles.btn}>Overview</button>
            <button className={styles.btn}>Animelist</button>
            <button className={styles.btn}>Stats</button>
             
            </Stack>
        </Box>
        </>
    );
}