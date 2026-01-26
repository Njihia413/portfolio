"use client";
import React, { useRef, useTransition } from "react";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendEmail(formData);

      if (result.success) {
        toast.success("Message Sent successfully!", {
          duration: 5000,
        });
        form.current?.reset();
      } else {
        toast.error(result.error || "Ops Message not Sent!", {
          duration: 5000,
        });
      }
    });
  };

  return (
    <div
      id="contact"
      className="rpp-banner-two-area tmp-section-gapBottom"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head text-center mb--50">
              <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle">Contact Me</span>
              </div>
              <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                Let&apos;s Talk About Your Project
              </h2>
            </div>
          </div>
        </div>
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="section-head text-align-left">
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                    Expertise & Commitment
                  </h2>
                  <p className="description available-for-text tmp-scroll-trigger tmp-fade-in animation-order-3">
                    I&apos;m dedicated to building high-quality digital products that combine technical excellence with exceptional user experience. My approach focuses on:
                  </p>
                  <ul className="description available-services-list tmp-scroll-trigger tmp-fade-in animation-order-3">
                    <li>
                      <span className="icon">
                        <i className="fa-regular fa-check-circle" />
                      </span>
                      <span>Scalable & Maintainable Code</span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fa-regular fa-check-circle" />
                      </span>
                      <span>Modern & Responsive UI/UX</span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fa-regular fa-check-circle" />
                      </span>
                      <span>Performance & SEO Optimization</span>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fa-regular fa-check-circle" />
                      </span>
                      <span>User-Centric Web Solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <div id="form-messages" className="error" />
                      <form
                        className="tmp-dynamic-form"
                        id="contact-form"
                        ref={form}
                        onSubmit={handleSubmit}
                      >
                        <div className="contact-form-wrapper row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="name"
                                id="contact-name"
                                placeholder="Your Name"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                id="contact-email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <input
                                className="input-field"
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea
                                className="input-field"
                                placeholder="Your Message"
                                name="message"
                                id="contact-message"
                                required
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="tmp-button-here">
                              <button
                                className="tmp-btn hover-icon-reverse w-100 btn-hover-outline"
                                name="submit"
                                type="submit"
                                id="submit"
                                disabled={isPending}
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">
                                    {isPending ? "Sending..." : "Send Message"}
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-paper-plane" />
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-paper-plane" />
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
