import React from "react";
import ScrollTop from "./common/ScrollTop";

export default function Footer() {
  return (
    <>
      <div className="tmp-footer-area-style-net tmp-section-gapTop">
        <div className="footer-style-3">
          <div className="copyright-style-net">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="copyright-right d-flex justify-content-between align-items-center">
                    <div style={{ width: "40px" }} className="d-none d-lg-block"></div>
                    <p className="copyright-text mb-0 text-center grow">
                     Copyright © {new Date().getFullYear()} <span className="color-primary">Maureen Njihia</span> All rights reserved.
                    </p>
                    <ScrollTop />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
