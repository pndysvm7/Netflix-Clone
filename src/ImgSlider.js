import React from 'react'
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'

function ImgSlider({movies}) {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
    
    const num = Math.floor(Math.random()*(movies.length-5));

    
    return (
        <Carousel {...settings}  className="no-scroll">
            <Wrap>

            <header className="banner" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movies[num+1]?.backdrop_path}")`,
            

        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies[num+1]?.title || movies[num+1]?.name || movies[num+1]?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movies[num+1]?.overview,150)}
                    
                </h1>
                
            </div>

            

            <div className="banner--fadeBottom" > </div>
            
        </header>
                
            </Wrap>
            <Wrap>

            <header className="banner" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movies[num+2]?.backdrop_path}")`,
            

        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies[num+2]?.title || movies[num+2]?.name || movies[num+2]?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movies[num+2]?.overview,150)}
                    
                </h1>
                
            </div>

            

            <div className="banner--fadeBottom" > </div>
            
        </header>
                
            </Wrap>


            <Wrap>

            <header className="banner" 
        style={{
            backgroundSize:'cover',
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movies[num+4]?.backdrop_path}")`,
            

        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movies[num+4]?.title || movies[num+4]?.name || movies[num+4]?.original_name}
                </h1>

                <div className="banner_buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>

                <h1 className="banner_description">
                    {truncate(movies[num+4]?.overview,150)}
                    
                </h1>
                
            </div>

            

            <div className="banner--fadeBottom" > </div>
            
        </header>
                
            </Wrap>





        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    
    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }
    li.slick-active button:before {
        color: white;
    }
    .slick-list {
        
        overflow:hidden;
        
    }

    .slick-list::-webkit-scrollbar {
        display: none;
      }

    
    
`

const Wrap = styled.div`
    cursor: pointer;
   
    
`

