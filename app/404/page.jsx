import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cta from "@/components/homes/home-1/Cta";

import Mouse from "@/components/common/Mouse";
import Link from "next/link";
import Image from "next/image";
import ScrollTop from "@/components/common/ScrollTop";
export const metadata = {
  title: "404 Page || MunAi - AI Writer & Copywriting Nextjs Template",
  description: "MunAi - AI Writer & Copywriting Nextjs Template",
};
export default function Home() {
  return (
    <>
      <div id="wrapper">
        <div id="page" className="">
          <Header1 />
          <>
            {/* flat-title-page */}
            <div className="flat-title-page">
              <div className="item1 block-blur-1" />
              <div className="item2 block-blur-2" />
              <div className="item3 block-blur-3" />
              <div className="item4 block-blur-4" />
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading">404</div>
                    <ul className="breadcrumbs">
                      <li className="icon-arrow-right relative">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="active">
                        <a href="#">404 Error</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /flat-title-page */}
            {/* 404-page */}
            <div className="page-404-wrap pb-130 pt-130">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-5">
                    <div className="content">
                      <div className="heading-section wow fadeInUp">
                        <div className="main-title">
                          Sorry! <br />
                          This Page Can’t <br />
                          Be <span className="animation-text">Found</span>
                        </div>
                      </div>
                      <p>
                        Ut enim ad minima veniam, quis nostrum corporis suscipit
                        laboriosam nisi ut aliquid exea
                      </p>
                      <Link href="/" className="tf-button">
                        <span>Go To Home</span>
                        <i className="icon-arrow-right2" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <Image
                      width={651}
                      height={424}
                      src="/assets/images/bg-section/404.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /404-page */}
          </>

          <Cta />
          <Footer1 />
        </div>
      </div>
      <Mouse />
      <ScrollTop />
    </>
  );
}
