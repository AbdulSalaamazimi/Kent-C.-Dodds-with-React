import CourseCard from "../layout/CourseCard";
import Remix from "../img/fem-advanced-remix.webp";



function CourseList() {

    const courses = [
  {
    imageSrc: Remix,
    title: 'Advanced Remix',
    description:
      "Remix is a terrific tool for building simple websites and even better for building complex web applications. Remix solves many problems...",
    link: '#'
  },
  {
    imageSrc: Remix,
    title: 'Remix Fundamentals',
    description:
      "Remix is a fullstack web framework that enables you to deliver a fast, slick, and resilient user experience...",
    link: '#'
  },
  {
    imageSrc: Remix,
    title: 'Up and Running with Remix',
    description:
      "Jump in feet first and learn the most productive way to build a web application with Remix...",
    link: '#'
  }
];

    return (
        <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6">
            {courses.map((course , index) => (
            <CourseCard key={index} {...course} />
    ))}
        </div>

    )
}

export default CourseList;