import { Link } from "react-router-dom";
import CircleHover from "./CircleHover";
import PropTypes from "prop-types"
import { ArrowRight } from "./Icon";

function ExploreSection({ link, btnText, heading, paragraph }) {
    return(
        <div className="explore__section">
            <div>
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </div>
            <Link to={link}  className="circle__link">
                <CircleHover 
                    contentUp={<h1>{btnText}</h1>} 
                    arrow={<ArrowRight />}
                    direction="right"
                    />
            </Link>
        </div>
    )
}

ExploreSection.propTypes = {
    link: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
}

export default ExploreSection;