import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Navbar } from './Navbar';
import axios from 'axios';
import './MovieDetail.css'

export const MovieDetail = () => {
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=5edebfdab5603c290d7b1775e5613ace&language=en-US`;
    const[movie,setMovie] = useState([])

    

    useEffect(() => {

        async function fetchMovies(){

            const request = await axios.get(url);

            //console.log(request.data);
            setMovie(request.data)

            // setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length)]);

            return request;

        }
        fetchMovies();
        
        
    }, [url]);

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }

    return (
        <div>
            <Navbar/>


            <header className="poster" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            

        }}>
            <div className="poster_contents">
                <h1 className="poster_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="poster_buttons">
                    <button className = "poster_button">Play</button>
                    <button className = "poster_button">My List</button>
                </div>

                <h1 className="poster_description">
                    {movie?.overview}
                    
                </h1>
                
            </div>

            

            <div className="poster--fadeBottom" > </div>
            
        </header>








            
            
        </div>
    )
}
