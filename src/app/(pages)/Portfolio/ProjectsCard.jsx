import Image from "next/image";
import { ellipseOne } from "@/app/export";
import { ellipseTwo } from "@/app/export";
const portfolioData = {
  title: "Personal Portfolio Website",
  subTitle: `HTML/CSS`,
  timestamp: "1 min ago",
  language: "Javascript",
  detail: "Shared with Adam, Anna ... +7 more",
};

function ProjectsCard(props) {
  return (
    <div className="portfolio__card-container w-[45%] h-fit p-4 border-2 rounded-lg border-zinc-700 focus:border-indigo-600 focus:outline-none focus:ring-0 mt-5">
      <div className="relative">
        <Image src={props.Image} alt="html-5-icon" className="rounded" />
        <div className="absolute px-1 bottom-2 left-2">
          <span className="px-2 py-1 rounded bg-sky-200 text-center text-xs">
            Badge
          </span>
          <span className="px-2 py-1 rounded bg-sky-200 text-center ml-3 text-xs">
            Badge
          </span>
        </div>
      </div>
      <div className="card-sub-container w-full mt-5 inline-flex justify-between">
        <div className="w-full">
          <div className="w-full inline-flex justify-between items-start">
            <p className="text-base font-semibold text-zinc-900">
              {portfolioData.title}
            </p>
          </div>
          <div className="w-full inline-flex ">
            <p className="text-sm text-zinc-500">
              {portfolioData.subTitle}{" "}
              <span className=" text-zinc-500">&#183; </span>
              {portfolioData.language}{" "}
              <span className=" text-zinc-500">&#183; </span>
              {portfolioData.timestamp}
            </p>
          </div>
          <div className="w-full inline-flex justify-start items-center">
            <span className="inline-flex w-fit mt-1">
              <Image src={ellipseOne} alt="" className="w-6 h-6" />
              <Image src={ellipseTwo} alt="" className="w-6 h-6 -ml-1" />
            </span>
            <div className="text-[12px] mt-1 ml-1">
              <span className="text-zinc-500">3 contributors</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
