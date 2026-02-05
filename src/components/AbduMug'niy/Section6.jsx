import React from 'react';
import "./Seciton6.css"
import img17 from "../../assets/image 17.png"
import img18 from "../../assets/image18.png"

const Section6 = () => {
  return (
    <section className="launch">
      <h2 className="launch__title">New Launches</h2>

      <div className="launch__banner">
        <button className="launch__arrow launch__arrow--prev">‹</button>

        <div className="launch__content">
          <div className="launch__gallery">
            <div className="launch__oval launch__oval--main">
              <img src={img17} alt="Airdrop 500" />
            </div>
            <div className="launch__oval launch__oval--sub">
              <img src={img18} alt="Airdrop 500 detail" />
            </div>
          </div>

          <div className="launch__info">
            <h1 className="launch__product-name">Airdrop 500 Anc</h1>
            <p className="launch__description">
              Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a product ...
              <span className="launch__read-more">Read More</span>
            </p>

            <div className="launch__price">
              Price : <span>$45.99</span>
            </div>

            <div className="launch__colors">
              <span className="launch__dot launch__dot--black active"></span>
              <span className="launch__dot launch__dot--yellow"></span>
              <span className="launch__dot launch__dot--blue"></span>
            </div>

            <div className="launch__actions">
              <button className="launch__btn-cart">Add to cart</button>
              <button className="launch__btn-explore">Explore More</button>
            </div>
          </div>
        </div>

        <button className="launch__arrow launch__arrow--next">›</button>
      </div>
    </section>
  );
};

export default Section6;