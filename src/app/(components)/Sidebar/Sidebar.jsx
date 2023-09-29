"use client";
import { linkIcon } from "@/app/export";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export default function Sidebar() {
  const sidebarLinks = [
    { title: "Profile", link_address: "/", id: 1 },
    { title: "Socials", link_address: "/Socials", id: 2 },
    { title: "Portfolio", link_address: "/Portfolio", id: 3 },
    { title: "Resume", link_address: "/Resume", id: 4 },
  ];

  return (
    <div className="sidebar__container w-[30%] h-[30%] border rounded-lg my-10 p-5">
      {sidebarLinks.map((link) => (
        <Fragment key={link.id}>
          <div className="sidebar__container flex justify-start items-center pr-4 py-3">
            <Image
              src={linkIcon}
              alt=""
              className="inline-flex w-[30px] stroke-zinc400"
            ></Image>

            <Link
              href={link.link_address}
              className="sidenav__link inline-flex ml-2 font-semibold text-zinc-400 focus:text-zinc-900 text-2xl"
            >
              {link.title}
            </Link>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
