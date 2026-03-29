"use client";

import { worksItems } from "@/data/workItems";
import { useState } from "react";
import { EffectFade, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
const imageUrlsThumb = [
  "/assets/images/box-item/image-01.jpg",
  "/assets/images/box-item/image-02.jpg",
  "/assets/images/box-item/image-08.jpg",
  "/assets/images/box-item/image-05.jpg",
  "/assets/images/box-item/image-06.jpg",
  "/assets/images/box-item/image-07.jpg",
  // Add more image URLs if needed
];
const imageUrls = [
  "/assets/images/box-item/image-01.jpg",
  "/assets/images/box-item/image-02.jpg",
  "/assets/images/box-item/image-08.jpg",
  "/assets/images/box-item/image-05.jpg",
  "/assets/images/box-item/image-06.jpg",
  "/assets/images/box-item/image-07.jpg",
];
const swiperThumbOptions = {
  slidesPerView: 3,
  spaceBetween: 11,
  loop: true,
  modules: [Thumbs],
  slideToClickedSlide: true,
};
const swiperOptions2 = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  modules: [EffectFade, Thumbs],
  loopedslides: 4,
};
export default function Works() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="wg-works pb-130 pt-130">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center">
              <h6>How It Works</h6>
              <div className="main-title">
                How to Generate AI images <br />
                <span className="animation-text tf-color-blue">
                  in Any Project
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="widget-gallery-slider">
              <div className="gallery">
                <Swiper
                  watchSlidesProgress
                  onSwiper={setThumbsSwiper}
                  {...swiperThumbOptions}
                  className="swiper-item gallery-thumbs"
                >
                  {imageUrlsThumb.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Image width={270} height={270} src={elm} alt="image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  thumbs={{ swiper: thumbsSwiper }}
                  {...swiperOptions2}
                  className="swiper-item gallery-slider relative"
                >
                  {imageUrls.map((elm, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <Image width={270} height={270} src={elm} alt="image" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              {worksItems.map((item, index) => (
                <div
                  className={`works-item wow fadeInUp ${
                    index === worksItems.length - 1 ? "" : "mb-20"
                  }`}
                  key={index}
                >
                  <div className="number">{item.number}</div>
                  <h3>
                    <a href={item.link}>{item.title}</a>
                  </h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
