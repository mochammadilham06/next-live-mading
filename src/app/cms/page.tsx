"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  HomeIcon,
  LogoutIcon,
  ToggleIcon,
  UserIcon,
} from "@live-config/images";
import ContentIcon from "@live-asset/svg/threads";

const AdminLayout = ({ children }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };
  const handleToggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
  };

  const sidebarItems = [
    { name: "Dashboard", icon: <HomeIcon />, route: "/cms/dashboard" },
    { name: "Users", icon: <UserIcon />, route: "/cms/user-management" },
    {
      name: "Content",
      icon: <ContentIcon />,
      route: "/cms/content-validation",
    },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      route: "/auth/login",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md w-1/6 sm:w-1/6 relative transition-all duration-300 ${
          isAsideOpen ? "block" : "hidden"
        }`}
      >
        <div className="p-4">
          <h2 className="hidden md:block text-base lg:text-2xl font-bold text-gray-400 overflow-clip">
            Navigation
          </h2>
        </div>
        <nav className="mt-4">
          <ul>
            {sidebarItems.map((item) => (
              <li
                key={item.route}
                className={`cursor-pointer flex justify-center lg:justify-normal ${
                  pathname === item.route
                    ? " text-md flex  gap-3 py-3 my-1 bg-socialBlue text-white mx-5 lg:mx-2 px-2 rounded-md shadow-md shadow-gray-300 items-center"
                    : "flex gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-50 mx-5 lg:mx-2 px-2 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300"
                }`}
                onClick={() => {
                  handleTabClick(item.route);
                  router.push(item.route);
                }}
              >
                {item.icon}
                <Link
                  href={item.route}
                  passHref
                  className={`hidden text-center lg:block ${
                    pathname === item.route ? "font-bold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 p-4">
        <header className="flex justify-between bg-white shadow-md p-3 rounded-md">
          <button
            className=" bg-gray-800 text-white p-2 rounded-md shadow-md"
            onClick={handleToggleAside}
          >
            <ToggleIcon />
          </button>
          <div className="flex items-center">
            <div className="text-sm">
              <div className="font-medium text-gray-700">Steven Jobs</div>
              <div className="text-gray-400">jobs@sailboatui.com</div>
            </div>
            <div className="relative h-10 w-10">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white" />
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
