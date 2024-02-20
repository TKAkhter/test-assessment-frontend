import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootState } from "../types";

interface RemoveShowProps {
  showId: string;
}

const RemoveShow: React.FC<RemoveShowProps> = ({ showId }) => {
  const userId = useSelector((state: StoreRootState) => state.user.userId);
  const dispatch = useDispatch();

  const handleRemoveShow = async (id: string) => {
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_APP_URL}/api/removeshow/${userId}/${id}`,
      );
      dispatch({
        type: "UPDATE_LIST",
        payload: data.shows,
      });
      console.log("Show removed successfully");
    } catch (error) {
      console.error("Failed to remove show:", error);
    }
  };

  return <button onClick={() => handleRemoveShow(showId)}>Remove Show</button>;
};

export default RemoveShow;
