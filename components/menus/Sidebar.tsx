"use client";
import {
  BarChart2Icon,
  InboxIcon,
  User2Icon,
  UserIcon,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  // get user id and then append the links
  const pathName = usePathname();
  const userId = "asdfadsfads";
  
  // add extra nav elements here
  const menuItems = [
    {
      tooltip: "Indbox",
      link: `/${userId}/indbox`,
      icon: (
        <InboxIcon className=" group-hover:text-primary-accent" size={25} />
      ),
    },
    {
      tooltip: "Clients",
      link: `/${userId}/clients`,
      icon: <Users2 className=" group-hover:text-primary-accent" size={25} />,
    },
    {
      tooltip: "Statistics",
      link: `/${userId}/stats`,
      icon: (
        <BarChart2Icon className=" group-hover:text-primary-accent" size={25} />
      ),
    },
  ];
  return (
    <nav className="bg-primary-accent flex flex-col items-center justify-between h-screen overflow-y-auto">
      <div className="w-full">
        <h1 className="text-center py-5 text-2xl text-white font-bold">FB</h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item.link}>
              <Link
                className={`hover:cursor-pointer hover:bg-white hover:text-primary-accent py-5 flex flex-col items-center  ${
                  pathName && pathName === item.link
                    ? "bg-white text-primary-accent"
                    : "text-white"
                }`}
                href={item.link}
              >{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className=" my-5">
        <div id="profile" className="flex-grow">
          <div className="w-12 h-12 rounded-full bg-white"></div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
