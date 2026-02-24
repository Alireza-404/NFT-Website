"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "../NavbarLinks/NavLinks";
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
        className="h-30 w-full flex lg:hidden items-center justify-between px-4"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img
          src="/images/Header/logo.png"
          alt="Main-Logo"
          className="select-none"
        />

        <FiMenu
          className="text-3xl cursor-pointer text-[#f2f2f2]"
          onClick={openMenu}
        />
      </motion.nav>

      <AnimatePresence>
        {isMenuActive && (
          <motion.div
            key="mobileMenu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-80 xs:w-96 md:w-104 fixed top-0 bottom-0 right-0 bg-[#04040c] z-50 p-5 flex flex-col gap-y-12"
          >
            <div className="flex items-center justify-between">
              <h5 className="text-[#f2f2f2] text-lg font-semibold">メニュー</h5>
              <FiX
                className="text-2xl text-red-500 cursor-pointer"
                onClick={closeMenu}
              />
            </div>

            <NavLinks />

            <div className="grid grid-cols-2 gap-3 mt-5">
              <PrimaryButton type="button" className="h-12">
                <Link
                  href="/login"
                  className="flex h-full w-full items-center justify-center"
                  onClick={closeMenu}
                  replace
                >
                  ログイン
                </Link>
              </PrimaryButton>

              <SecondaryButton type="button" className="h-12 p-px">
                <Link
                  href="/register"
                  className="flex h-full w-full items-center justify-center"
                  onClick={closeMenu}
                  replace
                >
                  新規登録
                </Link>
              </SecondaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/55 lg:hidden transition-opacity ${
          isMenuActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <motion.nav
        className="h-34 w-full hidden lg:flex items-center justify-between xl:px-10"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img
          src="/images/Header/logo.png"
          alt="Main-Logo"
          className="xl:block hidden select-none"
        />

        <NavLinks />

        <div className="flex items-center gap-x-6">
          <PrimaryButton type="button" className="h-14 w-36">
            <Link
              href="/login"
              className="flex h-full w-full items-center justify-center"
              replace
            >
              ログイン
            </Link>
          </PrimaryButton>

          <SecondaryButton type="button" className="h-14 w-36 p-px">
            <Link
              href="/register"
              className="flex h-full w-full items-center justify-center"
              replace
            >
              新規登録
            </Link>
          </SecondaryButton>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
