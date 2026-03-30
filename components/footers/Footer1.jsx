"use client";
import { imageSources } from "@/data/avaters";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { socialMediaIcons } from "@/data/socials";
import Logo from "../common/Logo";

export default function Footer1() {
  const productLinks = ["Features", "Pricing", "How It Works", "API"];
  const companyLinks = ["About Us", "Blog", "Careers", "Contact"];
  const resourceLinks = ["Help Center", "Tutorials", "Changelog", "Status"];

  return (
    <footer id="footer">
      <Image
        className="item1 block-star"
        src="/assets/images/item-background/start.png"
        width={100}
        height={100}
        alt="image"
      />
      <div className="item2 block-blur-1" />
      <div className="item3 block-blur-2" />
      <div className="item4 block-blur-3" />
      <div className="item5 block-blur-4" />
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top">
              <div className="logo-footer" id="logo-footer">
                <Link href={`/`}>
                   <Logo isBlack={false}/>
                </Link>
              </div>
              <div className="avatar-wrapper">
                <p>
                  10,000+ Creators Use <span>Clipzen</span>
                </p>
                <div className="wg-list-avatar">
                  {imageSources.map((elm, i) => (
                    <a key={i} href="#">
                      <Image width={100} height={100} src={elm} alt="Creator" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-title">About</div>
            <p className="text">
              Clipzen helps YouTubers repurpose their <br /> long-form content into viral shorts
              for every social platform automatically.
            </p>
            <ul className="wg-social">
              {socialMediaIcons.map((icon, index) => (
                <li key={index}>
                  <a href={icon.href} className={icon.className} />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-2">
            <div className="footer-title ml-35">Product</div>
            <ul className="wg-menu ml-35">
              {productLinks.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-2">
            <div className="footer-title">Company</div>
            <ul className="wg-menu">
              {companyLinks.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-2">
            <div className="footer-title ml--3">Resources</div>
            <ul className="wg-menu ml--3">
              {resourceLinks.map((item, index) => (
                <li key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3">
            <div className="footer-title ml--3">Newsletter</div>
            <p className="text" style={{ marginBottom: '15px' }}>
              Get tips on video repurposing & platform growth
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="comment-form mt-20 ml--3"
            >
              <fieldset className="email">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="style-1 mb-10"
                  name="email"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required
                  data-testid="footer-email-input"
                />
              </fieldset>
              <div className="">
                <button className="" type="submit" data-testid="footer-subscribe-btn">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="col-12">
            <div className="footer-bottom">
              <p className="text mb-0">
                Copyright @{new Date().getFullYear()},{" "}
                <a className="tf-color" href="#">
                  Clipzen
                </a>{" "}
                All Rights Reserved
              </p>
              <ul className="">
                <li>
                  <a href="#">Terms Of Use </a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
