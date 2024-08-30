import { useState, createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/AboutUS";
import ContactUs from "./Pages/Contact-Us";
import NotFound from "./Pages/NotFound";

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
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
