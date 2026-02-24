"use client";

import Link from "next/link";
import GlowBox from "../GlowBox/GlowBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { BlogData } from "@/data/Blog/Blog";

gsap.registerPlugin(ScrollTrigger);

const BlogItems = () => {
  const container = useRef<null | HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.from(self.selector(".box"), {
          opacity: 0,
          y: 100,
          duration: 0.3,
          stagger: 0.2,
          delay: 0.3,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLDivElement>(".box").forEach((box, i) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: box,
                start: "bottom bottom",
                toggleActions: "play none none reverse",
              },
            })
            .from(box, {
              opacity: 0,
              x: i % 2 === 0 ? -100 : 100,
              y: 0,
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
      className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-4 lg:gap-6 overflow-hidden"
    >
      {BlogData.map((item) => (
        <div className={`box box-${item.id}`} key={item.id}>
          <GlowBox className="rounded-md" childrenParentClassName="rounded-md">
            <div className="p-4 flex flex-col gap-y-2">
              <img
                src={item.src}
                alt={`Latest Blog _ Image ${item.id}`}
                className="block mx-auto select-none"
              />

              <span
                className="text-[#a159f3] hover:text-[#6b48f5] cursor-pointer transition-colors duration-200
                text-xl tracking-widest font-mono"
              >
                {item.type}
              </span>

              <h3 className="text-[#f2f2f2] font-bold text-[26px] lg:text-[22px]">
                <Link href={"#"}>{item.title}</Link>
              </h3>
            </div>
          </GlowBox>
        </div>
      ))}

      {[...BlogData.reverse()].map((item) => (
        <div className={`box box-${item.id}`} key={item.id}>
          <GlowBox className="rounded-md" childrenParentClassName="rounded-md">
            <div className="p-4 flex flex-col gap-y-2">
              <img
                src={item.src}
                alt={`Latest Blog _ Image ${item.id}`}
                className="block mx-auto select-none hue-rotate-180"
              />

              <span
                className="text-[#a159f3] hover:text-[#6b48f5] cursor-pointer transition-colors duration-200
                text-xl tracking-widest font-mono"
              >
                {item.type}
              </span>

              <h3 className="text-[#f2f2f2] font-bold text-[26px] lg:text-[22px]">
                <Link href={"#"}>{item.title}</Link>
              </h3>
            </div>
          </GlowBox>
        </div>
      ))}
    </div>
  );
};

export default BlogItems;
