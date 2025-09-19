import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Playlist from "./pages/Playlist";
import TeacherProfile from "./pages/TeacherProfile";
import UpdateProfile from "./pages/UpdateProfile";
import WatchVideo from "./pages/WatchVideo";

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
      { path: "playlist", element: <Playlist /> },
      { path: "watch-video", element: <WatchVideo /> },
      { path: "profile", element: <Profile /> },
      { path: "profile-teacher", element: <TeacherProfile /> },
      { path: "update-profile", element: <UpdateProfile /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
