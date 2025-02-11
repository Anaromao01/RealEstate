import React from "react";
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'

const Hero = () => {
    return(
    <section className="hero-wrapper">
        <div className="paddings innerwidth flexCenter hero-container">
            {/* left side */} 
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    <h1>
                        Discover <br/>
                        Most Suitable <br/> Property
                    </h1>
                </div>
<div className="flexColStart hero-des">
    <span>Find a variety of properties that suit you very easily </span>
    <span>forget all difficulties in finding a residence for you</span>
</div>
<div className="div search-bar">
    <HiLocationMarker color="var(--blue)" size={25}/>
    <input type="text"/>
    <button className="button">Search</button>
</div>
            </div>
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