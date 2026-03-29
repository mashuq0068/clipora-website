import React from "react";
import Image from "next/image";
export default function Features2({ useCaseItem }) {
  return (
    <div className="wg-create-design style-7 pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>{useCaseItem.title}</h6>
                <div className="main-title">
                  Generate High-Quality <br />
                  Posts in just Minutes
                </div>
              </div>
              <p className="">
                We denounce with righteous indignation and dislike men who are
                beguiled and demoralized by the charms of pleasure of the moment
                blinded desire that they cannot foresee and trouble
              </p>
              <a href="#" className="tf-button type-1 mb-30">
                <span>Generate AI Post</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="image wow fadeInUp">
              <Image
                className="w-full"
                src="/assets/images/bg-section/image-18.png"
                alt="image"
                width={530}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
