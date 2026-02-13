"use client";

import { motion } from "framer-motion";

import { FiMenu } from "react-icons/fi";
import NavLinks from "../NavLinks/NavLinks";
import PrimaryButton from "../Buttons/PrimaryButton";
import Link from "next/link";
import SecondaryButton from "../Buttons/SecondaryButton";

const Navbar = () => {
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
          src={"/images/Header/logo.png"}
          alt="Main-Logo"
          loading="lazy"
          className="select-none"
        />

        <FiMenu className="text-[#f2f2f2] text-3xl cursor-pointer" />
      </motion.nav>

      <motion.nav
        className="h-34 w-full hidden lg:flex items-center justify-between xl:px-10"
        viewport={{ once: true }}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img
          src={"/images/Header/logo.png"}
          alt="Main-Logo"
          loading="lazy"
          className="xl:block hidden select-none"
        />

        <NavLinks />

        <div className="flex items-center gap-x-6">
          <PrimaryButton type="button" className="h-14 w-36">
            <Link href={"#"}>ログイン</Link>
          </PrimaryButton>

          <SecondaryButton type="button" className="h-14 w-36 p-px">
            <Link href={"#"}>新規登録</Link>
          </SecondaryButton>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
