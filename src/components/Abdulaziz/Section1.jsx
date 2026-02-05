import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import a1 from "../../assets/a1.png"
import a2 from "../../assets/a2.png"
import a3 from "../../assets/a3.png"
import a4 from "../../assets/a4.png"
import a5 from "../../assets/a5.png"
import a6 from "../../assets/a6.png"
import CountUp from 'react-countup';
import { Star, ArrowRight } from 'lucide-react';

import "./Section1.css"

const Section1 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div className="container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li>Features</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>About</li>
                </ul>
            </nav>

            <main className="hero">
                <div className="hero-left" data-aos="fade-right">
                    <h1>Discover Our <br /> Latest Products</h1>
                    <p>
                        Lorem ipsum is a placeholder text commonly used
                        to demonstrate the visual form of a product.
                    </p>
                    <button className="buy-btn">
                        Buy Now <ArrowRight size={20} style={{ marginLeft: '10px' }} />
                    </button>

                    <div className="reviews">
                        <div className="user-avatars">
                            <img src={a1} alt="" />
                            <img src={a2} alt="" />
                            <img src={a3} alt="" />
                            <img src={a4} alt="" />
                        </div>
                        <span className="review-text">15k Well <br />
                            Reviews</span>
                    </div>
                </div>

                <div className="hero-right" data-aos="fade-left">
                    <div className="image-wrapper">
                        <Star className="star-icon top" fill="#FFD700" color="#FFD700" size={32} />

                        <h2 className="curved-text">Red Beats Ml9c2zm/a</h2>

                        <div className="product-circle">
                            <img
                                src={a5}
                                alt="Red Beats"
                                className="product-img"
                            />
                            <div className="price-tag">$<CountUp start={0} end={50} duration={2}>50</CountUp></div>
                        </div>

                        <div className="play-video-wrapper">
                            <div className="play-button">
                                <img src={a6} alt="" />
                            </div>
                            <span>Play Video</span>
                        </div>

                        <Star className="star-icon bottom" fill="#FFD700" color="#FFD700" size={32} />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Section1;