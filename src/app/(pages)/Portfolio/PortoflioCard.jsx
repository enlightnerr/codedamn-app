import Image from "next/image";
import { ellipseOne } from "@/app/export";
import { ellipseTwo } from "@/app/export";

const portfolioData = [
  {
    title: "Playground title",
    subTitle: `HTML/CSS`,
    timestamp: "1 min ago",
    detail: "Shared with Adam, Anna ... +7 more",
  },
];

function PortoflioCard(props) {
  return (
    <div className="portfolio__card-container w-[45%] h-32 p-4 border-2 rounded-lg border-zinc-700 focus:border-indigo-600 focus:outline-none focus:ring-0 mt-5">
      <Image
        src={props.Image}
        alt="html-5-icon"
        className="w-10 h-10 inline-flex"
      />
      <div className="card-sub-container w-3/4 inline-flex justify-between ml-5">
        <div className="w-full">
          <div className="w-full inline-flex justify-between items-start">
            <p className="text-lg font-semibold text-zinc-900">
              {portfolioData[0].title}
            </p>
            <input type="radio" name="portfolio-radio" id="portfolio-radio" />
          </div>
          <div className="w-full inline-flex ">
            <p className="text-sm text-zinc-500">
              {portfolioData[0].subTitle}{" "}
              <span className=" text-zinc-500">&#183; </span>
              {portfolioData[0].timestamp}
            </p>
          </div>
          <div className="w-full inline-flex">
            <span className="inline-flex w-1/4 mt-1">
              <Image src={ellipseOne} alt="" className="w-6 h-6" />
              <Image src={ellipseTwo} alt="" className="w-6 h-6 -ml-1" />
            </span>
            <div className="text-[12px] w-3/4 mt-1">
              <span className="text-zinc-500 font-normal leading-none">
                Shared with{" "}
              </span>
              <span className="text-zinc-500 font-bold leading-none">
                Adam, Anna
              </span>
              <span className="text-zinc-500 font-normal leading-none">
                .. +7 more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortoflioCard;
