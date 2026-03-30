"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Image from "next/image";
import Logo from "../common/Logo";

export default function Header1() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  // Track scroll for fixed header behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header_main" className="header header-fixed style-absolute">
      <div className="header-inner">
        <div id="site-logo">
          <div id="site-logo-inner">
            <Link
              href={`/`}
              rel="home"
              className="main-logo"
              data-testid="header-logo"
            >
              <Logo />
            </Link>
          </div>
        </div>

        {/* Desktop nav */}
        <nav id="main-nav" className="main-nav">
          <ul id="menu-primary-menu" className="menu-primary-menu">
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>

        {/* Header right */}
        <div className="header-right">
          <a href="#" className="sign-in" data-testid="header-signin-btn">
            Sign In
          </a>
          <a
            href="#"
            className="tf-button get-start h45"
            data-testid="header-get-started-btn"
          >
            <span>Get Started</span>
            <i className="icon-arrow-right2" />
          </a>
        </div>

        {/* Mobile toggle */}
        <div
          onClick={() => setIsMobileMenuActive(true)}
          className="mobile-button hidden"
        >
          <span />
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`mobile-nav-wrap ${isMobileMenuActive ? "active" : ""}`}>
        <div
          onClick={() => setIsMobileMenuActive(false)}
          className="overlay-mobile-nav"
        />
        <div className="inner-mobile-nav">
          <Link href={`/`} rel="home" className="main-logo">
            <Image
              id="mobile-logo_header"
              src="/assets/images/logo/logo.png"
              width={166}
              height={40}
              alt="Clipzen"
              data-retina="/assets/images/logo/logo@2x.png"
            />
          </Link>

          {/* Mobile nav close */}
          <div
            onClick={() => setIsMobileMenuActive(false)}
            className="mobile-nav-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="20px"
              height="20px"
              viewBox="0 0 122.878 122.88"
            >
              <g>
                <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" />
              </g>
            </svg>
          </div>

          {/* Mobile nav links */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
