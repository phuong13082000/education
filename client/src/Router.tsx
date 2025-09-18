import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      { path: "teachers", element: <Teachers /> },
      { path: "contact", element: <Contact /> },
      //   { path: "*", element: <NotFound /> },
    ],
  },
]);
