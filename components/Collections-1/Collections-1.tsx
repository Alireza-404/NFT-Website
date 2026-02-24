"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Collection1Data_Home } from "@/data/Collections-1/Collections-1";

import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const Collections1 = () => {
  const container = useRef<any>(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [snapCount, setSnapCount] = useState<number>(0);

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      gsap.set(paginationRef.current, {
        perspective: 1000,
        transformStyle: "preserve-3d",
      });

      gsap.from(self.selector(".box"), {
        scrollTrigger: {
          trigger: container.current,
          start: "bottom bottom",
          toggleActions: "play none none reverse",
        },

        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.from(paginationRef.current, {
        scrollTrigger: {
          trigger: paginationRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },

        opacity: 0,
        scale: 0.3,
        z: -180,
        duration: 0.8,
        ease: "back.out(1.6)",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full" ref={container}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={1}
        watchSlidesProgress
        breakpoints={{
          768: {
            spaceBetween: 24,
            slidesPerView: 2,
          },
          1024: {
            spaceBetween: 12,
            slidesPerView: 3,
          },

          1100: {
            spaceBetween: 32,
            slidesPerView: 3,
          },
        }}
        grabCursor
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSnapCount(swiper.snapGrid.length);
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onResize={(swiper) => {
          setSnapCount(swiper.snapGrid.length);
          setActiveIndex(swiper.snapIndex);
        }}
      >
        {Collection1Data_Home.map((item, i) => (
          <SwiperSlide key={i} className="box relative pb-22">
            <img
              src={item.src}
              alt={`Collection Image ${item.id}`}
              className="rounded-lg w-full h-124 object-cover select-none"
            />

            <div
              className="w-11/12 p-5 absolute bottom-0 left-1/2 -translate-x-1/2 rounded-xl bg-[#f2f2f2]
                flex flex-col gap-y-2 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-x-2">
                <h3 className="text-[#04040c] text-lg font-extrabold">
                  {item.title}
                </h3>

                <span className="text-[#04040c] text-lg font-extrabold">
                  {item.ETH}
                </span>
              </div>

              <div className="flex items-center gap-x-3">
                <img
                  src={item.creatorSrc}
                  alt={`Creator Profile ${item.id}`}
                  className="w-11 h-11 rounded-full select-none"
                />

                <span className="text-[#04040c] text-xl">{item.creator}</span>
              </div>

              <PrimaryButton type="button" className="w-full h-12 rounded-xl">
                <Link
                  href={"#"}
                  className="w-full h-full flex items-center justify-center"
                >
                  入札する
                </Link>
              </PrimaryButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={paginationRef}
        className="flex items-center justify-center mt-16 gap-x-2.5"
      >
        {Array.from({ length: snapCount }).map((_, index) => (
          <div
            key={index}
            className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
              activeIndex === index
                ? "bg-[#a95bf3]"
                : "border border-[#f2f2f2] opacity-50"
            }`}
            onClick={() => swiperRef.current?.slideTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections1;
