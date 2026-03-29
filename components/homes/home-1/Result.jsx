import Counter from "@/components/common/Counter";
import React from "react";

export default function Result() {
  return (
    <div className="wg-result pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <div className="sub-title">
                Trusted by YouTubers & Content Creators Worldwide
              </div>
              <div className="main-title">
                Turn Your Long-Form Videos Into&nbsp;
                <br /> Viral Short-Form Content{" "}
                <span className="animation-text">In Minutes</span>
              </div>
            </div>
            <div className="counter text-center">
              <div className="number-counter">
                <Counter parentClass={"number"} max={2500000} min={500000} />
              </div>
              <p style={{ marginTop: '10px', fontSize: '18px', opacity: 0.8 }}>Clips Created</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
