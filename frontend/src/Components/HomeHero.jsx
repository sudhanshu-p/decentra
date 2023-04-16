import React from "react";
// import "..images" ;
import images from "../images.js";
import Card from "../Components/Card";
import "../CSS/Home.css";

const HomeHero = () => {
  return (
    <section className="topsection">
      <div className="topsection-container">
        <div className="topsection-left">
          <h1>
            Linking the best:
            <br />
            <strong>Talent,Colleges,Recruiters</strong>
          </h1>
          {/* <p>Briding the gap and fostering opportunities</p> */}
          <br/>
          <p>
            Discover Global Opportunities and Explore Worldwide Prospects:
            Learn, Showcase, Boost and Secure Your Dreams
          </p>
        </div>
        <div children="topsection-right">
          <div className="topsection-right-images">
            {images.map((ele) => {
              // return (
              //   <Card
              //     key={ele.id}
              //     title={ele.title}
              //     link={ele.link}
              //     image={ele.image}
              //   />
              // );
              
              return (
                // <div className="topsection-span">
                  
                
                <div className="topsection-image" key={ele.id}>
                  
                  <a href={ele.link}>
                    <img src={ele.image} alt={ele.title} />
                  </a>
                  <span>{ele.title}</span>
                </div>
                // </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
