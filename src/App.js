import './App.css';
import { Row } from './Row';
import requests from './requests';
import { Banner } from './Banner';
import './Display.css'
import { Navbar } from './Navbar';
import ImgSlider from './ImgSlider';
import Homescreen from './Homescreen';
import { MovieDetail } from './MovieDetail';
import { Profile } from './Profile';
import { ShowAll } from './ShowAll';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  
  return (
    <div className="App" >
      <Router>

    
        <Switch>

        <Route exact  path='/'>
            <Homescreen/>

          </Route>
          <Route exact path='/home'>
            <Homescreen/>

          </Route>
          
          <Route exact  path='/profile'>

            <Profile/>

          </Route>

          <Route exact  path='/detail/:id'>

            <MovieDetail/>

          </Route>

          <Route exact  path='/showall/:title'>

            <ShowAll/>

          </Route>

          <Route >
            <Homescreen/>
          </Route>
        </Switch>

      </Router>
      



    </div>
  );
}

export default App;
