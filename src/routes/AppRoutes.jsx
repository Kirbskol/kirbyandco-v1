import { Route } from "react-router-dom";
import routes from "../Constants/routes";
import { Home } from "../components/Home/Home.jsx";

export const AppRoutes = [
  <Route
    key="Home"
    path={routes.HOME}
    element={
      <Home />
    }
  />,
   <Route
    key="About"
    path={routes.ABOUT}
    element={
      <Home />
    }
  />,
    <Route
    key="Contact"
    path={routes.CONTACT}
    element={
      <Home />
    }
  />,
    <Route
    key="Reviews"
    path={routes.REVIEWS}
    element={
      <Home />
    }
  />,
];