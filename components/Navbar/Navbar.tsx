"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "../NavLinks/NavLinks";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootRef.current = document.documentElement;
  }, []);

  const openMenu = () => {
    setIsMenuActive(true);
    rootRef.current?.classList.add("overflow-hidden");
    rootRef.current?.classList.remove("overflow-auto");
  };

  const closeMenu = () => {
    setIsMenuActive(false);
    rootRef.current?.classList.add("overflow-auto");
    rootRef.current?.classList.remove("overflow-hidden");
  };

  return (
    <>
      <motion.nav
        className="h-30 w-full flex lg:hidden items-center justify-between"
        viewport={{ once: true }}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img
          src="/images/Header/logo.png"
          alt="Main-Logo"
          loading="lazy"
          className="select-none"
        />

        <FiMenu
          className="text-[#f2f2f2] text-3xl cursor-pointer"
          onClick={openMenu}
        />
      </motion.nav>

      <AnimatePresence>
        {isMenuActive && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-80 xs:w-96 md:w-104 fixed top-0 bottom-0 right-0 
            bg-[#04040c] z-50 p-5 lg:hidden flex flex-col gap-y-12"
          >
            <div className="flex items-center justify-between">
              <h5 className="text-[#f2f2f2] text-lg font-semibold">メニュー</h5>

              <span
                className="py-1 cursor-pointer text-red-500"
                onClick={closeMenu}
              >
                <FiX className="text-[26px]" />
              </span>
            </div>

            <NavLinks />

            <div className="grid grid-cols-2 gap-3 mt-5">
              <PrimaryButton type="button" className="h-12">
                <Link href="#">ログイン</Link>
              </PrimaryButton>

              <SecondaryButton type="button" className="h-12 p-px">
                <Link href="#">新規登録</Link>
              </SecondaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/55 lg:hidden transition-opacity
          ${isMenuActive ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <motion.nav
        className="h-34 w-full hidden lg:flex items-center justify-between xl:px-10"
        viewport={{ once: true }}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img
          src="/images/Header/logo.png"
          alt="Main-Logo"
          loading="lazy"
          className="xl:block hidden select-none"
        />

        <NavLinks />

        <div className="flex items-center gap-x-6">
          <PrimaryButton type="button" className="h-14 w-36">
            <Link href="#">ログイン</Link>
          </PrimaryButton>

          <SecondaryButton type="button" className="h-14 w-36 p-px">
            <Link href="#">新規登録</Link>
          </SecondaryButton>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
