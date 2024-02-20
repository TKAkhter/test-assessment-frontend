import React from "react";
import axios from "axios";

const RemoveShow: React.FC = () => {
  const handleRemoveShow = async (id: string) => {
    try {
      await axios.delete(`/api/removeshow/${id}`);
      console.log("Show removed successfully");
    } catch (error) {
      console.error("Failed to remove show:", error);
    }
  };

  return (
    <div>
      <h1>Remove Show</h1>
      <button onClick={() => handleRemoveShow("show_id")}>Remove Show</button>
    </div>
  );
};

export default RemoveShow;
