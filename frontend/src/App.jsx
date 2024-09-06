import { useState, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/AboutUS";
import ContactUs from "./Pages/Contact-Us";
import NotFound from "./Pages/NotFound";
import EventLists from "./Pages/EventLists";
import CreateEvent from "./Pages/CreateEvent";
import AboutUs from "./Pages/AboutUS";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about-us",
          element: <About />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "event-list",
          element: <EventLists />,
        },
        {
          path: "create-event",
          element: <CreateEvent />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
