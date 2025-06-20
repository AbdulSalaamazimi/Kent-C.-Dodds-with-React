import Hero from "../layout/Hero";
import KodySnowBoard from "../img/kody_snowboarding_flying_yellow.webp";
import { Link } from "react-router-dom";
import CircleHover from "../layout/CircleHover";
import Bio from "../components/Bio";
import { ArrowDown } from "../layout/Icon";
import Feature from "../components/Feature";
import { useEffect } from "react";
import ExploreSection from "../layout/ExploreSection";
import PostCard from "../layout/PostCard";
import IceImage from "../img/photo-1478001517127-fccc92f54906.webp"
import BridgeImage from "../img/photo-1513735429658-5b2072a1cee6.webp"
import MoneyImage from "../img/photo-1554672723-b208dc85134f.webp"
import EpicCourse from "../layout/EpicCourse";
import EpicWebDiscord from "../components/EpicWebDiscord";
import SummitBio from "../components/SummitBio";


function Home() {
    useEffect(() => {
        document.title = "Kent C. Dodds"
    })

    return (
        <>
            <Hero
                content={<div className="home-content">
                    <h2 className="">Helping people make the world a better place through quality software.</h2>
                    <div className="btn-container">
                        <Link className="blog-btn" to="/blog">Read the blog</Link>
                        <Link className="course-btn" to="/courses">Take a course</Link>
                    </div>
                    <div>
                        <Link className="scroll-down__container circle__link" to="/blog">
                            <div className="circle__container">
                                <CircleHover
                                    contentDown={<h1>Learn more about Kent</h1>}
                                    arrow={<ArrowDown />}
                                    direction="down"
                                />
                            </div>
                        </Link>
                    </div>
                </div>} 
                image={<img className="kody__img" src={KodySnowBoard}  alt="Kody Snow Board" />}
            />
            <Bio />
            <Feature />
            <main>
            <div className="space-small"></div>
            <ExploreSection
                heading="Blog recommendations"
                paragraph="Prepared especially for you."
                link="/blog"
                btnText="See the full blog"
            />
            <div className="postcard__container">
                <PostCard
                    imageUrl={IceImage}
                    date="January 1st, 2018 — 9 min"
                    title="But really, what is a JavaScript test?"
                /> 
                <PostCard 
                    imageUrl={BridgeImage}
                    date="July 30th, 2018 — 4 min"
                    title="What is a polyfill"
                /> 
                <PostCard 
                    imageUrl={MoneyImage}
                    date="June 4th, 2019 — 13 min"
                    readTime=""
                    title=" When to useMemo and useCallback"
                />
            </div>
            <div className="space-small"></div>
            <ExploreSection
                heading="Are you ready to level up?"
                paragraph="Checkout some of my courses"
                link="/courses"
                btnText="See all courses"
            />
            <div className="space-small"></div>
            <EpicCourse 
                paragraph="Become a full stack web dev."
            />
            <div className="space-small"></div>
            <EpicWebDiscord />
            <div className="space-small"></div>
            <SummitBio />
            <div className="space-small"></div>
            </main>
        </>
    )
}

export default Home;