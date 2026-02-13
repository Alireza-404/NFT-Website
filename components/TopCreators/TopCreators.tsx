"use client";

import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton";
import GlowBox from "../GlowBox/GlowBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface TopCreatorsInterface {
  id: number;
  src: string;
  username: string;
}

const TopCreators = () => {
  const container = useRef<null | HTMLDivElement>(null);

  const topCreatorsArray: TopCreatorsInterface[] = [
    {
      id: 1,
      src: "/images/TopCreators/creator-1.jpg",
      username: "桜井蓮",
    },
    {
      id: 2,
      src: "/images/TopCreators/creator-2.jpg",
      username: "高橋美咲",
    },
    {
      id: 3,
      src: "/images/TopCreators/creator-3.jpg",
      username: "中村翔",
    },
    {
      id: 4,
      src: "/images/TopCreators/creator-4.jpg",
      username: "山本奈々",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(self.selector(".box-1"), {
          opacity: 0,
          y: -100,
          x: -100,
          duration: 0.5,
          ease: "power3.out",
        })
          .from(
            self.selector(".box-4"),
            {
              opacity: 0,
              y: 100,
              x: 100,
              duration: 0.5,
              ease: "power3.out",
            },
            ">",
          )
          .from(
            self.selector(".box-2"),
            {
              opacity: 0,
              y: -100,
              duration: 0.5,
              ease: "power3.out",
            },
            ">",
          )
          .from(
            self.selector(".box-3"),
            {
              opacity: 0,
              y: 100,
              duration: 0.5,
              ease: "power3.out",
            },
            "<",
          );
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
                start: "bottom bottom",
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
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-4 lg:gap-6"
    >
      {topCreatorsArray.map((item) => (
        <div className={`box box-${item.id}`} key={item.id}>
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
  );
};

export default TopCreators;
