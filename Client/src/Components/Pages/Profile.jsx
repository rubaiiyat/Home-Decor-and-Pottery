import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router";
import UserProducts from "./UserProducts";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userItems, setUserItems] = useState([]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://home-decor-pottery-server.onrender.com/item/delete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setUserItems((prev) => prev.filter((item) => item._id != id));
            Swal.fire("Deleted!", "The product has been deleted.", "success");
          });
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://home-decor-pottery-server.onrender.com/users?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setUserData(data[0]);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [user]);

  //Fetch User Items

  useEffect(() => {
    try {
      if (user?.email) {
        setLoading(true);
        fetch(
          `https://home-decor-pottery-server.onrender.com/all-items?userEmail=${user.email}`
        )
          .then((res) => res.json())
          .then((data) => {
            setUserItems(data);
            setLoading(false);
          });
      }
    } catch (error) {
      setLoading(false);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-[#E9E9E9] p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#415765] mb-2">
          Welcome, {userData?.fullName || user?.displayName || "User"}
        </h1>
        <p className="text-[#415765]/70 mb-8 text-sm sm:text-base">
          Manage your profile and products
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-[#F4F0ED] rounded-2xl shadow-sm p-4 sm:p-6 md:p-6 border border-[#D9DFD7] flex flex-col items-center">
              <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                <img
                  src={
                    userData?.image ||
                    user?.photoURL ||
                    "https://via.placeholder.com/150"
                  }
                  alt={userData?.fullName || user?.displayName || "User"}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#415765] text-center">
                {userData?.fullName || user?.displayName || "User"}
              </h2>
              <p className="text-[#415765]/70 text-sm sm:text-base text-center break-words">
                {userData?.email || user?.email}
              </p>

              <div className="mt-6 w-full">
                <Link to={"/add-item"}>
                  <button className="w-full bg-[#415765] text-[#D9DFD7] border border-[#1f3a4a] py-2 sm:py-3 rounded-xl font-medium hover:bg-[#314d5d] transition hover:cursor-pointer">
                    Add New Product
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:col-span-2">
            <div className="bg-[#F4F0ED] rounded-2xl shadow-sm p-4 sm:p-6 md:p-6 border border-[#D9DFD7]">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2 sm:gap-0">
                <h2 className="text-xl font-bold text-[#415765]">
                  My Products
                </h2>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <button className="px-4 py-2 bg-[#415765] text-[#F4F0ED] rounded-lg text-sm font-medium hover:cursor-pointer">
                    Published
                  </button>
                  <button className="px-4 py-2 bg-white text-[#415765] border border-[#D9DFD7] rounded-lg text-sm font-medium hover:cursor-pointer">
                    Drafts
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {loading ? (
                  <p>Loading items...</p>
                ) : userItems.length > 0 ? (
                  userItems.map((item) => (
                    <UserProducts
                      key={item._id}
                      item={item}
                      handleDelete={handleDelete}
                    />
                  ))
                ) : (
                  <p>No products added yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
