import React from "react";
// import "..images" ;

import Card from "../Components/Card";
import "../CSS/Compete.css";
import Competitions from "../Competitions";


const CompeteHero = () => {
  return (
    <section className="section">
      <div className="section-container">
        <div className="section-left">
          <h1>
            <strong>Competitions and Hackathons</strong>
          </h1>
          {/* <p>Briding the gap and fostering opportunities</p> */}
          <br/>
          <p>
          Participate in various opportunities to showcase your skills & get rewarded!
          </p>
          <br />
          {/* <div className="buttons">
          <button class="btn-3">
            <span>Explore </span>
          </button> 
          <button class="btn-3"><span>Host Oppertunities</span></button>
          </div> */}
        </div>
        
        <div children="section-right">
          <div className="section-right-images">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c7ae771c4a1_competitions_hero.png" alt="compete"/>
          </div>
        </div>
      </div>

      <div className="buttons">
          <button class="btn-3">
            <span>Explore </span>
          </button> 
          <button class="btn-3"><span>Host Opportunities</span></button>
          </div>

      <div id="explore">
      <div className="Features">
      <div className="heading">
        <header className="text">
         Explore Competitions
          <br/>
        </header>
        <div className="row">

          {Competitions.map((ele) => {
            return (
              <div key={ele.id} className="box">
                <img src={ele.image} alt={ele.title} width={300} />
                <h3>{ele.title}</h3>
                <p>{ele.desc}</p>
                <br />
                <h4>Mode={ele.mode}</h4>
              </div>
            );
          })}
        </div>
      </div>


    </div>

      </div>

    </section>
   

   
  );
};

export default CompeteHero;
