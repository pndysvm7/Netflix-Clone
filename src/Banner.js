import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from './requests';
import './Banner.css'
// import { IconButton } from "@material-ui/core";
import ImgSlider from './ImgSlider';

const posterURL = "https://image.tmdb.org/t/p/original/"

export const Banner = () => {

    const [movies,setMovies] = useState([]);


    

    useEffect(() => {

        async function fetchMovies(){

            const request = await axios.get('https://api.themoviedb.org/3' + requests.fetchNetflixOriginals);

            setMovies(request.data.results[Math.floor(Math.random()*request.data.results.length)]);

            return request;

        }
        fetchMovies();
        
        
    }, [requests.fetchNetflixOriginals]);

    


   

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }


    return (
        



        <header className="banner" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            

        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies?.title || movies?.name || movies?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movies?.overview,150)}
                    
                </h1>
                
            </div>

            

            <div className="banner--fadeBottom" > </div>
            
        </header>
        
    )
}
