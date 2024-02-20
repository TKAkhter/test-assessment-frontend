import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { StoreRootState } from "../types";

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

  const handleToggleMarkWatched = async (id: string, watched: boolean, episodeIndex: number) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_APP_URL}/api/tooglemarkwatched/${userId}/${id}`,
        { userId, watched, episodeIndex },
      );
      dispatch({
        type: "UPDATE_LIST",
        payload: data.shows,
      });
      console.log(`Episode marked as ${watched ? "watched" : "un-watched"}`);
    } catch (error) {
      console.error("Failed to toggle episode watched status:", error);
    }
  };

  return (
    <button onClick={() => handleToggleMarkWatched(showId, !watch, episodeIndex)}>
      {watch ? "Mark as Unwatched" : "Mark as Watched"}
    </button>
  );
};

export default ToggleMarkWatched;
