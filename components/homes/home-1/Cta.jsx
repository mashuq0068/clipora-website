import React from "react";

export default function Cta() {
  return (
    <div className="cta">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="cta-wrapper">
              <div className="ellipse item1" />
              <div className="ellipse item2" />
              <div className="ellipse item3" />
              <div className="ellipse item4" />
              <div className="cta-title">
                <h6>Ready to Go Everywhere?</h6>
                <h2>
                  Start Repurposing Your <br /> YouTube Videos{" "}
                  <span className="animation-text">Today!</span>
                </h2>
              </div>
              <div className="cta-content">
                <p>
                  Join thousands of YouTubers who are growing their audience <br />{" "}
                  across every platform with ClipJust
                </p>
                <div className="flex gap20">
                  <a href="#" className="tf-button style-1" data-testid="cta-get-started-btn">
                    Get Started Free <i className="icon-arrow-right2" />
                  </a>
                  <a href="#" className="tf-button style-1 active" data-testid="cta-contact-btn">
                    Contact Us <i className="icon-arrow-right2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
