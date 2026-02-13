"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksInterface {
  href: string;
  text: string;
}

const NavLinks = () => {
  const pathname = usePathname();

  console.log(pathname);

  const navLinksArray: NavLinksInterface[] = [
    { href: "/", text: "ホーム" },
    { href: "#", text: "マーケット" },
    { href: "#", text: "クリエイタ" },
    { href: "#", text: "コレクション" },
    { href: "#", text: "ブログ" },
  ];

  return (
    <ul className="flex items-center gap-x-10">
      {navLinksArray.map((item, i) => {
        const isActive = item.href === pathname;

        return (
          <li key={i} className="select-none">
            <Link
              href={item.href}
              className={`text-lg font-semibold ${
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
