import React from "react";
import Features from "../Features";
import "../CSS/Features.css"

function HomeFeatures() {
  return (
    <div className="Features">
      <div className="heading">
        <header className="text">
          Our Special Features
          <br/>
        </header>
        <div className="row">

          {Features.map((ele) => {
            return (
              <div key={ele.id} className="box">
                <img src={ele.image} alt={ele.title} width={300} />
                <h3>{ele.title}</h3>
                <p>{ele.desc}</p>
              </div>
            );
          })}
        </div>
      </div>


    </div>
  );
}
export default HomeFeatures;
