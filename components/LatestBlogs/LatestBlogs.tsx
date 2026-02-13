"use client";

import Link from "next/link";
import GlowBox from "../GlowBox/GlowBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

interface LatestBlogsInterface {
  id: number;
  src: string;
  type: string;
  title: string;
}

gsap.registerPlugin(ScrollTrigger);

const LatestBlogs = () => {
  const container = useRef<null | HTMLDivElement>(null);

  const latestBlogsArray: LatestBlogsInterface[] = [
    {
      id: 1,
      src: "/images/LatestBlogs/blog-1.jpg",
      type: "Art",
      title: "トップアーティストによる最高のNFTアートコレクション",
    },
    {
      id: 2,
      src: "/images/LatestBlogs/blog-2.jpg",
      type: "Design",
      title: "トップアーティストによる最高のNFTアートコレクション",
    },
    {
      id: 3,
      src: "/images/LatestBlogs/blog-3.jpg",
      type: "NFT",
      title: "トップアーティストによる最高のNFTアートコレクション",
    },
    {
      id: 4,
      src: "/images/LatestBlogs/blog-4.jpg",
      type: "Arts",
      title: "トップアーティストによる最高のNFTアートコレクション",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "bottom bottom",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(self.selector(".box"), {
          opacity: 0,
          y: 100,
          duration: 0.3,
          stagger: 0.15,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        const boxes = [
          { selector: ".box-1", x: -100 },
          { selector: ".box-3", x: -100 },
          { selector: ".box-2", x: 100 },
          { selector: ".box-4", x: 100 },
        ];

        boxes.forEach(({ selector, x }) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: container.current?.querySelector(selector),
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            })
            .from(selector, {
              opacity: 0,
              x,
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
      {latestBlogsArray.map((item) => (
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
    </div>
  );
};

export default LatestBlogs;
