import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import Banner from "@/components/homes/home-3/Banner";
import Generation from "@/components/homes/home-3/Generation";
import Faq from "@/components/homes/home-3/Faq";
import PhotoGallery from "@/components/homes/home-3/PhotoGallery";
import Blogs from "@/components/homes/home-3/Blogs";
import Partners from "@/components/homes/home-3/Partners";
import Pricing from "@/components/homes/home-3/Pricing";
import Works from "@/components/homes/home-3/Works";
import Generation2 from "@/components/homes/home-3/Generation2";
import React from "react";
import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "Home 3 || MunAi - AI Writer & Copywriting Nextjs Template",
  description: "MunAi - AI Writer & Copywriting Nextjs Template",
};
export default function page() {
  return (
    <div className="page-blue">
      <div id="wrapper">
        <Header3 />
        <Banner />
        <Works />
        <PhotoGallery />
        <Generation />
        <Generation2 />
        <Pricing />
        <Faq />
        <Blogs />
        <Partners />
        <Footer3 />
      </div>
      <Mouse />
      <ScrollTop />
    </div>
  );
}
