'use client'
import { userContext } from "@/providers/user-provider";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import NavMenu from "./NavMenu";

const Navbar = () => {

  return (
    <nav className="py-3 px-5 sticky top-0 bg-primary-accent text-white">
      <div className="flex items-center justify-between mx-auto max-w-[1000px]">
        <Link href="/" className="text-lg font-bold">
          FB Help Desk
        </Link>
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
