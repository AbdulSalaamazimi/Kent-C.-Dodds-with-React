import { Link } from "react-router-dom";
import CircleHover from "../layout/CircleHover";
import PropTypes from "prop-types";
import SkisKody from "../img/skis_z5lkc3 (1).webp";
import OneWheel from "../img/one_wheel.webp";
import Rowing from "../img/rowing.webp"
import { ArrowRight } from "../layout/Icon";


const Content = ({ title, content, link, image, btnText, imageAlt }) => (
  <>
    <img className="content-feature-image" src={image} alt={imageAlt} />
    <h1>{title}</h1>
    <p>{content}</p>
    <Link to={link}  className="circle__link">
      <CircleHover 
        contentUp={<h1>{btnText}</h1>} 
        arrow={<ArrowRight />}
        direction="right"
      />
    </Link>
  </>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

function FeatureContent({ activeContent }) {
  const contentData = {
    blog: {
      image: SkisKody,
      imageAlt: "Skis kody",
      title: "Educational Blog",
      content: (
        <>
          My 202 blog posts (and counting) have been {" "}
          <Link className="feature__blog-btn" to={""}><strong>read</strong></Link> 856,753 times by 658,477 people.
          There you will find blogs about {" "}
          <Link className="feature__blog-btn" to={""}><strong>JavaScript</strong></Link>, {" "}
          <Link className="feature__blog-btn" to={""}><strong>TypeScript</strong></Link>, {" "}
          <Link className="feature__blog-btn" to={""}><strong>React</strong></Link>, {" "}
          <Link className="feature__blog-btn" to={""}><strong>Testing</strong></Link>, {" "}
          <Link className="feature__blog-btn" to={""}><strong>your career</strong></Link>, {" "}
          <Link className="feature__blog-btn" to={""}><strong>and more.</strong></Link>
          <br />
          <span>The {" "} <Link  className="feature__blog-blue" to={""}><strong>blue</strong></Link> {" "} team is winning.</span>
        </>
      ),
      link: "/about",
      btnText: "Start reading the blog",
    },
    course: {
      image: OneWheel,
      imageAlt: "One whell kody",
      title: "Courses",
      content: (
        <>
          I have been teaching people just like you how to build better software for over 11 years.
          Tens of thousands of people have increased their confidence in shipping software with 
          <Link to={""}><strong>TestingJavaScript.com</strong></Link> {" "}
          and even more have improved the performance and maintainability of their 
          React applications from what they have learned from 
          <Link to={""}><strong>EpicReact.dev.</strong></Link> {" "} 
          My latest efforts are pushing things to the whole stack with 
          <Link to={""}><strong>EpicWeb.dev.</strong></Link> {" "}
        </>
      ),
      link: "/about",
      btnText: "Explore the Courses",
    },
    podcast: {
      image: Rowing,
      imageAlt: "Rowing kent",
      title: "Podcast",
      content: (
        <>
          I really enjoy chatting with people about software development 
          and life as a software developer. So I have several podcasts for you to enjoy like 
          <Link to={""}><strong>Chats with Kent</strong></Link>, {" "}
          <Link to={""}><strong>Call Kent</strong></Link>, {" "} and the {" "}
          <Link to={""}><strong>EpicReact.dev podcast.</strong></Link> {" "}
          I have also had the pleasure to be a guest on many other podcasts
          where I have been able to share my thoughts on webdev. You can find those on my {" "}
          <Link to={""}><strong>appearances</strong></Link> {" "} page.
        </>
      ),
      link: "/about",
      btnText: "Start listening to chats with Kent",
    },
  };

  return (
    <div>
      {activeContent && contentData[activeContent] && (
        <Content {...contentData[activeContent]} />
      )}
    </div>
  );
};

FeatureContent.propTypes = {
  activeContent: PropTypes.string.isRequired,
};

export default FeatureContent;
