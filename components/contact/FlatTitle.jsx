import React from "react";
import Link from "next/link";
export default function FlatTitle() {
  return (
    <div className="flat-title-page shop">
      <div className="item1 block-blur-1"></div>
      <div className="item2 block-blur-2"></div>
      <div className="item3 block-blur-3"></div>
      <div className="item4 block-blur-4"></div>
      <div className="themesflat-container">
        <div className="row">
          <div className="col-12">
            <div className="heading">Contact Us</div>
            <ul className="breadcrumbs">
              <li className="icon-arrow-right relative">
                <Link href={`/`}>Home</Link>
              </li>
              <li className="active">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
