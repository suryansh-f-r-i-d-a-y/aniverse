"use client"; 
import React , { useEffect, useState } from "react";
import axios from "axios";



export default function Browse() {

const [data ,setData] = useState([]);

    useEffect(()=>{
        const getRecomendations = async () =>{
            try{
                const response = await axios.get(`https://api.jikan.moe/v4/recommendations/anime`);
                setData(response)
            } catch(err){
                console.log('error occured' , err)
            }
        }
        getRecomendations();
    },[])
    


    return(
        <>
        this is Browser
        </>
    );
}