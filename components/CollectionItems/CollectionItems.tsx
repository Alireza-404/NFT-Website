"use client";

import gsap from "gsap";
import Link from "next/link";

import { Collections2Data_Collection } from "@/Data/Collections-2";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CollectionItems = () => {
  const container = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.from(self.selector(".box"), {
          y: 100,
          opacity: 0,
          ease: "power3.out",
          delay: 0.3,
          duration: 0.5,
          stagger: 0.2,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLDivElement>(".box").forEach((box, i) => {
          gsap.from(self.selector(box), {
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              toggleActions: "play none none reverse",
            },

            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            ease: "power3.out",
            duration: 0.5,
            stagger: 0.2,
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-4"
    >
      {Collections2Data_Collection.map((item) => (
        <div
          key={item.id}
          className={`box box-${item.id} rounded-full p-0.5`}
          style={{
            background: `linear-gradient(to top left, ${
              item.id === 1 || item.id === 3 || item.id === 6 || item.id === 8
                ? "#478af5, #f29e5a, #5bdff3, #d75bf3"
                : "#5baff3, #a95bf3, #6847f5, #f3ee5b"
            })`,
          }}
        >
          <div
            key={item.id}
            className="bg-[#161929] px-9 pt-9 pb-16 rounded-full
              flex flex-col gap-y-6"
          >
            <img
              src={item.src}
              alt={`Collections 2 _ Image ${item.id}`}
              className="rounded-full select-none"
            />

            <div className="flex flex-col gap-y-3">
              <h3 className="text-[#f2f2f2] font-bold text-[26px] lg:text-[22px] text-center">
                不具合コレクション
              </h3>

              <button
                className="relative text-[#a159f3] hover:text-[#6b48f5] cursor-pointer transition-colors duration-200
                  mx-auto inline-block bg-transparent"
              >
                <Link href={"#"}>コレクションを見る</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionItems;
