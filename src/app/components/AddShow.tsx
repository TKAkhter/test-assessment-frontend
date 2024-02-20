import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootState } from "../types";

function AddShow() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state: StoreRootState) => state.user);

  const handleAddShow = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_APP_URL}/api/addshow`, {
        title,
        userId: user.userId,
      });
      dispatch({
        type: "ADD_SHOW",
        payload: data.show,
      });
    } catch (error) {
      console.error("Error adding show:", error);
    }
  };

  return (
    <div>
      <h2>Add Show</h2>
      <form onSubmit={handleAddShow}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Show</button>
      </form>
    </div>
  );
}

export default AddShow;
