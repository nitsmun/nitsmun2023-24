import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Team from "./Pages/Team/Team";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Contact from "./Pages/Contact/Contact";
import Photo from "./Pages/PhotoGallery/Photo";
import Wrapped from "./Pages/Wrapped/Wrapped";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ForgotPassword from "./Pages/Login/ForgotPassword/ForgotPassword";
import Reset from "./Pages/Login/ForgotPassword/Reset/Reset";
import Edit from "./Pages/Dashboard/EditProfile";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        {/* About */}
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/edit" element={<Edit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/wrapped" element={<Wrapped />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Reset" element={<Reset />} />
        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
