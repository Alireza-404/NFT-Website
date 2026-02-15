"use client";

import Link from "next/link";
import gsap from "gsap";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface CollectionsArrayInterface {
  id: number;
  src: string;
}

gsap.registerPlugin(ScrollTrigger);

const Collections2 = () => {
  const container = useRef<null | HTMLDivElement>(null);

  const collectionsArray: CollectionsArrayInterface[] = [
    { id: 1, src: "/images/Collections-2/collection-1.jpg" },
    { id: 2, src: "/images/Collections-2/collection-2.jpg" },
    { id: 3, src: "/images/Collections-2/collection-3.jpg" },
    { id: 4, src: "/images/Collections-2/collection-4.jpg" },
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
          y: 100,
          x: -100,
          duration: 0.4,
          ease: "power3.out",
        })
          .from(
            self.selector(".box-4"),
            {
              opacity: 0,
              y: -100,
              x: 100,
              duration: 0.4,
              ease: "power3.out",
            },
            ">",
          )
          .from(
            self.selector(".box-2"),
            {
              opacity: 0,
              y: -100,
              duration: 0.4,
              ease: "power3.out",
            },
            ">",
          )
          .from(
            self.selector(".box-3"),
            {
              opacity: 0,
              y: 100,
              duration: 0.4,
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
      className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:grid-cols-4 lg:gap-6"
    >
      {collectionsArray.map((item) => (
        <motion.div
          key={item.id}
          className={`box box-${item.id} rounded-full p-0.5`}
          style={{
            background:
              "linear-gradient(to top left, #6847f5, #a95bf3, #5baff3, #f3ee5b)",
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
        </motion.div>
      ))}
    </div>
  );
};

export default Collections2;
