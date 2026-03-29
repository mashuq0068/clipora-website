import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import ContactInfo from "@/components/contact/ContactInfo";
import FlatTitle from "@/components/contact/FlatTitle";
import Map from "@/components/contact/Map";
import Message from "@/components/contact/Message";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
export const metadata = {
  title: "Contact Us || MunAi - AI Writer & Copywriting Nextjs Template",
  description: "MunAi - AI Writer & Copywriting Nextjs Template",
};
import React from "react";

export default function page() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle />
          <ContactInfo />
          <Message />
          <Map />

          <Cta />

          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
