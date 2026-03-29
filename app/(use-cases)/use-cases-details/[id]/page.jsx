import Cta from "@/components/common/Cta";

import Mouse from "@/components/common/Mouse";
import ScrollTop from "@/components/common/ScrollTop";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Faq from "@/components/use-cases/Faq";
import Features2 from "@/components/use-cases/Features2";
import Features3 from "@/components/use-cases/Features3";
import FlatTitle2 from "@/components/use-cases/FlatTitle2";
import Steps from "@/components/use-cases/Steps";
import Testimonials from "@/components/use-cases/Testimonials";
import { useCases } from "@/data/features";
export const metadata = {
  title: "Use Cases Details || MunAi - AI Writer & Copywriting Nextjs Template",
  description: "MunAi - AI Writer & Copywriting Nextjs Template",
};
import React from "react";

export default function page({ params }) {
  const useCaseItem =
    useCases.filter((elm) => elm.id == params.id)[0] || useCases[0];

  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <FlatTitle2 />
          <Features2 useCaseItem={useCaseItem} />
          <Steps />
          <Features3 />
          <Testimonials />

          <Faq />

          <Cta />

          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
