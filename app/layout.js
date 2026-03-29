"use client";
import { useEffect } from "react";
import "../public/assets/css/main.css";

import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const path = usePathname();
  let wow = null;
  useEffect(() => {
    const { WOW } = require("wowjs");
    wow = new WOW({
      live: false,
      mobile: true,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
