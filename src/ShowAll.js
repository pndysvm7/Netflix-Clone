import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import requests from './requests';
import { ShowAllMovies } from './ShowAllMovies';
import { Navbar } from './Navbar';

export const ShowAll = () => {
    const { title } = useParams();
    // const [movie_title,setMovieTitle] = useState('');
    // const [url,setUrl] = useState('')

    // useEffect(() => {
    //     async function fetchTitle(){


    //         if(title === "NETFLIX-ORIGINALS")
    //             {

    //                 setMovieTitle("NETFLIX-ORIGINALS");
    //                 setUrl(requests.fetchNetflixOriginals);
    //             }
            
    //             if(title === "Trending Now")
    //             {
    //                 setMovieTitle("Trending Now");
    //                 setUrl(requests.fetchTrending); 
    //             }
            
    //             if(title==="Western ")
    //             {
    //                 setMovieTitle("Western ");
    //                 setUrl(requests.fetchWesternMovies); 
    //             }
            
    //             if(title==="Top Rated" )
    //             {
    //                 setMovieTitle("Top Rated" );
    //                 setUrl(requests.fetchTopRated); 
    //             }
            
    //             if(title==="Action  Movies" )
    //             {
    //                 setMovieTitle("Action  Movies" );
    //                 setUrl(requests.fetchActionMovies); 
                    
    //             }
            
    //             if(title ==="Comedy  Movies")
    //             {
    //                 setMovieTitle("Comedy  Movies" );
    //                 setUrl(requests.fetchComedyMovies); 
                    
    //             }
            
    //             if(title === "Horror  Movies" )
    //             {
    //                 setMovieTitle("Horror  Movies" );
    //                 setUrl(requests.fetchHorrorMovies); 
                    
    //             }
            
    //             if(title === "Romance  Movies" )
    //             {
    //                 setMovieTitle("Romance  Movies" );
    //                 setUrl(requests.fetchRomanceMovies); 
                    
    //             }
            
    //             if(title === "Animation Movies")
    //             {
    //                 setMovieTitle("Animation Movies" );
    //                 setUrl(requests.fetchAnimationMovies); 
                    
    //             }
            
    //             if(title === "Documentaries  ")
    //             {
    //                 setMovieTitle("Documentaries  " );
    //                 setUrl(requests.fetchDocumentaries); 
                    
    //             }
            
    //             if(title === "Science and Fiction" )
    //             {
    //                 setMovieTitle("Science and Fiction");
    //                 setUrl(requests.fetchScienceFiction); 
                    
    //             }

            
            

            

    //     }
    //     fetchTitle();
    // }, [title])

    var movie_title = '';
    var url = '';

    if(title === "NETFLIX-ORIGINALS")
                {

                    movie_title = "NETFLIX-ORIGINALS" ;
                    url = requests.fetchNetflixOriginals;
                }
            
                if(title === "Trending Now")
                {
                    movie_title = "Trending Now";
                    url = requests.fetchTrending; 
                }
            
                if(title==="Western ")
                {
                    movie_title = "Western ";
                    url = requests.fetchWesternMovies; 
                }
            
                if(title==="Top Rated" )
                {
                    movie_title = "Top Rated" ;
                    url = requests.fetchTopRated; 
                }
            
                if(title==="Action  Movies" )
                {
                    movie_title = "Action  Movies" ;
                    url = requests.fetchActionMovies; 
                    
                }
            
                if(title ==="Comedy  Movies")
                {
                    movie_title = "Comedy  Movies" ;
                    url = requests.fetchComedyMovies; 
                    
                }
            
                if(title === "Horror  Movies" )
                {
                    movie_title = "Horror  Movies" ;
                    url = requests.fetchHorrorMovies; 
                    
                }
            
                if(title === "Romance  Movies" )
                {
                    movie_title = "Romance  Movies" ;
                    url = requests.fetchRomanceMovies; 
                    
                }
            
                if(title === "Animation Movies")
                {
                    movie_title = "Animation Movies" ;
                    url = requests.fetchAnimationMovies; 
                    
                }
            
                if(title === "Documentaries  ")
                {
                    movie_title = "Documentaries  " ;
                    url = requests.fetchDocumentaries; 
                    
                }
            
                if(title === "Science and Fiction" )
                {
                    movie_title = "Science and Fiction";
                    url = requests.fetchScienceFiction; 
                    
                }
    
    



    return (

        

        <div>
            <Navbar/>

            <ShowAllMovies  title = {movie_title} url = {url} />





        </div>


        

    );

   
}
