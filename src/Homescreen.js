import './App.css';
import { Row } from './Row';
import requests from './requests';
import { Banner } from './Banner';
import './Display.css'
import { Navbar } from './Navbar';
import ImgSlider from './ImgSlider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Homescreen() {
  
  return (
    <div className="App" >

      <Navbar/>
      

      <Banner/>
      
      
      
      

      <Row title="NETFLIX-ORIGINALS" url={requests.fetchNetflixOriginals} makeItLarge genre={213} />

      <Row title="Trending Now" url = {requests.fetchTrending}  genre={0} />

      <Row title="Western " url ={requests.fetchWesternMovies}  genre={37} />
      
      <Row title="Top Rated" url={requests.fetchTopRated}  genre={0} />
      <Row title="Action  Movies" url={requests.fetchActionMovies}  genre={28} />
      <Row title="Comedy  Movies" url={requests.fetchComedyMovies}  genre={35} />
      <Row title="Horror  Movies" url={requests.fetchHorrorMovies}  genre={27} />
      <Row title="Romance  Movies" url={requests.fetchRomanceMovies}  genre={10749} />
      <Row title="Animation Movies" url ={requests.fetchAnimationMovies}  genre={16} />
      <Row title="Documentaries  " url={requests.fetchDocumentaries}  genre={99}  />
      <Row title="Science and Fiction" url ={requests.fetchScienceFiction}  genre={878} />
      



    </div>
  );
}

export default Homescreen;
