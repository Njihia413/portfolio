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
                  <div className="copyright-right text-center">
                    <p className="copyright-text mb-0">
                     Copyright © {new Date().getFullYear()} <span className="color-primary">Maureen Njihia</span> All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ScrollTop />
          </div>
        </div>
      </div>{" "}
    </>
  );
}
