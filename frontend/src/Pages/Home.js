import React from "react";
import store from "../Store";
import { useNavigate } from "react-router-dom";
import HomeHero from "../Components/HomeHero";
import Navbar from "../Components/Navbar";
import HomeFeatures from "../Components/HomeFeatures";
import SlidingBrands from "../Components/SlidingBrands";
import OurNumbers from "../Components/OurNumbers"
import "../CSS/Home.css";
function Home(){
    const navigate=useNavigate();
    // const wallet= store.getState().wallet;
    return(
        <div>
            {/* <button onClick={()=>{
                navigate('/nft', { state: { id: 1, wallet:wallet } });
            }}>Mint It</button> */}
             <div className="features">
                <Navbar/>
      <HomeHero />
      <HomeFeatures />
      <SlidingBrands small="They trust us!" title="Our sponsors"/>
      <OurNumbers />
    </div>
        </div>
    )
}
export default Home;