
'use client';
import { Box, Stack } from "@mui/material";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from '../../styles/animeinfo.module.css'

export default function Animeinfo() {

    const { id } = useParams();

    const [animedetails, setAnimeDetails] = useState([]);

    useEffect(() => {
        const getAnimeDetails = async () => {
            try {
                const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
                await setAnimeDetails(res.data.data);
            } catch (err) {
                console.log('error occured', err);
            }
        }
        getAnimeDetails();
    }, [])


    return (
        <>
            <Box  className={styles.synopsis} sx={{ width: '80%', margin: 'auto', marginBottom: '1rem' }} >
                <h1>{animedetails?.title_english}</h1>

                <Stack  direction={'row'} gap={'1rem'} >
                    <Stack>
                        <img src={animedetails?.images?.webp?.large_image_url} alt="" style={{ height: '400px', width: '250px' }} />
                        <span></span>
                    </Stack>
                    <Stack>
                        <p>Synopsis</p>
                        <span className={styles.text}>{animedetails?.synopsis}</span>
                    </Stack>
                </Stack>

            </Box>
            <Box className={styles.secBack} sx={{ width: '80%', margin: 'auto' }}>
                <span> Information </span>

                <Stack> <span>Genre: {animedetails?.genres?.map(item => (
                    <button className={styles.btn}  key={item.mal_id}> {item.name}</button>
                ))}</span>
                <span>Popularity: {animedetails.popularity}</span>
                <span>Rank: #{animedetails.rank}</span>
                <span>Rating: {animedetails.rating}</span>
                <span>Score: {animedetails.score}</span>
                </Stack>
            </Box>
        </>
    );
}