import React from "react";
// import "@images/Colleges";
import HomeHero from "@/Components/HomeHero";
import HomeFeatures from "@/Components/HomeFeatures";
import SlidingBrands from "@/Components/SlidingBrands";
import OurNumbers from "@/Components/OurNumbers"
import "@/CSS/Home.css";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

function Home() {
    return (
        <div className="features">
            <Navbar />
            <HomeHero />
            <HomeFeatures />
            <SlidingBrands small="They trust us!" title="Our sponsors" />
            <OurNumbers />
            <Footer />
        </div>
    );
}
export default Home;
