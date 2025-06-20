import { NavLink } from "react-router-dom";
import { Moon, Border, Sun } from "../layout/Icon";
import KodyProfile from "../img/kody_profile_gray.webp";
import { useState } from "react";



function Navbare() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleToggle = () => {
      const htmlElement = document.documentElement;
  
      if (isDarkMode) {
        htmlElement.classList.remove('dark');
        htmlElement.classList.add('light');
      }else {
        htmlElement.classList.remove('light');
        htmlElement.classList.add('dark');
      }
  
      setIsDarkMode(!isDarkMode);
    };

   

    return (
        <div className="navbare">
            <nav>
                <div>
                    <NavLink to={"/"}><h1>Kent C. Dodds</h1></NavLink>
                </div>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="blog">Blog</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="courses">Courses</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="discord">Discord</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="chats">Chats</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="calls">Calls</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="workshops">Workshops</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? "active-link" : ""} to="about">About</NavLink></li>
                </ul>
                <div className="center">
                    <button  onClick={handleToggle} className="button-border">
                        <div className="border center">
                        <span className="center">
                           <Moon />
                           <Sun />
                        </span>
                        </div>
                    </button>
                    <button className="margin__right-small center">
                        <Border />
                        <img className="image-kody center" src={KodyProfile} alt="" />
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbare;