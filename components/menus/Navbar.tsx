import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-3 px-5 sticky top-0 bg-primary-accent text-white">
      <div className="flex items-center justify-between mx-auto max-w-[1000px]">
        <Link href='/' className="text-lg font-extrabold">FB Help Desk</Link>
        <menu className="text-xs font-semibold">
          <ul className="flex gap-2">
            <li> <Link className=" hover:underline" href='/login'>Log In </Link></li>
            <li><Link className=" hover:underline" href='/signup'>Sign Up</Link></li>
          </ul>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
