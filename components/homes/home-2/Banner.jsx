import { imageSources } from "@/data/avaters";
import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="wg-banner-2">
      <div className="bg-item">
        <div className="item-1" />
        <div className="item-2" />
      </div>
      <div className="themesflat-container w1420">
        <div className="row">
          <div className="col-xl-5 col-12">
            <div className="content">
              <div className="title">
                Modern Coding
                <span className="animationtext letters rotate-3 animation-text">
                  <span className="cd-words-wrapper">
                    <span
                      className="item-text tf-color-green is-visible"
                      style={{ opacity: 1 }}
                    >
                      {"Superpower"
                        .split(" ")
                        .join("_")
                        .split("")
                        .map((elm, i) => (
                          <span
                            key={i}
                            className={`rorateLetterAnim ${
                              elm == "_" ? "blankSpan" : ""
                            }`}
                            style={{ animationDelay: i * 0.07 + "s" }}
                          >
                            {elm}
                          </span>
                        ))}
                    </span>
                  </span>
                </span>
              </div>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem <br />
                accusantium totam rem aperiam inventore
              </p>
              <div className="grid-button flex gap20 items-center mb-50">
                <a href="#" className="tf-button style-2">
                  <span>Request Free Demo</span>
                  <i className="icon-arrow-right2" />
                </a>
                <a href="#" className="tf-button style-2">
                  <span>Try For Free</span>
                  <i className="icon-arrow-right2" />
                </a>
              </div>
              <div className="avatar-wrapper flex-wrap">
                <p className="w-full">
                  25600+ People Use <span>MunAi</span>
                </p>
                <div className="wg-list-avatar w-full">
                  {imageSources.slice(0, 6).map((elm, i) => (
                    <a key={i} href="#">
                      <Image width={100} height={100} src={elm} alt="image" />{" "}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-12">
            <div className="image relative w-full h-full">
              <div className="item-3" />
              <div className="item-4" />
              <Image
                src="/assets/images/bg-section/image-07.png"
                alt="image"
                width={741}
                height={462}
                className="item-1"
              />
              <Image
                src="/assets/images/bg-section/image-06.png"
                alt="image"
                width={558}
                height={522}
                className="item-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
