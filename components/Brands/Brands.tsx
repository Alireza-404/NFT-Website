"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(self.selector(".img"), {
          opacity: 0,
          y: 100,
          duration: 0.3,
          stagger: 0.15,
        });
      });

      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(self.selector(".img-1, .img-2, .img-3"), {
          opacity: 0,
          y: 100,
          duration: 0.3,
          stagger: 0.15,
        })
          .from(self.selector(".img-4"), {
            opacity: 0,
            x: -100,
          })
          .from(
            self.selector(".img-5"),
            {
              opacity: 0,
              x: 100,
            },
            "<",
          );
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(self.selector(".img-1"), {
          opacity: 0,
          y: 100,
          duration: 0.3,
          stagger: 0.15,
        })
          .from(self.selector(".img-4, .img-2"), {
            opacity: 0,
            x: -100,
          })
          .from(
            self.selector(".img-5, .img-3"),
            {
              opacity: 0,
              x: 100,
            },
            "<",
          );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={container}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center py-24"
    >
      <img
        src={"/images/Brands/brand-1.png"}
        alt="Brand-1"
        className="img img-1 w-10/12 sm:w-70 col-span-2 md:col-span-1 select-none"
      />
      <img
        src={"/images/Brands/brand-2.png"}
        alt="Brand-2"
        className="img img-2 block mx-auto select-none"
      />
      <img
        src={"/images/Brands/brand-3.png"}
        alt="Brand-3"
        className="img img-3 block mx-auto select-none"
      />
      <img
        src={"/images/Brands/brand-4.png"}
        alt="Brand-4"
        className="img img-4 block mx-auto md:mx-0 select-none"
      />
      <img
        src={"/images/Brands/brand-5.png"}
        alt="Brand-5"
        className="img img-5 block mx-auto md:col-span-2 md:mr-2 lg:col-span-1 select-none"
      />
    </div>
  );
};

export default Brands;
