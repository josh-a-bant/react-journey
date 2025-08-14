import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import StudentDetails from "./components/StudentDetails";
import NotFound from "./components/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/student/:id", element: <StudentDetails /> },
      ],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    // {
    //   path: "/student/:id",
    //   element: (
    //     <div>
    //       <Navbar />
    //       <StudentDetails />
    //     </div>
    //   ),
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
