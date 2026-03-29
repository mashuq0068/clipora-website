import Cta from "@/components/common/Cta";
import Features from "@/components/about/Features";
import FlatTitle from "@/components/about/FlatTitle";
import Partners from "@/components/about/Partners";
import Team from "@/components/about/Team";
import Testimonials from "@/components/about/Testimonials";
import Tools from "@/components/about/Tools";
import VideoSection from "@/components/about/VideoSection";
import Mouse from "@/components/common/Mouse";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import React from "react";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "About Us || MunAi - AI Writer & Copywriting Nextjs Template",
  description: "MunAi - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <Features />
          <Tools />
          <Team />
          <Partners />
          <VideoSection />
          <Testimonials />
          <Cta />

          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
