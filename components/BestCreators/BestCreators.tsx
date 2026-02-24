"use client";

import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton";
import GlowBox from "../GlowBox/GlowBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { TopCreatorsData } from "@/data/TopCreators/TopCreators";

gsap.registerPlugin(ScrollTrigger);

const BestCreators = () => {
  const container = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", delay: 0.3 },
        });

        tl.from(self.selector(".row-1 .box"), {
          y: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        }).from(self.selector(".row-2 .box"), {
          y: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLDivElement>(".row-1 .box").forEach((box, i) => {
          gsap.from(box, {
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: i % 2 === 0 ? -100 : 100,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        gsap.utils.toArray<HTMLDivElement>(".row-2 .box").forEach((box, i) => {
          gsap.from(box, {
            scrollTrigger: {
              trigger: box,
              start: "bottom bottom",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            x: i % 2 === 0 ? -100 : 100,
            duration: 0.5,
            ease: "power3.out",
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="flex flex-col gap-8 sm:gap-4 md:gap-8 lg:gap-6"
    >
      <div className="row-1 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-4 lg:gap-6">
        {TopCreatorsData.map((item, i) => (
          <div className={`box box-${i + 1}`} key={item.id}>
            <GlowBox
              key={item.id}
              className="h-80 rounded-xl"
              childrenParentClassName="rounded-xl"
            >
              <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
                <img
                  src={item.src}
                  alt={`Top Creator ${item.id}`}
                  className="rounded-full select-none"
                  loading="lazy"
                />

                <h3 className="text-[#f2f2f2] font-bold text-[26px]">
                  {item.username}
                </h3>

                <PrimaryButton
                  type="button"
                  className="h-12 w-42 rounded-xl mt-3"
                >
                  <Link
                    href={"#"}
                    className="w-full h-full flex items-center justify-center"
                  >
                    詳細を見る
                  </Link>
                </PrimaryButton>
              </div>
            </GlowBox>
          </div>
        ))}
      </div>

      <div className="row-2 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-4 lg:gap-6">
        {[...TopCreatorsData].reverse().map((item, i) => (
          <div className={`box box-${i + 1}`} key={item.id}>
            <GlowBox
              key={item.id}
              className="h-80 rounded-xl"
              childrenParentClassName="rounded-xl"
            >
              <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
                <img
                  src={item.src}
                  alt={`Top Creator ${item.id}`}
                  className="rounded-full select-none hue-rotate-180"
                  loading="lazy"
                />

                <h3 className="text-[#f2f2f2] font-bold text-[26px]">
                  {item.username}
                </h3>

                <PrimaryButton
                  type="button"
                  className="h-12 w-42 rounded-xl mt-3"
                >
                  <Link
                    href={"#"}
                    className="w-full h-full flex items-center justify-center"
                  >
                    詳細を見る
                  </Link>
                </PrimaryButton>
              </div>
            </GlowBox>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCreators;
