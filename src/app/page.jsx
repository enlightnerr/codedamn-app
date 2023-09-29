import Image from "next/image";
import { profileImage } from "@/app/export";

export default function Profile() {
  return (
    <div className="profile__container w-[90%] py-10 flex-col justify-center items-center">
      <div className="profile--items inline-flex justify-center items-center gap-20">
        <Image src={profileImage} className="w-20 h-20" alt=""></Image>
        <button
          type="submit"
          className="w-60 p-3 font-bold bg-indigo-600 rounded-lg justify-center items-center gap-2 flex text-white"
        >
          Upload new picture
        </button>
        <button
          type="submit"
          className="bg-zinc-100 rounded-lg w-20 px-4 py-2 font-bold"
        >
          Delete
        </button>
      </div>
      <section className="form__container mt-10">
        <form action="" method="get">
          <label htmlFor="" className="text-base font-bold">
            Display Name
          </label>
          <br></br>{" "}
          <input
            type="text"
            placeholder="First Name"
            className="w-[100%] p-2 outline-none border  rounded-lg mt-2 mb-2"
          />
          <p className="text-zinc-500 mb-2">
            Name entered above will be used for all issued certificates{" "}
          </p>
          <label htmlFor="" className="text-base font-bold">
            About
          </label>
          <br></br>{" "}
          <input
            type="text"
            placeholder="Lorem ipsum dolor sit amet."
            className="w-[100%] py-5 px-2 outline-none border rounded-lg mt-2 mb-2"
          />
          <label htmlFor="" className="text-base font-bold">
            Profession
          </label>
          <br></br>{" "}
          <input
            type="text"
            placeholder="Enter your Profession"
            className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2"
          />
          <label htmlFor="" className="text-base font-bold">
            Date of Birth
          </label>
          <br></br>{" "}
          <input
            type="date"
            className="w-[100%] p-2 outline-none border rounded-lg mt-2 mb-2 cursor-pointer"
          />
          <label htmlFor="" className="text-base font-bold">
            Gender
          </label>
          <br></br>{" "}
          <select
            name="What's your gender?"
            className="w-[100%] p-2 outline-none cursor-pointer
            border rounded-lg mt-2"
          >
            <option value="What's your Gender?" className="p-5">
              What&apos;s your Gender?
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer not to say">Preder not to say!</option>
          </select>
        </form>
      </section>
      <section className="visibility__container my-10 ">
        <div className="heading__container">
          <p className="text-zinc-900 text-xl font-bold leading-7 mb-1">
            Section Visibility
          </p>
          <p className="text-zinc-500 text-base font-normal leading-normal">
            Select which sections and content should show on your profile page.
          </p>
        </div>
        <div className="sub-visibility__container mt-10 flex justify-between items-center">
          <div className="text__container">
            <p className="text-zinc-900 text-base font-bold ml-3 leading-normal">
              Followers and Following
            </p>
            <p className="text-zinc-500 text-sm font-normal ml-3 leading-tigh">
              Shows your followers and the users you follow on codedamn
            </p>
          </div>
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="sub-visibility__container mt-5 flex justify-between items-center">
          <div className="text__container">
            <p className="text-zinc-900 text-base font-bold ml-3 leading-normal">
              XP
            </p>
            <p className="text-zinc-500 text-sm font-normal ml-3 leading-tigh">
              Shows the XP you have earned
            </p>
          </div>
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="sub-visibility__container mt-5 flex justify-between items-center">
          <div className="text__container">
            <p className="text-zinc-900 text-base font-bold ml-3 leading-normal">
              Achievement badges
            </p>
            <p className="text-zinc-500 text-sm font-normal ml-3 leading-tigh">
              Shows your relative percentile and proficiency
            </p>
          </div>
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </section>
      <section className="flex justify-end gap-10">
        <button
          type="submit"
          className="bg-zinc-100 rounded-lg w-20 px-4 py-2 font-bold"
        >
          Cancel
        </button>
        <button
          type="submit"
          className=" py-3 px-5 font-bold bg-indigo-600 rounded-lg justify-center items-center gap-2 inline-flex text-white"
        >
          Save changes
        </button>
      </section>
    </div>
  );
}
