"use client";
import { testimonials3 } from "@/data/testimonials";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function Testimonials() {
  return (
    <section className="testimonial-area rpp-banner-two-area tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Testimonials</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Voices From My Professional Journey
          </h2>
        </div>
        <div className="row g-5">
          {/* Start Single Testimonial  */}
          <div className="col-lg-12">
            <div className="swiper-testimonials-area-wrapper-card">
              <Swiper
                className="swiper swiper-testimonials-2"
                {...{
                  slidesPerView: 2,
                  spaceBetween: 30,
                  navigation: {
                    nextEl: ".project-swiper-button-next",
                    prevEl: ".project-swiper-button-prev",
                  },
                  loop: true,
                  autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  },
                  breakpoints: {
                    0: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 2,
                    },
                  },
                }}
                modules={[Navigation, Autoplay]}
              >
                {testimonials3.map((testimonial, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div
                      className={`testimonial-card tmponhover style-2 tmp-scroll-trigger animation-order-${testimonial.animationOrder}`}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="content">
                        <div className="testimonital-icon">
                          <Image
                            alt="testimonial-icon"
                            width={70}
                            height={61}
                            src="/assets/images/testimonial-icon.svg"
                          />
                        </div>
                        <h2 className="text-doc">{testimonial.text}</h2>
                        <h3 className="card-title">{testimonial.name}</h3>
                        <p className="card-para">{testimonial.role}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* End Single Testimonial  */}
        </div>
      </div>
    </section>
  );
}
