"use client";
import { photoItems } from "@/data/workItems";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
const buttons = [
  { label: "Show All", filter: "*" },
  { label: "Tech", filter: ".tech" },
  { label: "Flowers", filter: ".flowers" },
  { label: "Architecture", filter: ".architecture" },
  { label: "Cartoon", filter: ".cartoon" },
];

export default function Filter() {
  const [currentFilter, setCurrentFilter] = useState("*");
  const isotopContainer = useRef();
  const isotope = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    isotope.current = new Isotope(isotopContainer.current, {
      itemSelector: ".element-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on("progress", function () {
      // Trigger Isotope layout
      isotope.current.layout();
    });
  };
  const updateCategory = (val) => {
    setCurrentFilter(val);
    isotope.current.arrange({
      filter: val,
    });
    //   isotope.value.layout();
  };
  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
  }, []);
  return (
    <div className="filter">
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center">
              <h6>AI Photo Gallery</h6>
              <div className="main-title">
                Explore AI Generate{" "}
                <span className="animation-text tf-color-blue">Photo</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="widget-filter-isotope">
              <div className="button-group filters-button-group">
                {buttons.map((elm, i) => (
                  <button
                    key={i}
                    onClick={() => updateCategory(elm.filter)}
                    className={`button ${
                      currentFilter == elm.filter ? "is-checked" : ""
                    }`}
                  >
                    {elm.label}
                  </button>
                ))}
              </div>
              <div ref={isotopContainer} className="grid">
                {photoItems.map((elm, i) => (
                  <div
                    key={i}
                    className={`element-item wow fadeInUp ${elm.category}`}
                  >
                    <div className="box-image">
                      <Image
                        src={elm.image}
                        width={410}
                        height={380}
                        alt="image"
                      />
                      <h4>
                        <a href="#">{elm.title}</a>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 mt-20">
            <a href="#" className="tf-button m-auto get-start style-blue">
              <span>Generate AI Image</span>
              <i className="icon-arrow-right2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
