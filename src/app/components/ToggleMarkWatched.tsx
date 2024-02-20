import React from "react";
import axios from "axios";

const ToggleMarkWatched: React.FC = () => {
  const handleToggleMarkWatched = async (id: string, watched: boolean, episodeIndex: number) => {
    try {
      await axios.put(`/api/tooglemarkwatched/${id}`, { watched, episodeIndex });
      console.log(`Episode marked as ${watched ? "watched" : "un-watched"}`);
    } catch (error) {
      console.error("Failed to toggle episode watched status:", error);
    }
  };

  return (
    <div>
      <h1>Toggle Mark Watched</h1>
      <button onClick={() => handleToggleMarkWatched("show_id", true, 0)}>
        Toggle Marked Watched
      </button>
    </div>
  );
};

export default ToggleMarkWatched;
