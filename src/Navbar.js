import React,{useEffect,useState} from 'react';
import './Navbar.css'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Navbar = () => {

    const [show, setShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 50){
                setShow(true);
            }else{
                setShow(false);
            }
            
        });
        return () => {
            window.removeEventListener("scroll",()=>{})
        }
    }, [])


    return (
        <div className={`nav ${show && "nav_black"}`} style={{width:'100%',position:'fixed',top:'0',display:'flex',justifyContent:'space-between',padding:'20px',zIndex:'1'}}>
            

            <Link to='/home'><img class="nav_logo" style={{objectFit:'contain',position:'fixed',left:'20px',top:'10px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="Netflix Logo" ></img></Link>

            <Link to='/profile'><img class="nav_avatar" style={{width:'30px', objectFit:'contain',position:'fixed',right:'20px',top:'10px'}} src="https://img-premium.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1625321385~hmac=d3240ead24d06251b1e9dfdd2531cea0" alt="profile" ></img></Link>

            



             

             

        </div>
    )
}
