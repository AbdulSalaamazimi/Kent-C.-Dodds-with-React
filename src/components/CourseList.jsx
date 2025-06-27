import CourseCard from "../layout/CourseCard";
import Remix from "../img/fem-advanced-remix.webp";
import Fundamental from "../img/fem-remix-fundamentals.webp";
import RemixRunning from "../img/up-and-running-with-remix.webp";
import React from "../img/the-beginners-guide-to-react.webp";
import Suspense from "../img/use-suspense-to-simplify-your-async-ui.webp";
import AdvanceRemix from "../img/simplify-react-apps-with-react-hooks.webp";
import AdvancedReact from "../img/advanced-react-component-patterns.webp";
import JStesting from "../img/testing-principles.webp";
import ReactTesting from "../img/testing-react.webp";
import Transformation from "../img/asts.webp";
import OpenSource from "../img/how-to-write-an-open-source-javascript-library.webp";
import Contribute from "../img/how-to-contribute-to-an-open-source-project-on-github.webp";

function CourseList() {

  const courses = [
    {
      imageSrc: Remix,
      title: 'Advanced Remix',
      description:
        "Remix is a terrific tool for building simple websites and even better for building complex web applications. Remix solves many problems in modern web development. You don't even think about server cache management or global CSS namespace clashes. It's not that Remix has APIs to avoid these problems; they simply don't exist when you're using Remix!",
      link: '#'
    },
    {
      imageSrc: Fundamental,
      title: 'Remix Fundamentals',
      description:
        "Remix is a fullstack web framework that enables you to deliver a fast, slick, and resilient user experience. With Remix, you can build both static websites and dynamic web apps (requiring user data) while embracing the web platform's standard APIs along the way! Ready to build web apps faster?",
      link: '#'
    },
    {
      imageSrc: RemixRunning,
      title: 'Up and Running with Remix',
      description:
        "Jump in feet first and learn the most productive way to build a web application with the web framework that offers the best UX and DX the web has to offer.",
      link: '#'
    },
    {
      imageSrc: React,
      title: 'The Beginners Guide to React',
      description:
        "This course is for React newbies and anyone looking to build a solid foundation. It's designed to teach you everything you need to start building web applications in React right away.",
      link: '#'
    },
    {
      imageSrc: Suspense,
      title: 'Use Suspense to Simplify Your Async UI',
      description:
        "In this course, I teach how Suspense works under the hood, preparing you for the future of asynchronous state management in React.",
      link: '#'
    },
    {
      imageSrc: AdvanceRemix,
      title: 'Simplify React Apps with React Hooks',
      description:
        "In this course, I will take a modern React codebase that uses classes and refactor the entire thing to use function components as much as possible. We'll look at state, side effects, async code, caching, and more!",
      link: '#'
    },
    {
      imageSrc: AdvancedReact,
      title: 'Advanced React Component Patterns',
      description:
        "Once you've nailed the fundamentals of React, that's when things get really fun. This course teaches you advanced patterns in React that you can use to make components that are simple, flexible, and enjoyable to work with.",
      link: '#'
    },
    {
      imageSrc: JStesting,
      title: 'JavaScript Testing Practices and Principles',
      description:
        "Learn the principles and best practices for writing maintainable test applications to catch errors before your product reaches the end user!",
      link: '#'
    },
    {
      imageSrc: ReactTesting,
      title: 'Testing React Applications',
      description:
        "Fix errors before your app reaches the end user by writing maintainable unit test & integration tests for your React applications!",
      link: '#'
    },
    {
      imageSrc: Transformation,
      title: 'Code Transformation & Linting with ASTs',
      description:
        "Learn to use Abstract Syntax Trees (ASTs) to make stylistic code changes, reveal logical problems, and prevent bugs from entering your codebase.",
      link: '#'
    },
    {
      imageSrc: OpenSource,
      title: 'How to Write an Open Source JavaScript Library',
      description:
        "From Github and npm, to releasing beta versions, semantic versioning, code coverage, continuous integration, and providing your library with a solid set of unit tests, there are a ton of things to learn. This series will guide you through a set of steps to publish a JavaScript open source library.",
      link: '#'
    },
    {
      imageSrc: Contribute,
      title: 'How to Contribute to an Open Source Project on GitHub',
      description:
        "“Feel free to submit a PR!” - words often found in GitHub issues, but met with confusion and fear by many. Getting started with contributing open source is not always straightforward and can be tricky. With this series, you'll be equipped with the the tools, knowledge, and understanding you need to be productive and contribute to the wonderful world of open source projects.",
      link: '#'
    }
];

  const courseGroups = [];
  for (let i = 0; i < courses.length; i += 3) {
    courseGroups.push(courses.slice( i , i + 3))
  }

  const renderGroup = (group, index) => {
    if (group.length < 3) return null;

    return (
      <div key={index} className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <CourseCard {...group[0]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-12 gap-6">
          <CourseCard {...group[1]} />
          <CourseCard {...group[2]} />
        </div>
      </div>
    );
  }

    return (
      <div className="space-y-12">
        {courseGroups.map((group, index) => renderGroup(group, index))}
      </div>
    )
}

export default CourseList;