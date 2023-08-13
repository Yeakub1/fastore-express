import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ResetPassword from "../Authentication/ResetPassword";
import PrivateRoutes from "./PrivateRoutes";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/AllProducts/ProductDetails/ProductDetails";
import Dashbord from "../Layout/Dashbord";
import AllUsers from "../Pages/Dashbord/AdminDashbord/AllUser/Alluser";

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
        element: <AllProducts />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
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
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashbord />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "allusers",
        element: <AllUsers/>
      },
    ],
  },
]);
export default router;
