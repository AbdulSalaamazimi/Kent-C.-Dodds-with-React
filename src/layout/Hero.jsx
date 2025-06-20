import PropTypes from "prop-types"

function Hero({ content, image}) {
    return (
        <header>
        <div className="hero">
            <div className="hero-image">
                {image}
            </div>
            <div className="hero-container lg:flex">
                {content}
            </div>
        </div>
        </header>
        
    )
}

Hero.propTypes = {
    content: PropTypes.element,
    image: PropTypes.element,
};


export default Hero;