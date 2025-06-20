import { Link } from "react-router-dom";
import NodeImage from "../img/photo-1520637102912-2df6bb2aec6d.webp"
import CircleHover from "../layout/CircleHover";
import { ArrowRight } from "../layout/Icon";

function FeaturePostCard() {
  return (
    <div className="mb-10">
      <div className="bg-gray-100 rounded-lg lg:bg-transparent">
        <div className="mx-[10vw]">
          <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 max-w-7xl group rounded-lg mx-auto pb-6 pt-12 md:mb-12 lg:bg-gray-100">
            <div className="col-span-full lg:col-start-2 lg:col-span-5 lg:flex lg:flex-col lg:justify-between">
              <div>
                <h2 className="!text-lg !text-black font-medium">Featured article</h2>
                <h3 className="!text-3xl md:text-4xl mt-12">Fixing a Memory Leak in a Production Node.js App</h3>
                <div className="text-slate-500 mt-6 font-medium text-xl">January 12th, 2023 — 15 min read</div>
              </div>
              <div>
                <Link className="group-hover:outline-offset-2 group-hover:outline-amber-300">
                  <CircleHover 
                  contentUp={<h1>Read article</h1>}
                  arrow={<ArrowRight />}
                  direction="right"
                  /> 
                </Link>
              </div>
            </div>
            <div className="col-span-full lg:col-span-4 lg:col-start-8">
              <div>
                <img className="rounded-lg" src={NodeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>            
    </div>
  );
}

export default FeaturePostCard;
