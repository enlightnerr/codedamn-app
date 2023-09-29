import Image from "next/image";
import { bell, lightning, profileImage, search } from "@/app/export";

export default function Navbar() {
  return (
    <>
      <div className="navbar__container flex justify-between items-center">
        <div className="navbar__container-brand">
          <h1 className="text-zinc-900 text-2xl font-bold leading-loose">
            codedamn
          </h1>
        </div>
        <div className="navbar__container-items inline-flex justify-center items-center gap-10">
          <div className="navbar__search-container flex justify-center items-center border border-gray-200 rounded-[10px] px-2 py-1">
            <label htmlFor="" className="p-2">
              {" "}
              <Image
                src={search}
                alt=""
                className="w-5 h-5 inline-flex"
              ></Image>
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="outline-none ml-1"
              />
              Courses
              <select name="" id=""></select>
            </label>
          </div>
          <div className="flex gap-0.5">
            <Image src={lightning} alt=""></Image>
            <p>2</p>
          </div>
          <Image src={bell} alt=""></Image>
          <Image
            src={profileImage}
            alt=""
            className="w-[42px] h-[42px] rounded-[26px]"
          ></Image>
        </div>
      </div>
    </>
  );
}
