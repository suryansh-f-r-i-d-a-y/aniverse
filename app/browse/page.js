"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../../components/ImageCard";
import { Box, Stack } from "@mui/material";
import { Mousewheel } from 'swiper/modules';

import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


export default function Browse() {

    const [cardData, setCardData] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        const getRecomendations = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=airing&limit=12`);
                await setCardData(response.data.data);
                console.log(response.data.data)
            } catch (err) {
                console.log('error occured', err)
            }
        }

        const getUpcomingAnime = async () => {
            try {
                const response = await axios.get(`https://api.jikan.moe/v4/top/anime?filter=upcoming&limit=12`);
                await setUpcoming(response.data.data);
            } catch (err) {
                console.log('error occured', err)
            }
        }

        getRecomendations();
        getUpcomingAnime();
    }, [])

    let type = 'topAnime';


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
            {/* <Box style={{ padding: '2rem 5rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Top Airing</span>
                <Stack direction={'row'} flexWrap={'wrap'} sx={{ gap: '2rem' }}>
                    {cardData.map(item => (

                        <ImageCard key={item.mal_id} image={item.images.webp.image_url} title={item.title_english} id={item.mal_id} />

                    ))}
                </Stack>
            </Box> */}
            <Box style={{ padding: '2rem 5rem' }}>
                <div className="carasol-header" style={{display:'flex' , justifyContent:'space-between'}}>
            <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Top Airing</span>
            
            <Link href={`category/${type}`}>
            <span style={{cursor:'pointer'}}> View more </span>
            </Link>
                </div>
                <Swiper
                    slidesPerView={'auto'}
                    freeMode={true}
                    mousewheel={true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation , Mousewheel, Pagination]}
                    className="mySwiper"
                >
                    {cardData.map(item => (

                        <SwiperSlide key={item.mal_id} style={{ width:'fit-content' }}>
                            <ImageCard key={item.mal_id} image={item.images.webp.image_url} title={item.title_english} id={item.mal_id} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box style={{ padding: '2rem 5rem' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Upcoming</span>
                <Swiper
                    slidesPerView={'auto'}
                    freeMode={true}
                    mousewheel={true}
                    // spaceBetween={}
                    // centeredSlides={true}
                    // pagination={{  clickable: true  }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation , Mousewheel, Pagination]}                    className="mySwiper"
                >
                    {upcoming.map(item => (

                        <SwiperSlide key={item.mal_id} style={{ width:'fit-content' }}>
                        <ImageCard key={item.mal_id} image={item.images.webp.image_url} title={item.title_english} id={item.mal_id} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>


        </>
    );
}