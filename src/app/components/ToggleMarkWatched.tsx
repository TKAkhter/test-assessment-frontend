import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { StoreRootState } from "../types";
import { LoadingAnimation } from "./loadingAnimation";
import { toast } from "react-toastify";

interface ToggleShowMarkedWatchedProps {
  showId: string;
  episodeIndex: number;
  watch: boolean;
}

const ToggleMarkWatched: React.FC<ToggleShowMarkedWatchedProps> = ({
  showId,
  episodeIndex,
  watch,
}) => {
  const userId = useSelector((state: StoreRootState) => state.user.userId);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleMarkWatched = async (id: string, watched: boolean, episodeIndex: number) => {
    try {
      setIsLoading(true);
      const { data } = await axios.put(
        `${process.env.REACT_APP_APP_URL}/api/tooglemarkwatched/${userId}/${id}`,
        { userId, watched, episodeIndex },
      );
      dispatch({
        type: "UPDATE_LIST",
        payload: data.shows,
      });
      setIsLoading(false);
      toast.success(`Episode marked as ${watched ? "watched" : "un-watched"}`);
      console.log(`Episode marked as ${watched ? "watched" : "un-watched"}`);
    } catch (error) {
      console.error("Failed to toggle episode watched status:", error);
      toast.error("Show can not be marked!");
    }
  };

  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <button
      onClick={() => handleToggleMarkWatched(showId, !watch, episodeIndex)}
      className={`flex items-center px-2 py-1 rounded ${watch ? "bg-red-500" : "bg-gray-500"}`}
    >
      {watch && (
        <svg
          className="w-4 h-4 fill-current text-white mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-3.5-3.5 1.6-1.6L10 12l4.9-5 1.6 1.6L10 15z" />
        </svg>
      )}
      <span className="text-white font-semibold text-sm">{watch ? "Watched" : "Unwatched"}</span>
    </button>
  );
};

export default ToggleMarkWatched;
