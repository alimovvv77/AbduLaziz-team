import React from "react";
import "./Section5.css";
import Section4 from "./Section4";
import img from "../../assets/n1.png";
import img2 from "../../assets/n2.png";
import Aos from "aos";

const products = [
  {
    id: 1,
    name: "Boat Rockerz 333",
    price: 20,
    rating: 5,
    reviews: 75,
    discount: "60%",
    image:"img",
    type: "blue",
    img: img,
  },
  {
    id: 2,
    name: "Boat kerz 234",
    price: 40,
    rating: 5,
    reviews: 75,
    image: "img2",
    type: "black",
    img: img2,
  },
  {
    id: 3,
    name: "Boat Rockerz 323",
    price: 30,
    rating: 5,
    reviews: 75,
    discount: "40%",
    image:
      "https://p7-tt.byteimg.com/origin/pgc-image/77861962383a4843929497e640103632.png",
    type: "teal",
  },
];

const Section5 = () => {
  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="card-wrapper"  data-aos="fade-up"
     data-aos-anchor-placement="top-center">
            <div className={`image-section ${product.type}`}>
              {product.discount && (
                <div className="discount-badge">
                  <span>Save</span>
                  <strong>{product.discount}</strong>
                </div>
              )}
              <img src={img} alt={product.name} className="product-img" />
            </div>

            <div className="info-section">
              <h3 className="product-title">{product.name}</h3>
              <div className="rating">
                <span className="stars">★★★★★</span>
                <span className="reviews">{product.reviews} Reviews</span>
              </div>
              <p className="price">${product.price}</p>
            </div>

            <button className="add-btn">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section5;
