import CourseCard from "../layout/CourseCard";
import Remix from "../img/fem-advanced-remix.webp";



// function CourseList() {

//     const courses = [
//   {
//     imageSrc: Remix,
//     title: 'Advanced Remix',
//     description:
//       "Remix is a terrific tool for building simple websites and even better for building complex web applications. Remix solves many problems...",
//     link: '#'
//   },
//   {
//     imageSrc: Remix,
//     title: 'Remix Fundamentals',
//     description:
//       "Remix is a fullstack web framework that enables you to deliver a fast, slick, and resilient user experience...",
//     link: '#'
//   },
//   {
//     imageSrc: Remix,
//     title: 'Up and Running with Remix',
//     description:
//       "Jump in feet first and learn the most productive way to build a web application with Remix...",
//     link: '#'
//   }
// ];

//     return (
//         <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6">
//             {courses.map((course , index) => (
//             <CourseCard key={index} {...course} />
//     ))}
//         </div>

//     )
// }




// Courses.jsx
// import CourseCard from './CourseCard';
// import Remix from './path/to/image'; // Replace with your actual image import

function CourseList() {
  const allCourses = [
    {
      imageSrc: Remix,
      title: 'Advanced Remix',
      description: 'Remix is a terrific tool for building complex web applications...',
      link: '#',
    },
    {
      imageSrc: Remix,
      title: 'Remix Fundamentals',
      description: 'Remix is a fullstack web framework...',
      link: '#',
    },
    {
      imageSrc: Remix,
      title: 'Up and Running with Remix',
      description: 'Jump in feet first... ',
      link: '#',
    },
    {
      imageSrc: Remix,
      title: 'Testing with Remix',
      description: 'Learn how to test Remix apps...',
      link: '#',
    },
    {
      imageSrc: Remix,
      title: 'Deploying Remix',
      description: 'Steps to deploy your Remix app...',
      link: '#',
    },
    {
      imageSrc: Remix,
      title: 'Remix and SEO',
      description: 'Optimize Remix apps for SEO...',
      link: '#',
    },
  ];

  // Group into sets of 3
  const courseGroups = [];
  for (let i = 0; i < allCourses.length; i += 3) {
    courseGroups.push(allCourses.slice(i, i + 3));
  }

  // Render 1 card + 2 side-by-side cards
  const renderGroup = (group, index) => {
    if (group.length < 3) return null;

    return (
      <div key={index} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* First card (full row) */}
        <div className="lg:col-span-12">
          <CourseCard {...group[0]} />
        </div>

        {/* Second + third cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-12 gap-6">
          <CourseCard {...group[1]} />
          <CourseCard {...group[2]} />
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {courseGroups.map((group, index) => renderGroup(group, index))}
    </div>
  );
}



export default CourseList;