import { htmlIcon, javascriptIcon, projectOne, projectTwo } from "@/app/export";
import PortfolioCard from "./PortoflioCard";
import ProjectsCard from "./ProjectsCard";

export default function Portfolio() {
  return (
    <div className="portfolio__container w-[90%] py-10">
      <div className="portfolio__sub-container">
        <div className="playground__container-items inline-flex justify-between w-full items-center">
          <h1 className="text-zinc-900 font-bold text-2xl">Playgrounds</h1>
          <h3 className="text-zinc-500 text-base">See all</h3>
        </div>
        <div className="inline-flex justify-between flex-wrap">
          <PortfolioCard Image={htmlIcon} />
          <PortfolioCard Image={javascriptIcon} />
          <PortfolioCard Image={javascriptIcon} />
          <PortfolioCard Image={htmlIcon} />
        </div>
        <div className="portfolio__sub-container py-10">
          <div className="playground__container-items inline-flex justify-between w-full items-center">
            <h1 className="text-zinc-900 font-bold text-2xl">Projects</h1>
            <h3 className="text-zinc-500 text-base">See all</h3>
          </div>
          <div className="inline-flex justify-between flex-wrap">
            <ProjectsCard Image={projectOne} />
            <ProjectsCard Image={projectTwo} />
            <ProjectsCard Image={projectTwo} />
            <ProjectsCard Image={projectTwo} />
          </div>
        </div>
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
    </div>
  );
}
