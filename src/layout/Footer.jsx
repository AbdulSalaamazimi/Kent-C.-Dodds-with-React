import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FooterLink } from "../components/FooterLink";
import { ArrowRight, GithubSvg, RssSvg, SignSvg, XSvg, YoutubeSvg } from "./Icon.jsx";
import CircleHover from "./CircleHover.jsx";

const FooterSection = ({ links, title }) => {
  return (
    <div>
      <div className="text-xl font-medium text-black">{title}</div>
      <ul className="mt-4">
        {links.map((link, i) => (
          <li className="py-1" key={i}>
            <Link className="text-gray-500 underlined hover:text-black active-link" to={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


function Footer() {
  return (
    <>
      <hr className="hr" />
      <footer className="borrder-t border-gray-200 pb-16 pt-48">
        <div className="relative mx-[10vw]">
          <div className="relative mx-auto grid max-w-7xl grid-cols-4 auto-rows-max gap-x-4 md:grid-cols-8 xl:grid-cols-12 xl:gap-x-6">
            <div className="col-span-full md:col-span-3 xl:row-span-2">
              <div>
                <div>
                  <div className="text-xl font-medium text-black ">Kent C. Dodds</div>
                  <p className="text-gray-500 mt-6 max-w-md text-2xl">Full time educator making our world better</p>
                </div>
                <div className="text-gray-500 mt-6 flex items-center justify-between gap-4 xl:flex-col xl:items-start">
                  <div className="flex gap-4">
                    <Link to="https://github.com/kentcdodds" className="text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none">
                      <GithubSvg />
                    </Link>
                    <Link to="https://www.youtube.com/c/KentCDodds-vids/videos" className="text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none">
                      <YoutubeSvg />
                    </Link>
                    <Link to="https://x.com/kentcdodds" className="text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none">
                      <XSvg />
                    </Link>
                    <Link className="text-black hover:text-gray-500 focus:text-gray-500 focus:outline-none">
                      <RssSvg />
                    </Link>
                  </div>
                  <div className="text-gray-500 relative flex w-4 items-center xl:mt-20 xl:w-32">
                    <SignSvg />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full mt-20 md:col-span-5 md:col-start-1 xl:hidden">
              <div>
                <div className="text-lg font-medium text-black">Stay to date</div>
                <div>
                  <p>Subscribe to the newsletter to stay up to date with articles, courses and much more!
                     <Link to="">Learn more about the newsletter </Link>
                  </p>
                </div>
                <div>
                  <div className="mt-8">
                    <form action="">
                      <div className="mb-8">
                        <div className="mb-4 flex items-baseline gap-4">
                          <label className="inline-block text-lg text-gray-500" htmlFor="">First name</label>
                        </div>
                        <input type="text" className="placeholder-gray-200 px-11 py-8 w-full text-black text-lg font-medium  bg-gray-100 rounded-lg focus:outline-none" />
                      </div>
                      <div className="mb-8">
                        <div className="mb-4 flex items-baseline gap-4">
                          <label className="inline-block text-lg text-gray-500" htmlFor="">Email</label>
                        </div>
                        <input type="text" className="placeholder-gray-200 px-11 py-8 w-full text-black text-lg font-medium  bg-gray-100 rounded-lg focus:outline-none" />
                      </div>
                      <button className="">
                        <span></span>
                        <div>
                          <CircleHover 
                            contentUp={<h1>Sign me up</h1>} 
                            arrow={<ArrowRight />}
                            direction="right"
                          />
                        </div>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 mt-20 md:col-start-5 md:row-start-1 md:mt-0">
              <FooterSection {...FooterLink.contact} />
            </div>
            <div className="col-span-2 mt-20 md:col-start-7 md:row-start-1 md:mt-0 xl:col-start-5 xl:row-start-2 xl:mt-16">
              <FooterSection {...FooterLink.general} />
            </div>
            <div className="col-span-full md:col-span-2 md:col-start-7 xl:col-start-5 xl:row-span-2 xl:row-start-1 xl:ml-56 xl:mt-0  xl:block">
              <FooterSection {...FooterLink.sitemap} />
            </div>
            <div className="col-span-4 col-start-9 row-span-2 row-start-1 mt-0 hidden xl:block">
              <div>
                <div className="text-lg font-bold text-black">Stay to date</div>
                <div className="inline-block">
                  <p className="max-w-md text-gray-500 text-lg">Subscribe to the newsletter to stay up to date with articles, courses and much more!<br />
                    <Link to="">Learn more about the newsletter </Link>
                  </p>
                </div>
                <div className="mt-8">
                  <form action="">
                    <div className="mb-8">
                      <div className="mb-4 flex items-baseline gap-4">
                        <label className="inline-block text-lg text-gray-500" htmlFor="">First name</label>
                      </div>
                      <input type="text" className="placeholder-gray-200 px-11 py-8 w-full text-black text-lg font-medium  bg-gray-100 rounded-lg focus:outline-none" />
                    </div>
                    <div className="mb-8">
                      <div className="mb-4 flex items-baseline gap-4">
                        <label className="inline-block text-lg text-gray-500" htmlFor="">Email</label>
                      </div>
                      <input type="text" className="placeholder-gray-200 px-11 py-8 w-full text-black text-lg font-medium  bg-gray-100 rounded-lg focus:outline-none" />
                    </div>
                    <button className="">
                      <span></span>
                      <div>
                        <CircleHover 
                          contentUp={<h1>Sign me up</h1>} 
                          arrow={<ArrowRight />}
                          direction="right"
                        />
                      </div>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-span-full mt-20 text-gray-500 md:mt-44">
              <span>All rights reserved</span>
              <span>© Kent C. Dodds 2025</span>
            </div>
          </div> 
        </div>
      </footer>
    </>
  )
}

export default Footer;


FooterSection.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}; 
