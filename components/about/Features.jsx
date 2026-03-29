import { listItems } from "@/data/features";
import React from "react";
import Image from "next/image";

export default function Features() {
  return (
    <div className="wg-create-design style-5 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-md-6">
            <div className="image text-center wow fadeInUp">
              <Image
                src="/assets/images/bg-section/image-17.png"
                width={555}
                height={485}
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <div className="heading-section wow fadeInUp">
                <h6>Welcome to MunAi</h6>
                <div className="main-title">
                  All the Creative Tools you <br />
                  Need in <span className="animation-text">One Platform</span>
                </div>
              </div>
              <p className="">
                We denounce with righteous indignation and dislike men who are
                beguiled and demoralized by the charms of pleasure of the moment
                blinded desire that they cannot foresee and trouble
              </p>
              <ul className="list-item">
                {listItems.map((elm, i) => (
                  <li key={i}>
                    <i className="icon-tick" />
                    {elm.text}
                  </li>
                ))}
              </ul>
              <a href="#" className="tf-button type-1">
                <span>Generate AI Post</span>
                <i className="icon-arrow-right2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
