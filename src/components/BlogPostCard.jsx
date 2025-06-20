import RainySky from "../img/photo-1500674425229-f692875b0ab7.webp";
import EpicWeb from "../img/photo-1639262498805-17c7dc422d37.jfif"
import Car from "../img/car-in-daylight.jfif";
import Dan from "../img/thumbnail.webp";
import Sea from "../img/photo-1494500764479-0c8f2919a3d8.webp";
import KentSpeaking from "../img/kent-speaking-about-remix.webp";
import Review from "../img/photo-1487640228478-7a32e30a9e40.webp";
import Sun from "../img/photo-1506869640319-fe1a24fd76dc.webp";
import Eye from "../img/photo-1494869042583-f6c911f04b4c.webp";
import PostCard from "../layout/PostCard";
import { PlusSvg } from "../layout/Icon";
import { useState } from "react";

const posts = [
  { imageUrl: RainySky, date: "April 10th, 2025 — 6 min read", title:"The next chapter: EpicAI.pro", linkUrl: "" },
  { imageUrl: Sun, date: "November 21st, 2024 — 4 min read", title:"AI is taking your job", linkUrl: "" },  
  { imageUrl: Eye, date: "October 29th, 2024 — 4 min read", title:"How I increased my visibility", linkUrl: "" },
  { imageUrl: Dan, date: "March 14th, 2023 — 15 min read", title:"RSC with Dan Abramov and Joe Savona Live Stream", linkUrl: "" },
  { imageUrl: KentSpeaking, date: "November 15th, 2021 — 5 min read", title:"How I help you build better websites", linkUrl: "" },
  { imageUrl: Sea, date: "December 29th, 2022 — 5 min read", title:"2022 in Review", linkUrl: "" },
  { imageUrl: Car, date: "December 29th, 2022 — 6 min read", title:"My Car Accident", linkUrl: "" },
  { imageUrl: Review, date: "September 6th, 2022 — 5 min read", title:"A review of my time at Remix", linkUrl: "" },
  { imageUrl: EpicWeb, date: "September 7th, 2022 — 7 min read", title:"I'm building EpicWeb.dev", linkUrl: "" },

  { imageUrl: Car, date: "December 29th, 2022 — 6 min read", title:"My Car Accident", linkUrl: "" },
  { imageUrl: Review, date: "September 6th, 2022 — 5 min read", title:"A review of my time at Remix", linkUrl: "" },
  { imageUrl: EpicWeb, date: "September 7th, 2022 — 7 min read", title:"I'm building EpicWeb.dev", linkUrl: "" },
]

function BlogPostCard() {

    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3)
    }

    const visiblePosts = posts.slice(0, visibleCount)
    const allPostsLoaded = visibleCount >= posts.length;

    return (
        <div className="relative mx-[10vw]">
            <div>
                <div className="grid grid-cols-12 gap-5 mb-80">
                    {visiblePosts.map((post, index) => (
                        <PostCard 
                            key={index}
                            imageUrl={post.imageUrl}
                            date={post.date}
                            title={post.title}
                            linkUrl={post.linkUrl}
                        />
                    ))}
                </div>
                {!allPostsLoaded && (
                    <div className="flex justify-center w-full mb-60">
                        <button onClick={handleLoadMore} className="relative group font-medium text-lg focus:outline-none">
                            <div className="absolute inset-0 rounded-full opacity-100 border-gray-300 border-2 group-hover:border-blue-500 "></div>
                            <div className="flex items-center gap-1.5 px-11 py-6 ">
                                <span >Load more articles</span>
                                <PlusSvg />
                            </div>
                        </button>
                    </div>
                ) }
               
            </div>
        </div>
    )
}

export default BlogPostCard;
