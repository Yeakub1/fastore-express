import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const UserProfile = () => {
  const { user, updateUser, logOut } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false);
  const navigation = useNavigation();

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };

  const handleUpdateProfile = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateUser(name, photo)
      .then(() => {
        toast.success("Successfully Update Profile!");
        setUpdate(false);
      })
      .catch((error) => {
        console.log("an error occuered", error);
        setError(error.message);
      });
  };

  return (
    <div className="my-container pt-20 md:w-1/2 md:mx-auto h-[calc(100vh-100px)]">
      <div className="flex items-center gap-5">
        <img
          src={user?.photoURL}
          alt="User photo"
          className="h-20 w-20 rounded-full"
        />
        <h2 className="text-center text-2xl font-bold">
          Hello! <span className="text-purple-700">{user?.displayName}</span>
        </h2>
      </div>
      <div className="mt-4">
        <button onClick={handleLogOut} class="Btn">
          <div class="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div class="text">Logout</div>
        </button>
      </div>
      <div className="text-gray-700 text-xl font-semibold mt-5">
        <p className=" font-bold mb-2">User Information</p>
        <p>Name: {user?.displayName}</p>
        <p>Email: {user?.email}</p>
      </div>
      <button
        onClick={handleUpdate}
        className="my-btn mt-5 bg-purple-600 text-white p-3 rounded-md"
      >
        Edit Profile
      </button>

      {/* profile update form */}
      {update && (
        <form onSubmit={handleUpdateProfile} className="mt-5">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered border-2 border-purple-700 bg-slate-50 w-full focus:outline-none"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered border-2 border-purple-700 bg-slate-50 w-full focus:outline-none mt-5"
            required
          />
          <p className="text-error mt-2">{error}</p>
          <button className="my-btn text-start mt-4 bg-purple-600 p-3 rounded-md text-white">
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
