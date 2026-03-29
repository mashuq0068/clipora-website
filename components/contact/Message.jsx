"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Message() {
  const form = useRef();

  const sandMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_noj8796", "template_fs3xchn", form.current, {
        publicKey: "iG4SCmR-YtJagQ4gV",
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Message Sent successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          form.current.reset();
        } else {
          toast.error("Ops Message not Sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div className="box-messages">
      <div className="themesflat-container">
        <div className="row justify-center">
          <div className="col-12">
            <div className="heading-section wow fadeInUp style-2 text-center">
              <h6>Get In Touch</h6>
              <div className="main-title">
                Send Us{" "}
                <span className="animation-text tf-color">Messages</span>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="widget-reply wow fadeInUp">
              <form ref={form} onSubmit={sandMail} className="comment-form">
                <div className="columns flex justify-between gap20">
                  <fieldset className="name">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="mb-20"
                      name="name"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset className="email">
                    <input
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="mb-20"
                      name="email"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                </div>
                <div className="columns flex justify-between gap20">
                  <fieldset className="website">
                    <input
                      type="text"
                      placeholder="Website"
                      className="mb-20"
                      name="website"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <select name="" id="">
                      <option value="Subject">Subject</option>
                      <option value="Subject">AI</option>
                      <option value="Subject">Media</option>
                    </select>
                  </fieldset>
                </div>
                <fieldset className="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Message"
                    className="mb-20"
                    tabIndex={4}
                    aria-required="true"
                    required
                    defaultValue={""}
                  />
                </fieldset>
                <div className="text-center">
                  <button className="" type="submit">
                    Send Us Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
