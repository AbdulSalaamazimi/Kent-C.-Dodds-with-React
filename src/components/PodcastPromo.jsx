import { Link } from "react-router-dom";
import Row from "../img/rowing.webp";
import CircleHover from "../layout/CircleHover";
import { ArrowRight } from "../layout/Icon";


function PodcastPromo() {
  return (
    <div className="mx-[10vw] mb-50">
      <div className="relarive grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 ">
        <div className="col-span-full lg:col-span-5">
            <img src={Row} alt="Illustration of a kayak" />
        </div>
        <div className="col-span-full mt-6 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <h2 className="text-3xl md:text-4xl text-black mb-8">More of a listener?</h2>
            <p className="text-3xl md:text-4xl text-gray-600 mb-16">Check out my podcast Chats with Kent and learn about software development, career, life, and more.</p>
            <Link to="/chats">
                <CircleHover 
                    contentUp={<h1>Check out the podcast</h1>}
                    arrow={<ArrowRight />}
                    direction="right"
                />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default PodcastPromo;