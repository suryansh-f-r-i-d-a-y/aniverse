/* eslint-disable */
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../../components/ImageCard";
import { Box, Stack } from "@mui/material";



export default function Browse() {

    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const getRecomendations = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing&&limit=5`);
                await setCardData(response.data.data);
                console.log(response.data.data)
            } catch (err) {
                console.log('error occured', err)
            }
        }
        getRecomendations();
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
                <Stack direction={'row'} flexWrap={'wrap'} >
                    {cardData.map(item => (
                        <div>
                            <ImageCard key={item.id} image={item.images.webp.image_url} title={item.title_english} />
                        </div>
                    ))}
                </Stack>
            </Box>
        </>
    );
}