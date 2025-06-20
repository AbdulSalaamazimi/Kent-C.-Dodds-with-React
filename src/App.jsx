import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Discord from "./pages/Discord";
import Chats from "./pages/Chats";
import Calls from "./pages/Calls"
import Workshops from "./pages/Workshops"
import About from "./pages/About"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="courses" element={<Courses />} />
        <Route path="discord" element={<Discord />} />
        <Route path="chats" element={<Chats />} />
        <Route path="calls" element={<Calls />} />
        <Route path="workshops" element={<Workshops />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
