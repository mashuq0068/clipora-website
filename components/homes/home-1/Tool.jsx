import { tools } from "@/data/tools";
import React from "react";

export default function Tool() {
  return (
    <div className="list-tool">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>Why YouTubers Choose ClipJust</h6>
              <div className="main-title">
                Everything You Need to Grow
                <br /> Your{" "}
                <span className="animation-text">Multi-Platform Presence</span>
              </div>
            </div>
          </div>
          {tools.map((tool, index) => (
            <div className="col-md-5" key={index}>
              <div
                className={`wg-tool wow fadeInUp`}
                data-wow-delay={tool.delay}
              >
                <div className={`icon ${tool.iconClass}`} />
                <h3>
                  <a href="#">{tool.title}</a>
                </h3>
                <p>{tool.description}</p>
                <div className="order">{tool.order}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
