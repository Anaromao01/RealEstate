import React from "react";
import './Hero.css'

const Hero = () => {
    return(
    <section className="hero-wrapper">
        <div className="paddings innerwidth flexCenter hero-container">

            <div className="hero-left">Left section</div>
            {/* right side */} 

            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./public/hero-image.png" alt="" />
                    

                </div>
            </div>

        </div>
    </section>
    )
}

export default Hero