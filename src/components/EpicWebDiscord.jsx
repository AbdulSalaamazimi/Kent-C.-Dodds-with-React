import { Link } from "react-router-dom";
import CircleHover from "../layout/CircleHover";
import { ArrowRight, DiscordSvg } from "../layout/Icon";
import KodyImage from "../img/coding-with-kody.jfif";

function EpicWebDiscord() {
    return (
        <div className="epicweb">
            <div className="epicweb__content">
                <div>
                    <DiscordSvg />
                </div>
                <h2>Meet like minded people who face similar challenges.</h2>
                <p>Join the discord and get better at building software together.</p>
                <Link to="/discord"  className="circle__link">
                    <CircleHover
                    contentUp={<h1>Learn more about the Epic Web Community on Discord</h1>}
                    arrow={<ArrowRight />}
                    direction="right"
                /></Link>
            </div>
            <div className="epicweb__image">
                <div className="epicweb__text-container epicweb__text-container--top">
                    <span className="epicweb__text epicweb__text--top">Want to learn react together?</span>
                    <span className="epicweb__text epicweb__text--top">Let me know ✌️</span>
                </div>
                <img src={KodyImage} className="epicweb__img" alt="Coding with Kody" />
                <div className="epicweb__text-container epicweb__text-container--bottom">
                    <span className="epicweb__text epicweb__text--bottom">For sure! Let&apos;s do it!</span>
                    <span className="epicweb__text epicweb__text--bottom">Let me show you what I&apos;m working on...🧑‍💻</span>
                </div>
            </div>
        </div>
    )
}

export default EpicWebDiscord;