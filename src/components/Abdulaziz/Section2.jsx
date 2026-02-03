import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import a7 from "../../assets/a7.png";
import a8 from "../../assets/a8.png";
import a9 from "../../assets/a9.png";
import './Section2.css';

const Section2 = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
        });
    }, []);

    return (
        <section className="featured-section">
            <div className="content-wrapper">

                <div className="images-container" data-aos="fade-right">
                    <h2 className="bg-text">Apple wireless Airpod</h2>

                    <div className="cards-grid">
                        <div className="oval-card small-card">
                            <img src={a7} alt="Airpods Case" />
                        </div>
                        <div className="oval-card large-card">
                            <img src={a8} alt="Airpods Black" />
                        </div>
                        <div className="oval-card small-card plant-card">
                            <img src={a9} alt="Airpods with plant" />
                        </div>
                    </div>

                    <div className="price-label">
                        Price : $
                        <span className="count-number">
                            <CountUp
                                end={45.99}
                                duration={2.5}
                                decimals={2}
                            />
                        </span>
                    </div>
                </div>

                <div className="info-container" data-aos="fade-left">
                    <h3 className="section-title">Our Featured Products</h3>
                    <p className="section-desc">
                        Lorem ipsum is a placeholder text commonly used to demonstrate
                        the visual form of a product
                    </p>

                    <div className="btn-group">
                        <button className="add-cart-btn">Add to cart</button>
                        <button className="view-more-btn">View more</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Section2;