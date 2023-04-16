import React from "react";

import SlidingBrands from "@/Components/SlidingBrands";
import CompeteHero from "@/Components/CompeteHero";
import OurNumbers from "@/Components/OurNumbers";

import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

function Compete() {
    return (
        <div className="compete">
            <Navbar />
            <CompeteHero />
            <SlidingBrands small="Compete Now!" title="And join top Companies" />
            <OurNumbers />
            <Footer />
        </div>
    )
}

export default Compete;