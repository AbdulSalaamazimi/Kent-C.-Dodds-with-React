import { Link } from "react-router-dom";
import EpicImage from "../img/epic-web-light.webp"
import { ArrowRightUp } from "./Icon";
import PropTypes from "prop-types";
import RocketImage from "../img/rocket.webp";
import TrophyImage from "../img/testing-trophy.webp";

const EpicData = ({ className, imgUrl, imgAlt, heading, paragraph, linkUrl }) => {
    return (
        <div className={`epic ${className} || "" `}>
            <img src={imgUrl} alt={imgAlt} />
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <div className="epic__link">
                <Link to={linkUrl}>
                    <span>Visit course</span>
                    <ArrowRightUp />
                </Link>
            </div>
        </div>
    )
}

EpicData.propTypes = {
    className: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
}

function EpicCourse({ paragraph }) {
    return (
        <div className="epic__container">
           <EpicData className="epic--1" 
                imgUrl={EpicImage}
                imgAlt="The EpicWeb.dev logo"
                heading="Epic Web"
                paragraph={paragraph}
                linkUrl="https://www.epicweb.dev/"
            />
            <EpicData className="epic--2" 
                imgUrl={RocketImage}
                imgAlt="Illustration of a Rocket"
                heading="Epic React"
                paragraph="The most comprehensive guide for pros."
                linkUrl="https://www.epicreact.dev/"
            /> 
            <EpicData className="epic--3" 
                imgUrl={TrophyImage}
                imgAlt="Illustration of a trophy"
                heading="Testing JavaScript"
                paragraph="Learn smart, efficient testing methods."
                linkUrl="https://www.testingjavascript.com/"
            />
        </div>
    )
}

EpicCourse.propTypes = {
    paragraph: PropTypes.string.isRequired,
}

export default EpicCourse;