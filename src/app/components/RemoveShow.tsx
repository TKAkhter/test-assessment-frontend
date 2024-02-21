import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootState } from "../types";
import { LoadingAnimation } from "./loadingAnimation";
import { toast } from "react-toastify";

interface RemoveShowProps {
  showId: string;
}

const RemoveShow: React.FC<RemoveShowProps> = ({ showId }) => {
  const userId = useSelector((state: StoreRootState) => state.user.userId);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveShow = async (id: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.delete(
        `${process.env.REACT_APP_APP_URL}/api/removeshow/${userId}/${id}`,
      );
      dispatch({
        type: "UPDATE_LIST",
        payload: data.shows,
      });
      setIsLoading(false);
      toast.success("Show removed!");
      console.log("Show removed successfully");
    } catch (error) {
      console.error("Failed to remove show:", error);
      toast.error("Show can not be removed!");
    }
  };

  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <button
      className="mt-8 bg-red-600 text-white px-4 py-2 rounded"
      onClick={() => handleRemoveShow(showId)}
    >
      Remove Show
    </button>
  );
};

export default RemoveShow;
