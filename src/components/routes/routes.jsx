import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ResetPassword from "../Authentication/ResetPassword";
import PrivateRoutes from "./PrivateRoutes";
import AllProducts from "../Pages/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/resetpassword",
        element: <ResetPassword />,
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRoutes>
            <UserProfile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
