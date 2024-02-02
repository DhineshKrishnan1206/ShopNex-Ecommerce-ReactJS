import React from "react";

import "./Banner.scss";
import BgVideo from "../../../assets/AirPodsPro.mp4";

const Banner = () => {
  return (
    <div className="hero-banner">
      <video src={BgVideo} autoPlay muted loop className="video-bg" />
      <div className="content">
        <div className="bg-overlay">
        <div className="text-content">
        <div className="product-info">
            <h1>All-new</h1>
            <h2>AirPods Pro</h2>
            <h3>- The brand-new H2 chip</h3>
            <h3>- Noise-cancelling microphones</h3>
            <h3>- Adaptive Transparency</h3>
            <div className="ctas">
              <div className="banner-cta">Read more</div>
              <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
                    
                </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
