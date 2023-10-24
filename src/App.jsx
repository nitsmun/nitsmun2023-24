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
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        {/* About */}
        <Route path="about" element={<About />} />

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
