"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface NavLinksInterface {
  href: string;
  text: string;
}

const NavLinks = () => {
  const pathname = usePathname();
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootRef.current = document.documentElement;
  }, []);

  const navLinksArray: NavLinksInterface[] = [
    { href: "/", text: "ホーム" },
    { href: "/marketplace", text: "マーケット" },
    { href: "/creators", text: "クリエイタ" },
    { href: "/collection", text: "コレクション" },
    { href: "/blog", text: "ブログ" },
  ];

  return (
    <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
      {navLinksArray.map((item, i) => {
        const isActive = item.href === pathname;

        return (
          <li key={i} className="select-none w-full lg:w-auto">
            <Link
              href={item.href}
              onClick={() => {
                rootRef.current?.classList.add("overflow-auto");
                rootRef.current?.classList.remove("overflow-hidden");
              }}
              className={`text-lg font-semibold inline-block w-full lg:inline lg:w-auto text-center lg:text-start ${
                isActive
                  ? "text-[#a95bf3]"
                  : "text-[#f2f2f2] hover:text-[#c69bef] transition-all duration-200"
              }`}
            >
              {item.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
