import { motion } from "framer-motion";
import React from "react";
import "../Features/Features.css";
import feat1 from "../../../assets/Images/challenge.webp";
import feat2 from "../../../assets/Images/shops.jpeg"
import feat3 from "../../../assets/Images/feat1.jpeg"
const Features = () => {
  return (
    <div>
      <div className="features-section">
        <div className="features-body">
          <div className="features-header">
            <h1>Features</h1>
            <span>Try out our features</span>
          </div>
          <div className="features-boxes-section">
            <div className="feature-box">
              <div className="feature-img-box">
                <h1>Challenge</h1>
                <img src={feat1} alt="no" />
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-img-box">
                <h1>shops</h1>
                <img src={feat2} alt="no" />
              </div>
            </div>
            <div className="feature-box">
              <div className="feature-img-box">
                <h1>Challenge</h1>
                <img src={feat3} alt="no" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
