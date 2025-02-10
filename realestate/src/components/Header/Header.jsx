import React from "react";
import './Header.css'

const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">

                <img src="realestate/src/assets/public/logo.png" alt="" width={100} />


                <div className="flexCenter h-menu">
                    <a href=""
                    >

                        Residencies
                    </a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <button className="button">
                    <a href="">Contatct</a>
                    </button>
                    
                </div>
            </div>
        </section>
    )
}

export default Header