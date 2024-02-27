'use client'
import { userContext } from "@/providers/user-provider";
import Link from "next/link";
import { useContext } from "react";

const NavMenu = () => {

  const { user } = useContext(userContext)!;
 
  return (
    <menu className="text-xs font-semibold">
      <ul className="flex gap-5">
        {!user ? (
          <>
            <li>
              <Link className=" hover:underline" href="/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className=" hover:underline" href="/signup">
                Sign Up
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link className=" hover:underline" href="/signup">
              Logout
            </Link>
          </li>
        )}
      </ul>
    </menu>
  );
};

export default NavMenu;
