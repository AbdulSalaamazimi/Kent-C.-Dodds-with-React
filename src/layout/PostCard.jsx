import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

function PostCard({ imageUrl, date, title, linkUrl }) {
  const [buttonText, setButtonText] = useState("Click to copy url");

  const handleCopyUrl = () =>  {
    navigator.clipboard.writeText(linkUrl).then(() => {
      setButtonText("copied to clipboard");
      setTimeout(() => setButtonText("Click to copy url"), 3000);
    });
  };

  return (
    <div className="postcard">
    <button onClick={handleCopyUrl}>{buttonText}</button>
      <Link className="postcard__link" to={linkUrl}>
        <div>
          <img src={imageUrl} alt={title} />
        </div>
        <p>{date}</p>
        <h1>{title}</h1>
      </Link>      
    </div>
  );
};

PostCard.propTypes = {
    imageUrl: PropTypes.node.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
}

export default PostCard