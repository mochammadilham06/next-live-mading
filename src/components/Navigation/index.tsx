"use client";
import Card from "@live-component/Card";
import { HomeIcon, LogoutIcon, UserIcon } from "@live-config/images";
import STYLES from "@live-util/active_constant";
import React, { Fragment } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navigation = () => {
  const pathname = usePathname();
  return (
    <Fragment>
      <Card isPadding={false}>
        <div className="px-4 py-2 flex justify-between md:block shadow-md shadow-gray-500 md:shadow-none">
          <h2 className="text-gray-400 mb-3 hidden md:block">Navigation</h2>
          <Link
            href="/home"
            className={`${
              pathname === "/home" ? STYLES.ACTIVE : STYLES.NOT_ACTIVE
            }`}
          >
            <HomeIcon />
            <span className="hidden md:block">Home</span>
          </Link>
          <Link
            href="home/profile/Aghes Jhonson"
            className={`${
              pathname.startsWith("/home/profile/")
                ? STYLES.ACTIVE
                : STYLES.NOT_ACTIVE
            }`}
          >
            <UserIcon />

            <span className="hidden md:block">Info</span>
          </Link>

          <Link href="/auth/login" className={`${STYLES.NOT_ACTIVE}`}>
            <LogoutIcon />
            <span className="hidden md:block">Logout</span>
          </Link>
        </div>
      </Card>
    </Fragment>
  );
};

export default Navigation;
