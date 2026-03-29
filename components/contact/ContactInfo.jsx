import { contactLinks } from "@/data/contactLinks";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="contact-info pt-130">
      <div className="themesflat-container">
        <div className="row">
          {contactLinks.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div
                className="wg-helpful style-1 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="image">
                  <div className="icon">
                    <span className={item.iconClass} />
                  </div>
                </div>
                <h6>
                  <a href={item.link}>{item.title}</a>
                </h6>
                <p>
                  {item.description.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
