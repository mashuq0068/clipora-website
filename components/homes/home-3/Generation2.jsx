"use client";
import { worksItems3 } from "@/data/workItems";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Works2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="wg-works-1 pb-130 pt-130">
        <div className="themesflat-container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section wow fadeInUp style-2 text-center">
                <h6>Online Generation</h6>
                <div className="main-title">
                  Make the Most Artificial Intelligence <br />
                  AI Image{" "}
                  <span className="animation-text tf-color-blue">
                    Generate Features
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="content">
                {worksItems3.map((elm, i) => (
                  <div
                    key={i}
                    className="works-item style-1 mb-10 wow fadeInUp"
                  >
                    <h3>
                      <a href="#">{elm.title}</a>
                    </h3>
                    <p>{elm.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="video-wrap style-1 wow fadeInUp">
                <Image
                  src="/assets/images/bg-section/image-15.png"
                  width={585}
                  height={440}
                  alt="image"
                />
                <a onClick={() => setOpen(true)} className="popup-youtube">
                  <div className="icon">
                    <i className="icon-play" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="Y8XpQpW5OVY"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
