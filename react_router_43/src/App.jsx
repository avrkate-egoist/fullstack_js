import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Layout from "./components/Layout";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavigationMenu />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/contacts' element={<Contacts />} />
//       </Routes>
//       <NavagationFooter />
//     </BrowserRouter>
//   );
// }

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
      ],
    },
  ],
  { basename: "/fullstack_js/react_router_43/dist" },
);

export default function App() {
  return <RouterProvider router={router} />;
}
