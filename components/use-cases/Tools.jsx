import { tools3 } from "@/data/tools";
import React from "react";

export default function Tools() {
  return (
    <div className="list-tool">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp text-center">
              <h6>Create Amazing Design</h6>
              <div className="main-title">
                Why Choose MunAi AI Social
                <br />
                Media <span className="animation-text">Post Generator</span>
              </div>
            </div>
          </div>
          {tools3.map((tool, index) => (
            <div className="col-md-5" key={index}>
              <div className="wg-tool wow fadeInUp">
                <div className={`icon ${tool.icon}`} />
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
