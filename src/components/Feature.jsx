import { useState } from "react";
import FeatureContent from "./featureContent";

function Feature() {
    const [activeContent, setActiveContent] = useState("blog");
    
    return (
        <div className="feature">
            <div className="feature__container">
                <h2>Having a hard time keeping up with JavaScript?</h2>
                <p>Well, you are in the right place. My website is your one stop shop for everything you need to build JavaScript apps.</p>
                <hr className="hr" />
                <div className="feature__container--button">
                    <button onClick={() => setActiveContent("blog")} className="feature__container--btn">blog</button>
                    <button onClick={() => setActiveContent("course")} className="feature__container--btn">courses</button>
                    <button onClick={() => setActiveContent("podcast")} className="feature__container--btn">podcasts</button>
                </div>
                <div className="feature__container--content">
                    <FeatureContent activeContent={activeContent} />
                </div> 
            </div>
        </div>
    )
}

export default Feature;