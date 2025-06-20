import { Link } from "react-router-dom"
import CircleHover from "../layout/CircleHover"
import { ArrowRight } from "../layout/Icon"
import KentImage from "../img/snow-sports.webp";
import SnowBoard from "../img/snowboard_nqqlyr.webp";

function SummitBio() {
    return (
        <div className="summitbio">
            <div className="summitbio__image">
                <img src={KentImage} alt="" />
            </div>
            <div className="summitbio__content">
                <img src={SnowBoard} alt="" />
                <h2>Big extreme sports enthusiast.</h2>
                <span>With a big heart for helping people.</span>
                <p>I&apos;m a JavaScript engineer and teacher and I&apos;m active in the open source community. And I&apos;m also a husband, father, and an extreme sports and sustainability enthusiast.</p>
                <Link to="/about"  className="circle__link">
                    <CircleHover
                    contentUp={<h1>Learn more about me</h1>}
                    arrow={<ArrowRight />}
                    direction="right"
                /></Link>
            </div>
        </div>
    )
}

export default SummitBio;