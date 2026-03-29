import React from "react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Video",
      description: "Upload your YouTube video or simply paste a link. We support videos up to 4 hours long.",
      icon: "icon-upload",
    },
    {
      number: "02",
      title: "AI Finds Best Moments",
      description: "Our AI analyzes your video to find the most engaging clips with viral potential.",
      icon: "icon-setting",
    },
    {
      number: "03",
      title: "Download & Share",
      description: "Get clips with captions ready for TikTok, Instagram, LinkedIn, Facebook & more.",
      icon: "icon-share",
    },
  ];

  return (
    <div id="how-it-works" className="list-tool" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section text-center wow fadeInUp">
              <h6>How It Works</h6>
              <div className="main-title">
                From YouTube to Everywhere
                <br /> In Just{" "}
                <span className="animation-text">3 Simple Steps</span>
              </div>
            </div>
          </div>
          {steps.map((step, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="wg-tool wow fadeInUp text-center"
                data-wow-delay={`${index * 0.1}s`}
                style={{ padding: '40px 30px' }}
              >
                <div className={`icon ${step.icon}`} style={{ fontSize: '48px', marginBottom: '20px' }} />
                <div className="order" style={{ 
                  position: 'absolute', 
                  top: '20px', 
                  right: '20px',
                  fontSize: '60px',
                  fontWeight: '700',
                  opacity: 0.1
                }}>{step.number}</div>
                <h3 style={{ marginBottom: '15px' }}>
                  <a href="#">{step.title}</a>
                </h3>
                <p style={{ fontSize: '15px', lineHeight: '1.7' }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
