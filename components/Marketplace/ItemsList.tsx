"use client";

import gsap from "gsap";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";

import { MarketplaceTypes } from "@/Types/Marketplace";
import { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  filteredItems: MarketplaceTypes[];
}

const ItemsList = ({ filteredItems }: Props) => {
  const container = useRef<any>(null);
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [snapCount, setSnapCount] = useState<number>(0);

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      gsap.from(self.selector(".box"), {
        scrollTrigger: {
          trigger: container.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },

        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.2,
      });
    }, container);

    return () => ctx.revert();
  }, [filteredItems]);

  return (
    <div className="w-full" ref={container}>
      <Swiper
        modules={[Pagination]}
        spaceBetween={12}
        slidesPerView={1}
        slidesPerGroup={1}
        watchSlidesProgress
        breakpoints={{
          768: {
            spaceBetween: 24,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            spaceBetween: 12,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1100: {
            spaceBetween: 32,
            slidesPerView: 3,
            slidesPerGroup: 3,
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
        {filteredItems.map((item: MarketplaceTypes, i: number) => (
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

      <div className="flex items-center justify-center mt-8 lg:mt-10 gap-x-2.5">
        <div className="flex items-center justify-center mt-16 gap-x-2.5">
          {swiperRef.current &&
            Array.from({
              length: Math.ceil(
                filteredItems.length /
                  (swiperRef.current.params.slidesPerGroup as number),
              ),
            }).map((_, groupIndex) => {
              const slidesPerGroup = swiperRef.current.params
                .slidesPerGroup as number;
              const startSlide = groupIndex * slidesPerGroup;
              const endSlide = Math.min(
                startSlide + slidesPerGroup - 1,
                filteredItems.length - 1,
              );

              const isLastGroup =
                groupIndex ===
                Math.ceil(filteredItems.length / slidesPerGroup) - 1;
              const isActive = isLastGroup
                ? activeIndex >= startSlide
                : activeIndex >= startSlide && activeIndex <= endSlide;

              return (
                <div
                  key={groupIndex}
                  className={`w-6 h-6 rounded-full cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#a95bf3]"
                      : "border border-[#f2f2f2] opacity-50"
                  }`}
                  onClick={() => swiperRef.current?.slideTo(startSlide)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
