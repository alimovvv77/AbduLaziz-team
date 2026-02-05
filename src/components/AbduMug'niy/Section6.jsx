import React from 'react';
import './Seciton6.css';
// import img from '../../assets/image17.png';
// import img2 from '../../assets/image18.png';


const Section6 = () => {
  return (
    <section className="new-launches">
      <h2 className="section-title">New Launches</h2>
      
      <div className="banner-container">
        
        <button className="nav-btn prev">‹</button>

        <div className="banner-content">
        
          <div className="image-group">
            <div className="oval-img-container main-img">
              {/* <img src={img} alt="Airdrop 500" /> */}
            </div>
            <div className="oval-img-container sub-img">
              {/* <img src={img2} alt="Airdrop 500 detail" /> */}
            </div>
          </div>

        
          <div className="info-group">
            <h1 className="product-name">Airdrop 500 Anc</h1>
            <p className="description">
              Lorem ipsum is a placeholder text commonly used to 
              demonstrate the visual form of a product ... <span className="read-more">Read More</span>
            </p>
            
            <div className="price-tag">
              Price : <span>$45.99</span>
            </div>

            <div className="color-options">
              <span className="color-circle black active"></span>
              <span className="color-circle yellow"></span>
              <span className="color-circle blue"></span>
            </div>

            <div className="actions">
              <button className="add-cart-btn">Add to cart</button>
              <button className="explore-btn">Explore More</button>
            </div>
          </div>
        </div>

        <button className="nav-btn next">›</button>
      </div>
    </section>
  );
};

export default Section6;