"use client"; 
import React , { useEffect, useState } from "react";
import axios from "axios";
import ImageCard from "../../components/ImageCard";



export default function Browse() {

const [cardData ,setCardData] = useState([]);

    useEffect(()=>{
        const getRecomendations = async () =>{
            try{
                const response = await axios.get(`https://api.jikan.moe/v4/top/anime`);
                await setCardData(response.data.data);
                console.log(response.data.data)
            } catch(err){
                console.log('error occured' , err)
            }
        }
        getRecomendations();
    },[])
    


    return(
        <>
        this is Browser
        {cardData.map(item =>(
            
          <ImageCard key = {item.id} image = {item.images.jpg.large_image_url} />
        ))}
        </>
    );
}