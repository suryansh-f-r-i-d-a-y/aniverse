"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../../components/ImageCard";
import { Box, Stack } from "@mui/material";



export default function Browse() {

    const [cardData, setCardData] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        const getRecomendations = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=6`);
                await setCardData(response.data.data);
                console.log(response.data.data)
            } catch (err) {
                console.log('error occured', err)
            }
        }

        const getUpcomingAnime = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=5`);
                await setUpcoming(response.data.data);
            } catch (err) {
                console.log('error occured', err)
            }
        }

        getRecomendations();
        getUpcomingAnime();
    }, [])



    return (
        <>
            {/* <Box style={{ padding: '2rem 5rem', background: 'lightblue' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Top Anime</span>
                <Stack direction={'row'} flexWrap={'wrap'} >
                    {cardData.map(item => (

                        <ImageCard key={item.id} image={item.images.jpg.large_image_url} />

                        // <span>{item.}</span>
                    ))}
                </Stack>
            </Box> */}
            <Box style={{ padding: '2rem 5rem'}}>
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Top Airing</span>
                <Stack direction={'row'} flexWrap={'wrap'} sx={{gap:'2rem'}}>
                    {cardData.map(item => (
                        
                            <ImageCard key={item.mal_id} image={item.images.webp.image_url} title={item.title_english} id={item.mal_id} />
                        
                    ))}
                </Stack>
            </Box>
            <Box style={{ padding: '2rem 5rem'}}>
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Upcoming</span>
                <Stack direction={'row'} flexWrap={'wrap'} sx={{gap:'2rem'}}>
                    {upcoming.map(item => (
                       
                            <ImageCard key={item.mal_id} image={item.images.webp.image_url} title={item.title_english} id={item.mal_id} />
                        
                    ))}
                </Stack>
            </Box>
        </>
    );
}