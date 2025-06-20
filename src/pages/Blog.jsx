import { useEffect } from "react";
import Hero from "../layout/Hero";
import { Link } from "react-router-dom";
import SkyIce from "../img/skis_z5lkc3.webp";
import { RssSvg, SearchSvg } from "../layout/Icon";
import ExploreTopic from "../components/ExploreTopic";
import FeaturePostCard from "../components/FeaturePostCard";
import BlogPostCard from "../components/BlogPostCard";
import PodcastPromo from "../components/PodcastPromo";

function Blog() {

    useEffect(() => {
        document.title = "The Kent C. Dodds Blog";
    })

    return (
        <>
            <Hero content={
                <div>
                    <h2 className="text-3xl md:text-4xl text-black">Learn development with great articles.</h2>
                    <p className="text-3xl md:text-4xl text-gray-600 mt-3">
                        <span>Find the latest of my writing here.</span>
                        <Link className="inline-block ml-2 align-middle hover:text-green-400">
                            <RssSvg className="w-6 h-6" />
                        </Link>
                    </p>
                    <div className="mt-14">
                        <div className="w-full">
                            <form action="">
                            <div className="relative">
                                <button title="Search" type="button" className="absolute left-6 top-0 flex items-center border-0 h-full justify-center text-slate-500">
                                    <SearchSvg />
                                </button>
                                <input placeholder="Search posts" type="search" className="py-6 pl-14 pr-36 text-lg w-full text-gray-400 font-medium border-1 border-gray-300 focus:border-blue-500 focus:outline-none focus:bg-gray-100 rounded-full" />
                                <div className="absolute right-6 top-0 h-full w-14 items-center justify-between text-lg font-medium text-slate-500 md:flex hidden">
                                    <input type="checkbox" />
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                } image={<img src={SkyIce} title="Kody Ice sky" className="max-w-50 h-auto object-contain" />}    
            />
            <div className="h-50"></div>
            <ExploreTopic />
            <FeaturePostCard />
            <BlogPostCard />
            <PodcastPromo />
        </>
    )
}

export default Blog;