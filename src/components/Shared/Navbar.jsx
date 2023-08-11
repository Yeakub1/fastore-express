import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../components/hooks/useCart";
import { AuthContext } from "../Provider/AuthProvider";
import ActiveLink from "../utility/ActiveLink";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  const [cart] = useCart()
  
   const { user, logOut } = useContext(AuthContext);

   const handleLogOut = () => {
     logOut()
       .then((result) => {})
       .catch((error) => console.log(error));
   };

  return (
    <nav className="w-full bg-white shadow fixed z-30 top-0 left-0">
      <div className="justify-between px-5 mx-auto md:max-w-screen-xl md:items-center md:flex sticky ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div className="navbar-start ml-0">
            <Link to="/">
              <img className="md:h-full h-10" src={logo} alt="" />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0 md:-ml-20">
            <li className="">
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li className="">
              <ActiveLink to="/collage">Product</ActiveLink>
            </li>
            <li>
              <Link to="/dashboard/mycart">
                <div className="flex items-center">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="badge badge-secondary">
                    +{cart?.length || 0}
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <ActiveLink to="/admission">Contact</ActiveLink>
            </li>
          </ul>
        </div>

        <div
          className={` pb-3 mt-8  md:block md:pb-0 md:mt-0  ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center text-lg space-y-8 md:flex md:space-x-6 md:space-y-0 ">
            {user?.email ? (
              <>
                <li>
                  <ActiveLink className="mr-3" to="/myCollege">
                  Dashbord
                  </ActiveLink>
                </li>
                <li>
                  <button onClick={handleLogOut}>Log out</button>
                </li>
                <Link
                  to="userprofile"
                  className="hover-text h-10 w-10 ml-4 cursor-pointer"
                >
                  <img
                    className="w-full h-full rounded-full"
                    src={user?.photoURL}
                  />
                  <span className="tooltip-text" id="left">
                    {user?.displayName}
                  </span>
                </Link>
              </>
            ) : (
              <ActiveLink to="/login">LogIn</ActiveLink>
            )}
          </ul>
          {/* <ul className="items-center flex justify-center mx-auto text-lg gap-3">
            <button className="px-5 py-2 bg-[#004651] hover:bg-white hover:text-black text-white rounded-md  btn-outline btn">
              <Link to="login">Login</Link>
            </button>
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
