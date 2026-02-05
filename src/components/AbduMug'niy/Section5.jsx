import React from "react";
import "./Section5.css";
import img1 from "../../assets/n1.png";
import img2 from "../../assets/n2.png";
import img3 from "../../assets/n3.png";

const Section5 = () => {
  return (
    <section className="products">
      <div className="products-grid">

        <div className="p-card" data-aos="fade-up">
          <div className="p-image-box bg-blue">
            <div className="p-tag">
              <span>Save</span>
              <strong>60%</strong>
            </div>
            <img src={img1} alt="Boat Rockerz 333" className="p-img" />
          </div>
          <div className="p-info">
            <h3 className="p-name">Boat Rockerz 333</h3>
            <div className="p-rating">
              <span className="p-stars">★★★★★</span>
              <span className="p-reviews">75 Reviews</span>
            </div>
            <p className="p-price">$20</p>
          </div>
          <button className="p-btn">Add to cart</button>
        </div>

        <div className="p-card" data-aos="fade-up">
          <div className="p-image-box bg-cyan">
            <img src={img2} alt="Boat kerz 234" className="p-img" />
          </div>
          <div className="p-info">
            <h3 className="p-name">Boat kerz 234</h3>
            <div className="p-rating">
              <span className="p-stars">★★★★★</span>
              <span className="p-reviews">75 Reviews</span>
            </div>
            <p className="p-price">$40</p>
          </div>
          <button className="p-btn">Add to cart</button>
        </div>

        <div className="p-card" data-aos="fade-up">
          <div className="p-image-box bg-teal">
            <div className="p-tag">
              <span>Save</span>
              <strong>40%</strong>
            </div>
            <img
              src={img3}
              alt="Boat Rockerz 323"
              className="p-img"
            />
          </div>
          <div className="p-info">
            <h3 className="p-name">Boat Rockerz 323</h3>
            <div className="p-rating">
              <span className="p-stars">★★★★★</span>
              <span className="p-reviews">75 Reviews</span>
            </div>
            <p className="p-price">$30</p>
          </div>
          <button className="p-btn">Add to cart</button>
        </div>

      </div>
    </section>
  );
};

export default Section5;