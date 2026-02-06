import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import {Home,Contact,About,User,Github} from "./components"


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       }
//     ],
//   },
// ],
// { future: { v7_startTransition: true } },);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route 
      loader={async () => {
        const response = await fetch("https://api.github.com/users/amantyagi09/repos");
        const repos = await response.json();
        return repos.map((repo) => repo.name);
      }}   // this loader function will run before the component is rendered and the data returned from this function will be available in the component using useLoaderData hook.
      path="github" element={<Github />} />
    </Route>
  ),
  { future: { v7_startTransition: true } },
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
