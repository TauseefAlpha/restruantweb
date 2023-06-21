import React from "react";
import PublicRoutes from "./components/routes/publicRoutes";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/notFound/errorPage";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Menu from "./pages/menu/menu";
import Contact from "./pages/contact/contact";
import Dashboard from "./pages/dashboard/dashboard";
import Gallary from "./pages/gallary/gallary";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

function App() {
  return (
  
      <RouterProvider router={routes} />
  );
}

export default App;
