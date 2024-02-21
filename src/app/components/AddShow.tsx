import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootState } from "../types";
import BannerDark from "../assets/banner-dark.png";
import { toast } from "react-toastify";
import { LoadingAnimation } from "./loadingAnimation";

function AddShow() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state: StoreRootState) => state.user);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddShow = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${process.env.REACT_APP_APP_URL}/api/addshow`, {
        title,
        userId: user.userId,
      });
      dispatch({
        type: "ADD_SHOW",
        payload: data.show,
      });
      toast.success("Show added!");
      setIsLoading(false);
    } catch (error) {
      console.error("Error adding show:", error);
      toast.error("Show can not be added!");
    }
  };

  return (
    <form onSubmit={handleAddShow}>
      <div className="text-center py-10" style={{ backgroundImage: `url(${BannerDark})` }}>
        <h2 className="text-5xl font-bold mb-4">Welcome.</h2>
        <p className="text-xl font-light mb-6">
          Millions of movies, TV shows and Series to discover. Explore now.
        </p>
        <div className="flex justify-center">
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            <>
              <input
                type="search"
                placeholder="Search for a movie, TV show..."
                className="text-black p-3 w-1/3 rounded-l-md focus:outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-r-md">
                Search
              </button>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

export default AddShow;
