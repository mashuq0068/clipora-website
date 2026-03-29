import { pricingPlans } from "@/data/pricing";
import React from "react";

export default function Pricing() {
  return (
    <div id="pricing" className="wg-pricing">
      <div className="item1 block-blur-1" />
      <div className="item2 block-blur-2" />
      <div className="item3 block-blur-3" />
      <div className="item4 block-blur-4" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>Simple Pricing</h6>
              <div className="main-title">
                Choose the Plan That Fits <br />
                Your <span className="animation-text">Content Goals</span>
              </div>
            </div>
          </div>
          {pricingPlans.map((plan, index) => (
            <div className="col-md-4" key={index}>
              <div className="pricing-item">
                <h3>{plan.title}</h3>
                <p>{plan.description}</p>
                <div className="number-price">
                  {plan.price}
                  <span>/{plan.period}</span>
                </div>
                <a href={plan.link} className="tf-button type-2" data-testid={`pricing-${plan.title.toLowerCase()}-btn`}>
                  <span>Get Started</span>
                  <i className="icon-arrow-right2" />
                </a>
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className={feature.icon} />
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
