import { Link } from "react-router-dom"
import PropTypes from "prop-types";

function CourseCard( { imageSrc, imageTitle, title, description, link} ) {

    return (
        <div className="relative col-span-full flex flex-col items-start bg-gray-100 mt-8 p-12 rounded-lg">
            <img src={imageSrc} alt={imageTitle} />
            <h2 className="text-gray-800 font-semibold text-xl mt-12 pr-10">{title}</h2>
            <p className="mt-2 mb-6 text-gray-500 max-w-[600px]">{description}</p>
            <Link to={link} className="text-lg hover:bg-white pt-2 pb-2 pr-4 pl-4 rounded-full border border-gray-300">Visit course</Link>
        </div>
    )
}

CourseCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    imageTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}


export default CourseCard;