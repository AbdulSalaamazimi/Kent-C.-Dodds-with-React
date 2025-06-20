import { Link } from "react-router-dom";
import KentVideo from "../img/kent-video-thumbnail.webp";
import CircleHover from "../layout/CircleHover";
import { ArrowRight } from "../layout/Icon";


function Bio() {
    return(
        <div className="bio__container">
            <div className="bio__image">
                <button>
                    <img src={KentVideo} alt="Kent video thumbnail" />
                </button>
                <p>Introduction video (2:13)</p>
                <Link to="/about">or, watch the full video here (8:05)</Link>
            </div>
            <div className="bio__content">
                <h2>Hi, I am Kent C. Dodds. I help people make the world better through quality software.</h2>
                <p>I am also a big extreme sports enthusiast. When I am not hanging out with my family or at the computer you can find me cruising around on my onewheel or hitting the slopes on my snowboard when it is cold.</p>
                <Link to="/about" className="circle__link">
                    <CircleHover
                    contentUp={<h1>Learn more about Kent</h1>}
                    arrow={<ArrowRight />}
                    direction="right"
                />
                </Link>
                
            </div>
        </div>
    )
}

export default Bio;