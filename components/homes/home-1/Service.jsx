import { services } from "@/data/services";
import React from "react";

export default function Service() {
  return (
    <div className="helpful pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>Supported Platforms</h6>
              <div className="main-title">
                One Video, Content For <br /> Every{" "}
                <span className="animation-text">Platform</span>
              </div>
            </div>
          </div>
          {services.map((elm, i) => (
            <div key={i} className="col-xl-2 col-md-3 col-6">
              <div className="wg-helpful text-center">
                <div className="image">
                  <span className={elm.iconClass} />
                </div>
                <h6>
                  <a href="#">{elm.text}</a>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
